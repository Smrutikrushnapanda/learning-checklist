(() => {
  "use strict";

  const STORAGE_KEY = "learning-checklist:v1";
  const SUBJECT_IDS = ["dsa", "sql", "backend", "frontend"];
  const DEFAULT_SUBJECT = "dsa";
  const MAX_TITLE_LENGTH = 120;
  const MAX_CUSTOM_TOPICS = 500;
  const MAX_URL_LENGTH = 2000;
  const MAX_LINKS_PER_SUBJECT = 2000;
  const MAX_IMPORT_FILE_SIZE = 2 * 1024 * 1024;
  const BUILTIN_PREFIX = "b:";
  const CUSTOM_PREFIX = "c:";

  const LINK_ICON =
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';
  const EDIT_ICON =
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>';
  const PLUS_ICON =
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>';
  const YT_ICON =
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';

  const builtinSections = {};
  const builtinKeys = {};
  const builtinLinks = {};
  const builtinHindiLinks = {};
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

  function normalizeUrl(value) {
    if (typeof value !== "string") return "";

    const raw = value.trim();
    if (!raw || raw.length > MAX_URL_LENGTH) return "";

    const candidate = /^[a-z][a-z0-9+.-]*:/i.test(raw) ? raw : `https://${raw}`;

    try {
      const url = new URL(candidate);
      if (url.protocol !== "http:" && url.protocol !== "https:") return "";
      if (!url.hostname) return "";
      return url.href.length <= MAX_URL_LENGTH ? url.href : "";
    } catch (error) {
      return "";
    }
  }

  function sanitizeLinks(value) {
    const result = {};

    if (!isPlainObject(value)) return result;

    let count = 0;
    for (const [key, rawUrl] of Object.entries(value)) {
      if (count >= MAX_LINKS_PER_SUBJECT) break;
      if (typeof key !== "string" || key.length === 0 || key.length > 200) continue;

      // An empty override keeps a removed default link hidden after reload.
      if (rawUrl === "") {
        result[key] = "";
        count += 1;
        continue;
      }

      const url = normalizeUrl(rawUrl);
      if (!url) continue;

      result[key] = url;
      count += 1;
    }

    return result;
  }

  function getTopicLink(subject, key) {
    return Object.prototype.hasOwnProperty.call(state.links[subject], key)
      ? state.links[subject][key]
      : builtinLinks[subject][key] || "";
  }

  function getTopicHindiLink(subject, key) {
    return builtinHindiLinks[subject]?.[key] || "";
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
    const links = {};

    for (const subject of SUBJECT_IDS) {
      completed[subject] = [];
      custom[subject] = [];
      collapsed[subject] = {};
      links[subject] = {};
    }

    return {
      version: 1,
      activeSubject: DEFAULT_SUBJECT,
      completed,
      custom,
      collapsed,
      links
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
      builtinLinks[subject] = {};
      builtinHindiLinks[subject] = {};

      for (const section of subjectData.sections) {
        const usedSlugs = new Set();

        const topics = section.topics.map((entry) => {
          const title = typeof entry === "string" ? entry : entry.title;
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
          builtinLinks[subject][key] = normalizeUrl(entry.url);
          builtinHindiLinks[subject][key] = normalizeUrl(entry.hindiUrl);
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

      if (isPlainObject(saved.links) && isPlainObject(saved.links[subject])) {
        const validKeys = new Set(builtinKeys[subject]);
        for (const topic of next.custom[subject]) {
          validKeys.add(topic.id);
        }

        const savedLinks = sanitizeLinks(saved.links[subject]);
        for (const [key, url] of Object.entries(savedLinks)) {
          if (validKeys.has(key)) {
            next.links[subject][key] = url;
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

    sectionsHost.addEventListener("submit", (event) => {
      handleLinkEditorSubmit(subject, event);
    });

    sectionsHost.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (!(event.target instanceof Element)) return;

      const form = event.target.closest("[data-link-editor]");
      if (!form) return;

      event.preventDefault();
      closeLinkEditor(form);
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

      const linkUrl = getTopicLink(subject, topic.key);
      item.classList.toggle("has-link", Boolean(linkUrl));

      const actions = document.createElement("div");
      actions.className = "topic-actions";

      const hindiUrl = getTopicHindiLink(subject, topic.key);
      if (hindiUrl) {
        const hindiLink = document.createElement("a");
        hindiLink.className = "topic-link-btn topic-link-yt";
        hindiLink.href = hindiUrl;
        hindiLink.target = "_blank";
        hindiLink.rel = "noopener noreferrer";
        hindiLink.title = `YouTube (Hindi): ${hindiUrl}`;
        hindiLink.setAttribute(
          "aria-label",
          `Watch Hindi tutorial for ${topic.title}`
        );
        hindiLink.innerHTML = YT_ICON;
        actions.appendChild(hindiLink);
      }

      if (linkUrl) {
        const openLink = document.createElement("a");
        openLink.className = "topic-link-btn topic-link-open";
        openLink.href = linkUrl;
        openLink.target = "_blank";
        openLink.rel = "noopener noreferrer";
        openLink.title = linkUrl;
        openLink.setAttribute(
          "aria-label",
          `Open resource link for ${topic.title}`
        );
        openLink.innerHTML = LINK_ICON;
        actions.appendChild(openLink);
      }

      const linkButton = document.createElement("button");
      linkButton.type = "button";
      linkButton.className = "topic-link-btn";
      linkButton.dataset.linkEdit = topic.key;
      linkButton.innerHTML = linkUrl ? EDIT_ICON : PLUS_ICON;
      linkButton.title = linkUrl ? "Edit resource link" : "Add resource link";
      linkButton.setAttribute(
        "aria-label",
        `${linkUrl ? "Edit" : "Add"} resource link for ${topic.title}`
      );
      actions.appendChild(linkButton);

      item.appendChild(actions);

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
        const linkElement = topicElement.querySelector(".topic-link-open");
        const linkText = linkElement ? linkElement.href.toLowerCase() : "";
        const ytElement = topicElement.querySelector(".topic-link-yt");
        const ytText = ytElement ? ytElement.href.toLowerCase() : "";
        const matches =
          !query ||
          titleMatches ||
          topicText.includes(query) ||
          linkText.includes(query) ||
          ytText.includes(query);

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

    const editButton = event.target.closest("button[data-link-edit]");
    if (editButton) {
      openLinkEditor(subject, editButton.dataset.linkEdit);
      return;
    }

    const removeButton = event.target.closest("button[data-link-remove]");
    if (removeButton) {
      const form = removeButton.closest("[data-link-editor]");
      if (form) removeTopicLink(subject, form.dataset.topicKey);
      return;
    }

    const cancelButton = event.target.closest("button[data-link-cancel]");
    if (cancelButton) {
      const form = cancelButton.closest("[data-link-editor]");
      if (form) closeLinkEditor(form);
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

  function findTopicElement(subject, key) {
    const panel = panels.get(subject);
    if (!panel) return null;

    if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
      return panel.querySelector(`.topic[data-key="${CSS.escape(key)}"]`);
    }

    return (
      Array.from(panel.querySelectorAll(".topic")).find(
        (element) => element.dataset.key === key
      ) || null
    );
  }

  function focusLinkButton(subject, key) {
    const item = findTopicElement(subject, key);
    if (!item) return;

    const button = item.querySelector("[data-link-edit]");
    if (button) button.focus({ preventScroll: true });
  }

  function openLinkEditor(subject, key) {
    if (!key) return;

    const panel = panels.get(subject);
    const item = findTopicElement(subject, key);
    if (!panel || !item) return;

    panel.querySelectorAll("[data-link-editor]").forEach((editor) => {
      const owner = editor.closest(".topic");
      editor.remove();
      if (owner) owner.classList.remove("has-link-editor");
    });

    const titleElement = item.querySelector(".topic-text");
    const title = titleElement ? titleElement.textContent : "";
    const currentUrl = getTopicLink(subject, key);

    const form = document.createElement("form");
    form.className = "link-editor";
    form.noValidate = true;
    form.dataset.linkEditor = "";
    form.dataset.topicKey = key;

    const input = document.createElement("input");
    input.type = "url";
    input.className = "text-input link-input";
    input.dataset.linkInput = "";
    input.placeholder = "https://example.com/resource";
    input.maxLength = MAX_URL_LENGTH;
    input.value = currentUrl;
    input.autocomplete = "off";
    input.spellcheck = false;
    input.setAttribute("aria-label", `Resource URL for ${title}`);

    const error = document.createElement("p");
    error.className = "link-error";
    error.setAttribute("role", "alert");
    error.hidden = true;

    const buttons = document.createElement("div");
    buttons.className = "link-editor-actions";

    const saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.className = "btn btn-primary";
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "btn";
    cancelButton.dataset.linkCancel = "";
    cancelButton.textContent = "Cancel";

    buttons.append(saveButton, cancelButton);

    if (currentUrl) {
      const openLink = document.createElement("a");
      openLink.className = "btn";
      openLink.href = currentUrl;
      openLink.target = "_blank";
      openLink.rel = "noopener noreferrer";
      openLink.textContent = "Open";

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "btn btn-danger";
      removeButton.dataset.linkRemove = "";
      removeButton.textContent = "Remove";

      buttons.append(openLink, removeButton);
    }

    form.append(input, buttons, error);
    item.classList.add("has-link-editor");
    item.appendChild(form);

    input.focus();
    input.select();
  }

  function closeLinkEditor(form) {
    const item = form.closest(".topic");

    form.remove();

    if (!item) return;
    item.classList.remove("has-link-editor");

    const trigger = item.querySelector("[data-link-edit]");
    if (trigger) trigger.focus({ preventScroll: true });
  }

  function handleLinkEditorSubmit(subject, event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (!form.matches("[data-link-editor]")) return;

    event.preventDefault();

    const key = form.dataset.topicKey;
    const input = form.querySelector("[data-link-input]");
    const error = form.querySelector(".link-error");
    if (!key || !input || !error) return;

    const raw = input.value.trim();
    const url = normalizeUrl(raw);

    if (!url) {
      error.textContent = raw
        ? "Enter a valid http:// or https:// URL."
        : "Enter a URL first.";
      error.hidden = false;
      input.focus();
      return;
    }

    state.links[subject][key] = url;
    saveState();
    renderSections(subject);
    showMessage(subject, "Resource link saved.");
    focusLinkButton(subject, key);
  }

  function removeTopicLink(subject, key) {
    if (!key || !getTopicLink(subject, key)) return;

    if (builtinLinks[subject][key]) {
      state.links[subject][key] = "";
    } else {
      delete state.links[subject][key];
    }
    saveState();
    renderSections(subject);
    showMessage(subject, "Resource link removed.");
    focusLinkButton(subject, key);
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
    delete state.links[subject][key];

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

      const links = {};
      for (const key of currentKeys) {
        const url = getTopicLink(subject, key);
        if (url || Object.prototype.hasOwnProperty.call(state.links[subject], key)) {
          links[key] = url;
        }
      }

      subjects[subject] = {
        completed: state.completed[subject].filter((key) => currentKeys.has(key)),
        custom: state.custom[subject].map((topic) => ({
          id: topic.id,
          title: topic.title
        })),
        links
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
    const links = {};

    for (const subject of SUBJECT_IDS) {
      const subjectData = isPlainObject(source[subject]) ? source[subject] : {};

      custom[subject] = sanitizeCustomTopics(subjectData.custom);

      const validKeys = new Set(builtinKeys[subject]);
      for (const topic of custom[subject]) {
        validKeys.add(topic.id);
      }

      links[subject] = {};
      const importedLinks = sanitizeLinks(subjectData.links);
      for (const [key, url] of Object.entries(importedLinks)) {
        if (validKeys.has(key)) links[subject][key] = url;
      }

      completed[subject] = sanitizeKeys(subjectData.completed).filter((key) =>
        validKeys.has(key)
      );
    }

    return { completed, custom, links };
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
      state.links = imported.links;
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
