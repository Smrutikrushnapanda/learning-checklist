(() => {
  "use strict";

  const STORAGE_KEY = "learning-checklist:v1";
  const SUBJECT_IDS = ["dsa", "sql", "backend", "frontend"];
  const DEFAULT_SUBJECT = "dsa";
  const MAX_TITLE_LENGTH = 120;
  const MAX_CUSTOM_TOPICS = 500;
  const MAX_IMPORT_FILE_SIZE = 2 * 1024 * 1024;
  const BUILTIN_PREFIX = "b:";
  const CUSTOM_PREFIX = "c:";

  const builtinSections = {};
  const builtinKeys = {};
  const panels = new Map();
  const searchQueries = { dsa: "", sql: "", backend: "", frontend: "" };
  const messageTimers = new WeakMap();

  let state = createEmptyState();
  let storageWarningShown = false;
  let stateWasLoaded = false;

  /* ------------------------------------------------------------------
     Utilities
     ------------------------------------------------------------------ */

  function isPlainObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  function normalizeTitle(value) {
    return String(value).replace(/\s+/g, " ").trim();
  }

  function slugify(value) {
    return String(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function makeCustomKey() {
    let id = "";
    try {
      if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
        id = crypto.randomUUID();
      }
    } catch (error) {
      id = "";
    }
    if (!id) {
      id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    }
    return `${CUSTOM_PREFIX}${id}`;
  }

  function createEmptyState() {
    const completed = {};
    const custom = {};
    const collapsed = {};

    for (const subject of SUBJECT_IDS) {
      completed[subject] = [];
      custom[subject] = [];
      collapsed[subject] = {};
    }

    return {
      version: 1,
      activeSubject: DEFAULT_SUBJECT,
      completed,
      custom,
      collapsed
    };
  }

  function sanitizeKeys(value) {
    if (!Array.isArray(value)) return [];

    const seen = new Set();
    const result = [];

    for (const key of value) {
      if (
        typeof key === "string" &&
        key.length > 0 &&
        key.length <= 200 &&
        !seen.has(key)
      ) {
        seen.add(key);
        result.push(key);
      }
    }

    return result;
  }

  function sanitizeCustomTopics(value) {
    if (!Array.isArray(value)) return [];

    const seenIds = new Set();
    const result = [];

    for (const entry of value) {
      if (result.length >= MAX_CUSTOM_TOPICS) break;

      let title = "";
      let suppliedId = "";

      if (typeof entry === "string") {
        title = normalizeTitle(entry);
      } else if (isPlainObject(entry)) {
        title = normalizeTitle(entry.title);
        suppliedId = typeof entry.id === "string" ? entry.id : "";
      }

      title = title.slice(0, MAX_TITLE_LENGTH);
      if (!title) continue;

      let id =
        /^c:[A-Za-z0-9_-]{1,100}$/.test(suppliedId) && !seenIds.has(suppliedId)
          ? suppliedId
          : makeCustomKey();

      while (seenIds.has(id)) {
        id = makeCustomKey();
      }

      seenIds.add(id);
      result.push({ id, title });
    }

    return result;
  }

  /* ------------------------------------------------------------------
     Syllabus index
     ------------------------------------------------------------------ */

  function buildSyllabusIndex() {
    for (const subject of SUBJECT_IDS) {
      const subjectData = SYLLABUS[subject];

      if (!subjectData || !Array.isArray(subjectData.sections)) {
        throw new Error(`Missing syllabus for ${subject}`);
      }

      builtinSections[subject] = [];
      builtinKeys[subject] = new Set();

      for (const section of subjectData.sections) {
        const usedSlugs = new Set();

        const topics = section.topics.map((title) => {
          const baseSlug = slugify(title) || "topic";
          let slug = baseSlug;
          let suffix = 2;

          while (usedSlugs.has(slug)) {
            slug = `${baseSlug}-${suffix}`;
            suffix += 1;
          }
          usedSlugs.add(slug);

          const key = `${BUILTIN_PREFIX}${section.id}:${slug}`;
          builtinKeys[subject].add(key);
          return { key, title };
        });

        builtinSections[subject].push({
          id: section.id,
          title: section.title,
          topics
        });
      }
    }
  }

  function getSections(subject) {
    const result = [];
    const customTopics = state.custom[subject].map((topic) => ({
      key: topic.id,
      title: topic.title,
      custom: true
    }));

    if (customTopics.length > 0) {
      result.push({
        id: "custom",
        title: "Custom topics",
        topics: customTopics,
        custom: true
      });
    }

    for (const section of builtinSections[subject]) {
      result.push({
        id: section.id,
        title: section.title,
        topics: section.topics,
        custom: false
      });
    }

    return result;
  }

  /* ------------------------------------------------------------------
     Persistence
     ------------------------------------------------------------------ */

  function loadState() {
    let saved = null;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) saved = JSON.parse(raw);
    } catch (error) {
      saved = null;
    }

    if (!isPlainObject(saved)) {
      return createEmptyState();
    }

    stateWasLoaded = true;
    const next = createEmptyState();

    if (SUBJECT_IDS.includes(saved.activeSubject)) {
      next.activeSubject = saved.activeSubject;
    }

    for (const subject of SUBJECT_IDS) {
      if (isPlainObject(saved.completed)) {
        next.completed[subject] = sanitizeKeys(saved.completed[subject]);
      }

      if (isPlainObject(saved.custom)) {
        next.custom[subject] = sanitizeCustomTopics(saved.custom[subject]);
      }

      if (isPlainObject(saved.collapsed) && isPlainObject(saved.collapsed[subject])) {
        for (const [sectionId, value] of Object.entries(saved.collapsed[subject])) {
          if (
            value === true &&
            typeof sectionId === "string" &&
            sectionId.length <= 200
          ) {
            next.collapsed[subject][sectionId] = true;
          }
        }
      }
    }

    return next;
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      showStorageWarning();
    }
  }

  function checkStorage() {
    try {
      const probeKey = "__learning_checklist_probe__";
      localStorage.setItem(probeKey, "1");
      localStorage.removeItem(probeKey);
    } catch (error) {
      showStorageWarning();
    }
  }

  function showStorageWarning() {
    if (storageWarningShown) return;
    storageWarningShown = true;

    const notice = document.getElementById("storageNotice");
    if (!notice) return;

    notice.textContent =
      "Progress cannot be saved because local storage is unavailable or full. Changes will be lost on refresh.";
    notice.hidden = false;
  }

  /* ------------------------------------------------------------------
     Subject panels
     ------------------------------------------------------------------ */

  function buildPanel(subject) {
    const meta = SYLLABUS[subject];
    const panel = document.createElement("section");

    panel.className = "subject-panel";
    panel.id = `panel-${subject}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", `tab-${subject}`);
    panel.hidden = subject !== state.activeSubject;

    panel.innerHTML = `
      <div class="progress-block">
        <div class="progress-top">
          <div class="progress-stats">
            <span class="stat">Total <strong data-stat="total">0</strong></span>
            <span class="stat">Completed <strong data-stat="completed">0</strong></span>
            <span class="stat">Remaining <strong data-stat="remaining">0</strong></span>
          </div>
          <span class="progress-percent" data-stat="percent">0%</span>
        </div>
        <div class="progress-track" role="progressbar" aria-valuemin="0"
          aria-valuemax="100" aria-valuenow="0" data-progress-track>
          <div class="progress-fill" data-progress-fill></div>
        </div>
      </div>

      <div class="panel-toolbar">
        <div class="search-wrap">
          <label class="sr-only" for="search-${subject}">Search ${meta.label} topics</label>
          <input type="search" id="search-${subject}" class="search-input"
            data-search maxlength="100" placeholder="Search ${meta.label} topics..."
            autocomplete="off" spellcheck="false">
        </div>
        <div class="toolbar-actions">
          <button type="button" class="btn" data-expand-all>Expand all</button>
          <button type="button" class="btn" data-collapse-all>Collapse all</button>
          <button type="button" class="btn btn-danger" data-reset>Reset</button>
        </div>
      </div>

      <form class="add-topic" data-add-form novalidate>
        <label class="sr-only" for="add-${subject}">Add a custom ${meta.label} topic</label>
        <input type="text" id="add-${subject}" class="text-input" data-add-input
          maxlength="${MAX_TITLE_LENGTH}" placeholder="Add a custom ${meta.label} topic..."
          autocomplete="off">
        <button type="submit" class="btn btn-primary">Add topic</button>
      </form>

      <p class="form-message" data-message role="status" aria-live="polite"></p>
      <div class="sections" data-sections></div>
    `;

    const search = panel.querySelector("[data-search]");
    const addForm = panel.querySelector("[data-add-form]");
    const sectionsHost = panel.querySelector("[data-sections]");
    const exportButton = panel.querySelector("[data-reset]");

    const progressTrack = panel.querySelector("[data-progress-track]");
    progressTrack.setAttribute("aria-label", `${meta.label} progress`);

    search.value = searchQueries[subject];

    search.addEventListener("input", () => {
      searchQueries[subject] = search.value;
      applyFilter(subject);
    });

    search.addEventListener("search", () => {
      searchQueries[subject] = search.value;
      applyFilter(subject);
    });

    search.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || search.value === "") return;
      event.preventDefault();
      search.value = "";
      searchQueries[subject] = "";
      applyFilter(subject);
    });

    addForm.addEventListener("submit", (event) => {
      event.preventDefault();
      addCustomTopic(subject);
    });

    panel.querySelector("[data-expand-all]").addEventListener("click", () => {
      setAllSectionsCollapsed(subject, false);
    });

    panel.querySelector("[data-collapse-all]").addEventListener("click", () => {
      setAllSectionsCollapsed(subject, true);
    });

    exportButton.addEventListener("click", () => resetSubject(subject));

    sectionsHost.addEventListener("change", (event) => {
      handleTopicChange(subject, event);
    });

    sectionsHost.addEventListener("click", (event) => {
      handleSectionsClick(subject, event);
    });

    panels.set(subject, panel);
    document.getElementById("panels").appendChild(panel);
  }

  function renderSections(subject) {
    const panel = panels.get(subject);
    if (!panel) return;

    const host = panel.querySelector("[data-sections]");
    host.replaceChildren();

    for (const section of getSections(subject)) {
      host.appendChild(buildSectionElement(subject, section));
    }

    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.dataset.empty = "true";
    empty.hidden = true;
    host.appendChild(empty);

    applyFilter(subject);
    updateProgress(subject);
  }

  function buildSectionElement(subject, section) {
    const wrapper = document.createElement("div");
    wrapper.className = "section";
    wrapper.dataset.sectionId = section.id;

    const isCollapsed = Boolean(state.collapsed[subject][section.id]);
    if (isCollapsed) wrapper.classList.add("is-collapsed");

    const listId = `topics-${subject}-${section.id}`;
    const completedKeys = new Set(state.completed[subject]);

    const header = document.createElement("button");
    header.type = "button";
    header.className = "section-header";
    header.setAttribute("aria-expanded", String(!isCollapsed));
    header.setAttribute("aria-controls", listId);

    const chevron = document.createElement("span");
    chevron.className = "chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "\u203A";

    const title = document.createElement("span");
    title.className = "section-title";
    title.textContent = section.title;

    const count = document.createElement("span");
    count.className = "section-count";

    header.append(chevron, title, count);

    const list = document.createElement("ul");
    list.className = "topics";
    list.id = listId;

    let completedCount = 0;

    for (const topic of section.topics) {
      const isCompleted = completedKeys.has(topic.key);

      const item = document.createElement("li");
      item.className = "topic";
      item.dataset.key = topic.key;
      if (isCompleted) {
        item.classList.add("is-complete");
        completedCount += 1;
      }

      const label = document.createElement("label");
      label.className = "topic-label";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = isCompleted;
      checkbox.dataset.topicKey = topic.key;
      checkbox.dataset.subject = subject;

      const text = document.createElement("span");
      text.className = "topic-text";
      text.textContent = topic.title;

      label.append(checkbox, text);
      item.appendChild(label);

      if (section.custom) {
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "topic-delete";
        deleteButton.dataset.deleteTopic = topic.key;
        deleteButton.setAttribute("aria-label", `Delete custom topic: ${topic.title}`);
        deleteButton.title = "Delete custom topic";
        deleteButton.textContent = "\u00D7";
        item.appendChild(deleteButton);
      }

      list.appendChild(item);
    }

    count.textContent = `${completedCount}/${section.topics.length}`;
    count.classList.toggle(
      "is-complete",
      section.topics.length > 0 && completedCount === section.topics.length
    );

    wrapper.append(header, list);
    return wrapper;
  }

  /* ------------------------------------------------------------------
     Progress and topic state
     ------------------------------------------------------------------ */

  function updateProgress(subject) {
    const panel = panels.get(subject);
    if (!panel) return;

    const inputs = panel.querySelectorAll(".topics input[type='checkbox']");
    const total = inputs.length;
    let completed = 0;

    inputs.forEach((input) => {
      if (input.checked) completed += 1;
    });

    const remaining = total - completed;
    const percent =
      total === 0
        ? 0
        : completed === total
          ? 100
          : Math.min(99, Math.round((completed / total) * 100));

    panel.querySelector("[data-stat='total']").textContent = String(total);
    panel.querySelector("[data-stat='completed']").textContent = String(completed);
    panel.querySelector("[data-stat='remaining']").textContent = String(remaining);
    panel.querySelector("[data-stat='percent']").textContent = `${percent}%`;

    const fill = panel.querySelector("[data-progress-fill]");
    fill.style.width = `${percent}%`;

    const track = panel.querySelector("[data-progress-track]");
    track.setAttribute("aria-valuenow", String(percent));
    track.setAttribute("aria-valuetext", `${completed} of ${total} topics completed`);
  }

  function updateSectionCount(sectionElement) {
    if (!sectionElement) return;

    const inputs = sectionElement.querySelectorAll("input[type='checkbox']");
    const total = inputs.length;
    let completed = 0;

    inputs.forEach((input) => {
      if (input.checked) completed += 1;
    });

    const count = sectionElement.querySelector(".section-count");
    count.textContent = `${completed}/${total}`;
    count.classList.toggle("is-complete", total > 0 && completed === total);
  }

  function setTopicCompleted(subject, key, completed) {
    const completedList = state.completed[subject];
    const index = completedList.indexOf(key);

    if (completed && index === -1) {
      completedList.push(key);
    } else if (!completed && index !== -1) {
      completedList.splice(index, 1);
    }
  }

  function handleTopicChange(subject, event) {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.type !== "checkbox") return;

    const key = input.dataset.topicKey;
    if (!key) return;

    const topicElement = input.closest(".topic");
    if (!topicElement) return;

    setTopicCompleted(subject, key, input.checked);
    topicElement.classList.toggle("is-complete", input.checked);

    updateSectionCount(input.closest(".section"));
    updateProgress(subject);
    saveState();
  }

  /* ------------------------------------------------------------------
     Filtering, collapsing, adding and deleting
     ------------------------------------------------------------------ */

  function applyFilter(subject) {
    const panel = panels.get(subject);
    if (!panel) return;

    const rawQuery = (searchQueries[subject] || "").trim();
    const query = rawQuery.toLowerCase();
    const sectionElements = panel.querySelectorAll(".section");
    let visibleTopics = 0;
    let collapseStateChanged = false;

    sectionElements.forEach((sectionElement) => {
      const titleElement = sectionElement.querySelector(".section-title");
      const sectionTitle = titleElement ? titleElement.textContent.toLowerCase() : "";
      const titleMatches = Boolean(query) && sectionTitle.includes(query);
      let visibleInSection = 0;

      sectionElement.querySelectorAll(".topic").forEach((topicElement) => {
        const textElement = topicElement.querySelector(".topic-text");
        const topicText = textElement ? textElement.textContent.toLowerCase() : "";
        const matches = !query || titleMatches || topicText.includes(query);

        topicElement.hidden = !matches;
        if (matches) visibleInSection += 1;
      });

      sectionElement.hidden = Boolean(query) && visibleInSection === 0;
      visibleTopics += visibleInSection;

      if (
        query &&
        visibleInSection > 0 &&
        sectionElement.classList.contains("is-collapsed")
      ) {
        sectionElement.classList.remove("is-collapsed");
        sectionElement
          .querySelector(".section-header")
          .setAttribute("aria-expanded", "true");

        const sectionId = sectionElement.dataset.sectionId;
        if (state.collapsed[subject][sectionId]) {
          delete state.collapsed[subject][sectionId];
          collapseStateChanged = true;
        }
      }
    });

    const emptyState = panel.querySelector("[data-empty]");
    if (emptyState) {
      if (!query) {
        emptyState.hidden = visibleTopics !== 0;
        emptyState.textContent = "No topics yet. Add one above.";
      } else {
        emptyState.hidden = visibleTopics !== 0;
        emptyState.textContent = `No topics match \u201C${rawQuery}\u201D.`;
      }
    }

    if (collapseStateChanged) saveState();
  }

  function setAllSectionsCollapsed(subject, collapsed) {
    const panel = panels.get(subject);
    if (!panel) return;

    panel.querySelectorAll(".section").forEach((sectionElement) => {
      const sectionId = sectionElement.dataset.sectionId;

      sectionElement.classList.toggle("is-collapsed", collapsed);
      sectionElement
        .querySelector(".section-header")
        .setAttribute("aria-expanded", String(!collapsed));

      if (collapsed) {
        state.collapsed[subject][sectionId] = true;
      } else {
        delete state.collapsed[subject][sectionId];
      }
    });

    saveState();
  }

  function handleSectionsClick(subject, event) {
    if (!(event.target instanceof Element)) return;

    const deleteButton = event.target.closest("button[data-delete-topic]");
    if (deleteButton) {
      deleteCustomTopic(subject, deleteButton.dataset.deleteTopic);
      return;
    }

    const header = event.target.closest(".section-header");
    if (!header) return;

    const sectionElement = header.closest(".section");
    if (!sectionElement) return;

    const sectionId = sectionElement.dataset.sectionId;
    const willExpand = sectionElement.classList.contains("is-collapsed");

    sectionElement.classList.toggle("is-collapsed", !willExpand);
    header.setAttribute("aria-expanded", String(willExpand));

    if (willExpand) {
      delete state.collapsed[subject][sectionId];
    } else {
      state.collapsed[subject][sectionId] = true;
    }

    saveState();
  }

  function addCustomTopic(subject) {
    const panel = panels.get(subject);
    if (!panel) return;

    const input = panel.querySelector("[data-add-input]");
    const title = normalizeTitle(input.value).slice(0, MAX_TITLE_LENGTH);

    if (!title) {
      showMessage(subject, "Enter a topic name first.", "error");
      input.focus();
      return;
    }

    if (state.custom[subject].length >= MAX_CUSTOM_TOPICS) {
      showMessage(
        subject,
        `You can add up to ${MAX_CUSTOM_TOPICS} custom topics per subject.`,
        "error"
      );
      return;
    }

    const duplicate = getSections(subject).some((section) =>
      section.topics.some(
        (topic) => normalizeTitle(topic.title).toLowerCase() === title.toLowerCase()
      )
    );

    if (duplicate) {
      showMessage(subject, `\u201C${title}\u201D is already in this checklist.`, "error");
      input.focus();
      input.select();
      return;
    }

    let key = makeCustomKey();
    while (state.custom[subject].some((topic) => topic.id === key)) {
      key = makeCustomKey();
    }

    state.custom[subject].push({ id: key, title });
    delete state.collapsed[subject].custom;
    saveState();

    searchQueries[subject] = "";
    panel.querySelector("[data-search]").value = "";
    input.value = "";

    renderSections(subject);
    showMessage(subject, `Added \u201C${title}\u201D.`);
    input.focus();
  }

  function deleteCustomTopic(subject, key) {
    const topic = state.custom[subject].find((item) => item.id === key);
    if (!topic) return;

    if (!window.confirm(`Delete custom topic \u201C${topic.title}\u201D?`)) {
      return;
    }

    state.custom[subject] = state.custom[subject].filter((item) => item.id !== key);
    state.completed[subject] = state.completed[subject].filter(
      (completedKey) => completedKey !== key
    );

    saveState();
    renderSections(subject);
    showMessage(subject, "Custom topic deleted.");

    const search = panels.get(subject).querySelector("[data-search]");
    search.focus({ preventScroll: true });
  }

  function resetSubject(subject) {
    const panel = panels.get(subject);
    if (!panel) return;

    const label = SYLLABUS[subject].label;
    const completed = panel.querySelectorAll(
      ".topics input[type='checkbox']:checked"
    ).length;

    let message = `Reset all progress for ${label}?`;
    if (completed > 0) {
      message += ` ${completed} completed ${
        completed === 1 ? "topic" : "topics"
      } will be unchecked.`;
    }
    message += " Custom topics will be kept.";

    if (!window.confirm(message)) return;

    state.completed[subject] = [];
    saveState();
    renderSections(subject);
    showMessage(subject, `Progress reset for ${label}.`);
  }

  /* ------------------------------------------------------------------
     Messages, tabs and export/import
     ------------------------------------------------------------------ */

  function showMessage(subject, text, tone = "info") {
    const panel = panels.get(subject);
    if (!panel) return;

    const message = panel.querySelector("[data-message]");
    if (!message) return;

    message.textContent = text;
    message.classList.toggle("is-error", tone === "error");

    const existingTimer = messageTimers.get(message);
    if (existingTimer) {
      window.clearTimeout(existingTimer);
    }

    if (text) {
      const timeout = tone === "error" ? 8000 : 4500;
      messageTimers.set(
        message,
        window.setTimeout(() => {
          message.textContent = "";
          message.classList.remove("is-error");
          messageTimers.delete(message);
        }, timeout)
      );
    }
  }

  function activateSubject(subject, persist = true) {
    if (!SUBJECT_IDS.includes(subject)) {
      subject = DEFAULT_SUBJECT;
    }

    state.activeSubject = subject;

    for (const id of SUBJECT_IDS) {
      const tab = document.getElementById(`tab-${id}`);
      const panel = panels.get(id);
      const isActive = id === subject;

      if (tab) {
        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      }

      if (panel) {
        panel.hidden = !isActive;
      }
    }

    if (persist) saveState();
  }

  function setupTabs() {
    const tabList = document.querySelector(".tabs");
    if (!tabList) return;

    tabList.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const tab = event.target.closest(".tab");
      if (!tab || !SUBJECT_IDS.includes(tab.dataset.subject)) return;
      activateSubject(tab.dataset.subject);
    });

    tabList.addEventListener("keydown", (event) => {
      if (!(event.target instanceof Element)) return;
      const tab = event.target.closest(".tab");
      if (!tab) return;

      const currentIndex = SUBJECT_IDS.indexOf(tab.dataset.subject);
      if (currentIndex === -1) return;

      let nextIndex = null;

      if (event.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % SUBJECT_IDS.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex =
          (currentIndex - 1 + SUBJECT_IDS.length) % SUBJECT_IDS.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = SUBJECT_IDS.length - 1;
      }

      if (nextIndex === null) return;

      event.preventDefault();
      const nextSubject = SUBJECT_IDS[nextIndex];
      const nextTab = document.getElementById(`tab-${nextSubject}`);
      if (nextTab) nextTab.focus();
      activateSubject(nextSubject);
    });
  }

  function buildExportPayload() {
    const subjects = {};

    for (const subject of SUBJECT_IDS) {
      const panel = panels.get(subject);
      const currentKeys = new Set(
        Array.from(
          panel.querySelectorAll(".topics input[data-topic-key]"),
          (input) => input.dataset.topicKey
        )
      );

      subjects[subject] = {
        completed: state.completed[subject].filter((key) => currentKeys.has(key)),
        custom: state.custom[subject].map((topic) => ({
          id: topic.id,
          title: topic.title
        }))
      };
    }

    return {
      app: "learning-checklist",
      version: 1,
      exportedAt: new Date().toISOString(),
      subjects
    };
  }

  function exportProgress() {
    const payload = buildExportPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    const stamp = new Date().toISOString().slice(0, 10);

    anchor.href = url;
    anchor.download = `learning-checklist-progress-${stamp}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showMessage(state.activeSubject, "Progress exported as JSON.");
  }

  function parseImport(data) {
    if (!isPlainObject(data) || !isPlainObject(data.subjects)) {
      throw new Error("The file does not contain checklist progress.");
    }

    const source = data.subjects;
    const hasKnownSubject = SUBJECT_IDS.some((subject) =>
      isPlainObject(source[subject])
    );

    if (!hasKnownSubject) {
      throw new Error("The file does not contain any known subjects.");
    }

    const completed = {};
    const custom = {};

    for (const subject of SUBJECT_IDS) {
      const subjectData = isPlainObject(source[subject]) ? source[subject] : {};

      custom[subject] = sanitizeCustomTopics(subjectData.custom);

      const validKeys = new Set(builtinKeys[subject]);
      for (const topic of custom[subject]) {
        validKeys.add(topic.id);
      }

      completed[subject] = sanitizeKeys(subjectData.completed).filter((key) =>
        validKeys.has(key)
      );
    }

    return { completed, custom };
  }

  async function importProgressFile(file) {
    if (!file) return;

    if (file.size > MAX_IMPORT_FILE_SIZE) {
      showMessage(
        state.activeSubject,
        "Import failed: the file is larger than 2 MB.",
        "error"
      );
      return;
    }

    try {
      const text = await file.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch (error) {
        throw new Error("The selected file is not valid JSON.");
      }

      const imported = parseImport(data);

      const confirmed = window.confirm(
        "Import this file? It will replace all current progress and custom topics in every subject."
      );

      if (!confirmed) {
        showMessage(state.activeSubject, "Import cancelled.");
        return;
      }

      state.completed = imported.completed;
      state.custom = imported.custom;
      saveState();

      for (const subject of SUBJECT_IDS) {
        renderSections(subject);
      }

      showMessage(state.activeSubject, "Progress imported successfully.");
    } catch (error) {
      const reason = error && error.message ? error.message : "Unknown error.";
      showMessage(
        state.activeSubject,
        `Import failed: ${String(reason).slice(0, 200)}`,
        "error"
      );
    }
  }

  function setupImportExport() {
    const exportButton = document.getElementById("exportBtn");
    const importButton = document.getElementById("importBtn");
    const fileInput = document.getElementById("importFile");

    if (exportButton) {
      exportButton.addEventListener("click", exportProgress);
    }

    if (importButton && fileInput) {
      importButton.addEventListener("click", () => fileInput.click());

      fileInput.addEventListener("change", async () => {
        const file = fileInput.files && fileInput.files[0];
        fileInput.value = "";
        await importProgressFile(file);
      });
    }
  }

  /* ------------------------------------------------------------------
     Initialization
     ------------------------------------------------------------------ */

  function init() {
    try {
      if (typeof SYLLABUS === "undefined") {
        throw new Error("Syllabus file did not load.");
      }

      buildSyllabusIndex();
      state = loadState();

      // Start with a compact overview on the very first visit. After that,
      // the saved expand/collapse state is respected.
      if (!stateWasLoaded) {
        for (const subject of SUBJECT_IDS) {
          for (const section of builtinSections[subject]) {
            state.collapsed[subject][section.id] = true;
          }
        }
        saveState();
      }

      for (const subject of SUBJECT_IDS) {
        buildPanel(subject);
      }

      for (const subject of SUBJECT_IDS) {
        renderSections(subject);
      }

      setupTabs();
      setupImportExport();
      activateSubject(state.activeSubject, false);
      checkStorage();
    } catch (error) {
      const main = document.getElementById("panels");
      if (main) {
        main.textContent =
          "The checklist could not be loaded. Make sure syllabus.js and script.js are present.";
      }
      console.error(error);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
