/* Study topics and default resource URLs for the four checklist subjects. */

const SYLLABUS = {
  dsa: {
    label: "DSA",
    sections: [
      {
        id: "fundamentals",
        title: "Fundamentals",
        topics: [
          { title: "Big O Notation", url: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#heading-algorithmic-complexity", hindiUrl: "https://www.youtube.com/watch?v=vgSKOMsjLbc" },
          { title: "Time Complexity", url: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#heading-algorithmic-complexity", hindiUrl: "https://www.youtube.com/watch?v=NxosxyanwCY" },
          { title: "Space Complexity", url: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#heading-algorithmic-complexity", hindiUrl: "https://www.youtube.com/watch?v=NxosxyanwCY" },
          { title: "Asymptotic Analysis", url: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#heading-algorithmic-complexity", hindiUrl: "https://www.youtube.com/watch?v=NxosxyanwCY" },
          { title: "Best, Average and Worst Case", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort", hindiUrl: "https://www.youtube.com/watch?v=NxosxyanwCY" },
          { title: "Common Complexity Classes", url: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#heading-algorithmic-complexity", hindiUrl: "https://www.youtube.com/watch?v=NxosxyanwCY" },
          { title: "Amortized Analysis", url: "https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/", hindiUrl: "https://www.youtube.com/watch?v=NxosxyanwCY" },
          { title: "Recursion vs Iteration", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion", hindiUrl: "https://www.youtube.com/watch?v=NxosxyanwCY" },
          { title: "Problem-Solving Approach", url: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/", hindiUrl: "https://www.youtube.com/watch?v=NxosxyanwCY" }
        ]
      },
      {
        id: "arrays",
        title: "Arrays",
        topics: [
          { title: "Array Traversal", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterate_over_an_array", hindiUrl: "https://www.youtube.com/watch?v=tpigkuVNFsQ" },
          { title: "Reverse Array", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse", hindiUrl: "https://www.youtube.com/watch?v=tpigkuVNFsQ" },
          { title: "Find Maximum", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#getting_the_maximum_element_of_an_array", hindiUrl: "https://www.youtube.com/watch?v=AHZpyENo7k4" },
          { title: "Find Minimum", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min", hindiUrl: "https://www.youtube.com/watch?v=N6SQZTFIuN4" },
          { title: "Find Duplicates", url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/", hindiUrl: "https://www.youtube.com/watch?v=N6SQZTFIuN4" },
          { title: "Second Largest Element", url: "https://github.com/TheAlgorithms/JavaScript/blob/master/Sorts/FindSecondLargestElement.js", hindiUrl: "https://www.youtube.com/watch?v=N6SQZTFIuN4" },
          { title: "Rotate Array", url: "https://leetcode.com/problems/rotate-array/", hindiUrl: "https://www.youtube.com/watch?v=tpigkuVNFsQ" },
          { title: "Move Zeroes", url: "https://leetcode.com/problems/move-zeroes/", hindiUrl: "https://www.youtube.com/watch?v=N6SQZTFIuN4" },
          { title: "Prefix Sum", url: "https://completefrontend.com/dsa/algorithms/prefix-sum", hindiUrl: "https://www.youtube.com/watch?v=AHZpyENo7k4" },
          { title: "Kadane's Algorithm", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/maximum-subarray", hindiUrl: "https://www.youtube.com/watch?v=AHZpyENo7k4" },
          { title: "Merge Sorted Arrays", url: "https://leetcode.com/problems/merge-sorted-array/", hindiUrl: "https://www.youtube.com/watch?v=N6SQZTFIuN4" },
          { title: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", hindiUrl: "https://www.youtube.com/watch?v=tpigkuVNFsQ" }
        ]
      },
      {
        id: "strings",
        title: "Strings",
        topics: [
          { title: "String Traversal", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String", hindiUrl: "https://www.youtube.com/watch?v=VTLCoHnyACE" },
          { title: "Reverse String", url: "https://leetcode.com/problems/reverse-string/", hindiUrl: "https://www.youtube.com/watch?v=VTLCoHnyACE" },
          { title: "Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", hindiUrl: "https://www.youtube.com/watch?v=0Fxc_jKj2vo" },
          { title: "Anagram", url: "https://leetcode.com/problems/valid-anagram/", hindiUrl: "https://www.youtube.com/watch?v=9kQ1JUDleWg" },
          { title: "Character Frequency", url: "https://leetcode.com/problems/first-unique-character-in-a-string/", hindiUrl: "https://www.youtube.com/watch?v=MOSjYaVymcU" },
          { title: "Longest Common Prefix", url: "https://leetcode.com/problems/longest-common-prefix/", hindiUrl: "https://www.youtube.com/watch?v=qtVh-XEpsJo" },
          { title: "String Compression", url: "https://leetcode.com/problems/string-compression/", hindiUrl: "https://www.youtube.com/watch?v=VTLCoHnyACE" },
          { title: "Substring Search", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/knuth-morris-pratt", hindiUrl: "https://www.youtube.com/watch?v=qtVh-XEpsJo" },
          { title: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/", hindiUrl: "https://www.youtube.com/watch?v=qtVh-XEpsJo" },
          { title: "ASCII and Unicode Basics", url: "https://developer.mozilla.org/en-US/docs/Glossary/Unicode", hindiUrl: "https://www.youtube.com/watch?v=9kQ1JUDleWg" }
        ]
      },
      {
        id: "searching-sorting",
        title: "Searching and Sorting",
        topics: [
          { title: "Linear Search", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/linear-search", hindiUrl: "https://www.youtube.com/watch?v=ByLlEk7zmyw" },
          { title: "Binary Search", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search", hindiUrl: "https://www.youtube.com/watch?v=ByLlEk7zmyw" },
          { title: "Lower and Upper Bound", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/?languageTags=javascript", hindiUrl: "https://www.youtube.com/watch?v=ByLlEk7zmyw" },
          { title: "Bubble Sort", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort", hindiUrl: "https://www.youtube.com/watch?v=ByLlEk7zmyw" },
          { title: "Selection Sort", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort", hindiUrl: "https://www.youtube.com/watch?v=ByLlEk7zmyw" },
          { title: "Insertion Sort", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort", hindiUrl: "https://www.youtube.com/watch?v=ByLlEk7zmyw" },
          { title: "Merge Sort", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort", hindiUrl: "https://www.youtube.com/watch?v=RGf546YhmIE" },
          { title: "Quick Sort", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort", hindiUrl: "https://www.youtube.com/watch?v=WIrDiJublKA" },
          { title: "Heap Sort", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/heap-sort", hindiUrl: "https://www.youtube.com/watch?v=ByLlEk7zmyw" },
          { title: "Counting Sort", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/counting-sort", hindiUrl: "https://www.youtube.com/watch?v=ByLlEk7zmyw" },
          { title: "Stability and In-Place Sorting", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort", hindiUrl: "https://www.youtube.com/watch?v=BJkpnxf5cfY" },
          { title: "Comparator Design", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#parameters", hindiUrl: "https://www.youtube.com/watch?v=ByLlEk7zmyw" }
        ]
      },
      {
        id: "hash-maps",
        title: "Hash Maps",
        topics: [
          { title: "Hash Function Basics", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table", hindiUrl: "https://www.youtube.com/watch?v=7mUKGHznpfg" },
          { title: "Hash Table Operations", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table", hindiUrl: "https://www.youtube.com/watch?v=7mUKGHznpfg" },
          { title: "Collision Handling", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/hash-table/HashTable.js", hindiUrl: "https://www.youtube.com/watch?v=7mUKGHznpfg" },
          { title: "Frequency Counting", url: "https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/", hindiUrl: "https://www.youtube.com/watch?v=7mUKGHznpfg" },
          { title: "Two Sum", url: "https://leetcode.com/problems/two-sum/", hindiUrl: "https://www.youtube.com/watch?v=7mUKGHznpfg" },
          { title: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", hindiUrl: "https://www.youtube.com/watch?v=7mUKGHznpfg" },
          { title: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", hindiUrl: "https://www.youtube.com/watch?v=7mUKGHznpfg" },
          { title: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", hindiUrl: "https://www.youtube.com/watch?v=7mUKGHznpfg" },
          { title: "Hash Set vs Hash Map", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections", hindiUrl: "https://www.youtube.com/watch?v=7mUKGHznpfg" },
          { title: "Design a HashMap", url: "https://leetcode.com/problems/design-hashmap/", hindiUrl: "https://www.youtube.com/watch?v=knxwxtiW_pU" }
        ]
      },
      {
        id: "two-pointers",
        title: "Two Pointers",
        topics: [
          { title: "Opposite-End Pointers", url: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#heading-algorithmic-complexity", hindiUrl: "https://www.youtube.com/watch?v=PrbyjOMqoMc" },
          { title: "Same-Direction Pointers", url: "https://github.com/TheAlgorithms/JavaScript/blob/master/Data-Structures/Linked-List/CycleDetection.js", hindiUrl: "https://www.youtube.com/watch?v=PrbyjOMqoMc" },
          { title: "Two Sum II", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", hindiUrl: "https://www.youtube.com/watch?v=UXDSeD9mN-k" },
          { title: "Three Sum", url: "https://leetcode.com/problems/3sum/", hindiUrl: "https://www.youtube.com/watch?v=UXDSeD9mN-k" },
          { title: "Remove Duplicates from Sorted Array", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", hindiUrl: "https://www.youtube.com/watch?v=MPvr-LmaZmA" },
          { title: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", hindiUrl: "https://www.youtube.com/watch?v=PrbyjOMqoMc" },
          { title: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", hindiUrl: "https://www.youtube.com/watch?v=PrbyjOMqoMc" },
          { title: "Dutch National Flag", url: "https://leetcode.com/problems/sort-colors/", hindiUrl: "https://www.youtube.com/watch?v=PrbyjOMqoMc" }
        ]
      },
      {
        id: "sliding-window",
        title: "Sliding Window",
        topics: [
          { title: "Fixed-Size Window", url: "https://www.freecodecamp.org/news/sliding-window-technique/", hindiUrl: "https://www.youtube.com/watch?v=eWD-iNVhLE8" },
          { title: "Variable-Size Window", url: "https://github.com/TheAlgorithms/JavaScript/blob/master/Sliding-Windows/LongestSubarrayWithSumAtMost.js", hindiUrl: "https://www.youtube.com/watch?v=eWD-iNVhLE8" },
          { title: "Maximum Sum Subarray of Size K", url: "https://www.freecodecamp.org/news/sliding-window-technique/", hindiUrl: "https://www.youtube.com/watch?v=XwG5cozqfaM" },
          { title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", hindiUrl: "https://www.youtube.com/watch?v=PrvxKWUtoAA" },
          { title: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", hindiUrl: "https://www.youtube.com/watch?v=PrvxKWUtoAA" },
          { title: "Longest Repeating Character Replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", hindiUrl: "https://www.youtube.com/watch?v=PrvxKWUtoAA" },
          { title: "Permutation in String", url: "https://leetcode.com/problems/permutation-in-string/", hindiUrl: "https://www.youtube.com/watch?v=PrvxKWUtoAA" },
          { title: "Window with Frequency Map", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", hindiUrl: "https://www.youtube.com/watch?v=PrvxKWUtoAA" }
        ]
      },
      {
        id: "stack-queue",
        title: "Stack and Queue",
        topics: [
          { title: "Stack Fundamentals", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Queue Fundamentals", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Deque Fundamentals", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/deque", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Min Stack", url: "https://leetcode.com/problems/min-stack/", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Next Greater Element", url: "https://leetcode.com/problems/next-greater-element-i/", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Implement Queue Using Stacks", url: "https://leetcode.com/problems/implement-queue-using-stacks/", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Monotonic Stack", url: "https://leetcode.com/problems/daily-temperatures/solutions/?languageTags=javascript", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Circular Queue", url: "https://leetcode.com/problems/design-circular-queue/", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" },
          { title: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", hindiUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" }
        ]
      },
      {
        id: "linked-lists",
        title: "Linked Lists",
        topics: [
          { title: "Singly Linked List", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list", hindiUrl: "https://www.youtube.com/watch?v=VWY3qglCsFU" },
          { title: "Doubly Linked List", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list", hindiUrl: "https://www.youtube.com/watch?v=VWY3qglCsFU" },
          { title: "Traversal", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/linked-list/traversal", hindiUrl: "https://www.youtube.com/watch?v=kN0tp3JJuoo" },
          { title: "Insertion and Deletion", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list/LinkedList.js", hindiUrl: "https://www.youtube.com/watch?v=VWY3qglCsFU" },
          { title: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", hindiUrl: "https://www.youtube.com/watch?v=NgIgKiuqEDg" },
          { title: "Find Middle Node", url: "https://leetcode.com/problems/middle-of-the-linked-list/", hindiUrl: "https://www.youtube.com/watch?v=NgIgKiuqEDg" },
          { title: "Detect Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", hindiUrl: "https://www.youtube.com/watch?v=VWY3qglCsFU" },
          { title: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", hindiUrl: "https://www.youtube.com/watch?v=VWY3qglCsFU" },
          { title: "Remove Nth Node From End", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", hindiUrl: "https://www.youtube.com/watch?v=VWY3qglCsFU" },
          { title: "Palindrome Linked List", url: "https://leetcode.com/problems/palindrome-linked-list/", hindiUrl: "https://www.youtube.com/watch?v=VWY3qglCsFU" },
          { title: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", hindiUrl: "https://www.youtube.com/watch?v=VWY3qglCsFU" },
          { title: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", hindiUrl: "https://www.youtube.com/watch?v=VWY3qglCsFU" }
        ]
      },
      {
        id: "recursion-backtracking",
        title: "Recursion and Backtracking",
        topics: [
          { title: "Recursion Basics", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion", hindiUrl: "https://www.youtube.com/watch?v=tZYGkEpbvQI" },
          { title: "Base Case and Recursive Case", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion", hindiUrl: "https://www.youtube.com/watch?v=tZYGkEpbvQI" },
          { title: "Call Stack", url: "https://developer.mozilla.org/en-US/docs/Glossary/Call_stack", hindiUrl: "https://www.youtube.com/watch?v=tZYGkEpbvQI" },
          { title: "Factorial and Fibonacci", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fibonacci", hindiUrl: "https://www.youtube.com/watch?v=tZYGkEpbvQI" },
          { title: "Subsets", url: "https://leetcode.com/problems/subsets/", hindiUrl: "https://www.youtube.com/watch?v=tZYGkEpbvQI" },
          { title: "Permutations", url: "https://leetcode.com/problems/permutations/", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", hindiUrl: "https://www.youtube.com/watch?v=tZYGkEpbvQI" },
          { title: "N-Queens", url: "https://leetcode.com/problems/n-queens/", hindiUrl: "https://www.youtube.com/watch?v=i05Ju7AfnGU" },
          { title: "Sudoku Solver", url: "https://leetcode.com/problems/sudoku-solver/", hindiUrl: "https://www.youtube.com/watch?v=tZYGkEpbvQI" },
          { title: "Word Search", url: "https://leetcode.com/problems/word-search/", hindiUrl: "https://www.youtube.com/watch?v=tZYGkEpbvQI" },
          { title: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/", hindiUrl: "https://www.youtube.com/watch?v=tZYGkEpbvQI" },
          { title: "Memoization Basics", url: "https://www.freecodecamp.org/news/memoization-in-javascript-and-react/", hindiUrl: "https://www.youtube.com/watch?v=tZYGkEpbvQI" }
        ]
      },
      {
        id: "trees",
        title: "Trees",
        topics: [
          { title: "Tree Terminology", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree", hindiUrl: "https://www.youtube.com/watch?v=fAAZixBzIAI" },
          { title: "Preorder, Inorder and Postorder", url: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#heading-depth-first-search-dfs", hindiUrl: "https://www.youtube.com/watch?v=gnkxLpaVVp0" },
          { title: "Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", hindiUrl: "https://www.youtube.com/watch?v=fAAZixBzIAI" },
          { title: "Maximum Depth", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", hindiUrl: "https://www.youtube.com/watch?v=fAAZixBzIAI" },
          { title: "Balanced Binary Tree", url: "https://leetcode.com/problems/balanced-binary-tree/", hindiUrl: "https://www.youtube.com/watch?v=fAAZixBzIAI" },
          { title: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/", hindiUrl: "https://www.youtube.com/watch?v=fAAZixBzIAI" },
          { title: "Lowest Common Ancestor", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/?languageTags=javascript", hindiUrl: "https://www.youtube.com/watch?v=fAAZixBzIAI" },
          { title: "BST Search, Insert and Delete", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree", hindiUrl: "https://www.youtube.com/watch?v=FiSh2W5kH3g" },
          { title: "Validate BST", url: "https://leetcode.com/problems/validate-binary-search-tree/", hindiUrl: "https://www.youtube.com/watch?v=FiSh2W5kH3g" },
          { title: "Kth Smallest Element in BST", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", hindiUrl: "https://www.youtube.com/watch?v=FiSh2W5kH3g" },
          { title: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", hindiUrl: "https://www.youtube.com/watch?v=fAAZixBzIAI" },
          { title: "Morris Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/", hindiUrl: "https://www.youtube.com/watch?v=fAAZixBzIAI" }
        ]
      },
      {
        id: "heaps",
        title: "Heaps and Priority Queues",
        topics: [
          { title: "Heap Properties", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap", hindiUrl: "https://www.youtube.com/watch?v=NKJnHewiGdc" },
          { title: "Min Heap", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/heap/MinHeap.js", hindiUrl: "https://www.youtube.com/watch?v=NKJnHewiGdc" },
          { title: "Max Heap", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/heap/MaxHeap.js", hindiUrl: "https://www.youtube.com/watch?v=NKJnHewiGdc" },
          { title: "Heapify", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/heap/Heap.js", hindiUrl: "https://www.youtube.com/watch?v=NKJnHewiGdc" },
          { title: "Insert and Extract", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/heap/Heap.js", hindiUrl: "https://www.youtube.com/watch?v=NKJnHewiGdc" },
          { title: "Kth Largest Element", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", hindiUrl: "https://www.youtube.com/watch?v=NKJnHewiGdc" },
          { title: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", hindiUrl: "https://www.youtube.com/watch?v=NKJnHewiGdc" },
          { title: "Merge K Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", hindiUrl: "https://www.youtube.com/watch?v=NKJnHewiGdc" },
          { title: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", hindiUrl: "https://www.youtube.com/watch?v=NKJnHewiGdc" },
          { title: "Priority Queue Applications", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/priority-queue", hindiUrl: "https://www.youtube.com/watch?v=NKJnHewiGdc" }
        ]
      },
      {
        id: "graphs",
        title: "Graphs",
        topics: [
          { title: "Graph Terminology", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph", hindiUrl: "https://www.youtube.com/watch?v=0uqeTiaWhZQ" },
          { title: "Adjacency List and Matrix", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Breadth-First Search", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Depth-First Search", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/depth-first-search", hindiUrl: "https://www.youtube.com/watch?v=uDwCpjUXwbc" },
          { title: "Connected Components", url: "https://github.com/TheAlgorithms/JavaScript/blob/master/Graphs/ConnectedComponents.js", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Cycle Detection in Undirected Graphs", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Cycle Detection in Directed Graphs", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/detect-cycle/detectDirectedCycle.js", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Topological Sort", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/topological-sorting", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Shortest Path in Unweighted Graphs", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Dijkstra's Algorithm", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/dijkstra", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Bellman-Ford Algorithm", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/bellman-ford", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Floyd-Warshall Algorithm", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/floyd-warshall", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Minimum Spanning Tree", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/prim", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Union-Find (Disjoint Set)", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/disjoint-set", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/", hindiUrl: "https://www.youtube.com/watch?v=0uqeTiaWhZQ" },
          { title: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" },
          { title: "Grid Traversal Patterns", url: "https://github.com/TheAlgorithms/JavaScript/blob/master/Recursive/FloodFill.js", hindiUrl: "https://www.youtube.com/watch?v=0uSN-gBpiIg" }
        ]
      },
      {
        id: "dynamic-programming",
        title: "Dynamic Programming",
        topics: [
          { title: "DP Fundamentals", url: "https://www.freecodecamp.org/news/learn-dynamic-programing-to-solve-coding-challenges/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Overlapping Subproblems", url: "https://www.freecodecamp.org/news/demystifying-dynamic-programming-24fbdb831d3a/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Optimal Substructure", url: "https://www.freecodecamp.org/news/demystifying-dynamic-programming-24fbdb831d3a/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Top-Down Memoization", url: "https://www.freecodecamp.org/news/learn-dynamic-programing-to-solve-coding-challenges/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Bottom-Up Tabulation", url: "https://www.freecodecamp.org/news/learn-dynamic-programing-to-solve-coding-challenges/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Space Optimization", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/recursive-staircase/recursiveStaircaseIT.js", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "0/1 Knapsack", url: "https://github.com/TheAlgorithms/JavaScript/blob/master/Dynamic-Programming/ZeroOneKnapsack.js", hindiUrl: "https://www.youtube.com/watch?v=kgrjEkMCg5U" },
          { title: "Unbounded Knapsack", url: "https://nakobase.com/en/nakobase-knowledge/unbounded-knapsack-dynamic-programming", hindiUrl: "https://www.youtube.com/watch?v=kgrjEkMCg5U" },
          { title: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Longest Increasing Subsequence", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-increasing-subsequence", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Coin Change", url: "https://leetcode.com/problems/coin-change/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "House Robber", url: "https://leetcode.com/problems/house-robber/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "DP on Stocks", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" },
          { title: "Bitmask DP Introduction", url: "https://leetcode.com/problems/smallest-sufficient-team/solutions/?languageTags=javascript", hindiUrl: "https://www.youtube.com/watch?v=tyB0ztf0DNY" }
        ]
      },
      {
        id: "greedy",
        title: "Greedy",
        topics: [
          { title: "Greedy Choice Property", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/jump-game/greedyJumpGame.js", hindiUrl: "https://www.youtube.com/watch?v=HZOUwKCKF5o" },
          { title: "Activity Selection", url: "https://leetcode.com/problems/non-overlapping-intervals/solutions/?languageTags=javascript", hindiUrl: "https://www.youtube.com/watch?v=HZOUwKCKF5o" },
          { title: "Interval Scheduling", url: "https://leetcode.com/problems/non-overlapping-intervals/solutions/?languageTags=javascript", hindiUrl: "https://www.youtube.com/watch?v=HZOUwKCKF5o" },
          { title: "Jump Game", url: "https://leetcode.com/problems/jump-game/", hindiUrl: "https://www.youtube.com/watch?v=HZOUwKCKF5o" },
          { title: "Gas Station", url: "https://leetcode.com/problems/gas-station/", hindiUrl: "https://www.youtube.com/watch?v=HZOUwKCKF5o" },
          { title: "Huffman Coding", url: "https://github.com/sidneyw/Huffman-Codes", hindiUrl: "https://www.youtube.com/watch?v=HZOUwKCKF5o" },
          { title: "Fractional Knapsack", url: "https://algoscope.net/lesson/fractional-knapsack", hindiUrl: "https://www.youtube.com/watch?v=HZOUwKCKF5o" },
          { title: "Greedy vs Dynamic Programming", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/jump-game", hindiUrl: "https://www.youtube.com/watch?v=HZOUwKCKF5o" }
        ]
      },
      {
        id: "bit-manipulation",
        title: "Bit Manipulation",
        topics: [
          { title: "Binary Representation", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString#radix", hindiUrl: "https://www.youtube.com/watch?v=qQd-ViW7bfk" },
          { title: "Bitwise Operators", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators", hindiUrl: "https://www.youtube.com/watch?v=qQd-ViW7bfk" },
          { title: "Set, Clear and Toggle Bits", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/bits", hindiUrl: "https://www.youtube.com/watch?v=OSoO8eCEEC8" },
          { title: "Check Odd or Even", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/bits/isEven.js", hindiUrl: "https://www.youtube.com/watch?v=qQd-ViW7bfk" },
          { title: "Count Set Bits", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/bits/countSetBits.js", hindiUrl: "https://www.youtube.com/watch?v=OSoO8eCEEC8" },
          { title: "Single Number", url: "https://leetcode.com/problems/single-number/", hindiUrl: "https://www.youtube.com/watch?v=qQd-ViW7bfk" },
          { title: "Power of Two", url: "https://leetcode.com/problems/power-of-two/", hindiUrl: "https://www.youtube.com/watch?v=qQd-ViW7bfk" },
          { title: "Subsets Using Bitmasks", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/power-set/bwPowerSet.js", hindiUrl: "https://www.youtube.com/watch?v=qQd-ViW7bfk" },
          { title: "XOR Tricks", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR", hindiUrl: "https://www.youtube.com/watch?v=qQd-ViW7bfk" }
        ]
      },
      {
        id: "tries",
        title: "Tries",
        topics: [
          { title: "Trie Structure", url: "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/trie", hindiUrl: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" },
          { title: "Insert and Search", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", hindiUrl: "https://www.youtube.com/watch?v=cM5KPbVsxPY" },
          { title: "Prefix Search", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", hindiUrl: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" },
          { title: "Delete from Trie", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/trie/Trie.js", hindiUrl: "https://www.youtube.com/watch?v=cM5KPbVsxPY" },
          { title: "Autocomplete", url: "https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/trie/Trie.js", hindiUrl: "https://www.youtube.com/watch?v=cM5KPbVsxPY" },
          { title: "Maximum XOR Using Trie", url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", hindiUrl: "https://www.youtube.com/watch?v=cM5KPbVsxPY" }
        ]
      }
    ]
  },

  sql: {
    label: "SQL",
    sections: [
      {
        id: "relational-fundamentals",
        title: "Relational Database Fundamentals",
        topics: [
          { title: "Relational Database Concepts", url: "https://www.postgresql.org/docs/current/tutorial-concepts.html", hindiUrl: "https://www.youtube.com/playlist?list=PLYwpaL_SFmcBU4HS74xGTK1cAFbY0rdVY" },
          { title: "Tables, Rows and Columns", url: "https://www.postgresql.org/docs/current/ddl-basics.html", hindiUrl: "https://www.youtube.com/watch?v=dl00fOOYLOM" },
          { title: "Primary Keys", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS", hindiUrl: "https://www.youtube.com/watch?v=f1oV46r69YM" },
          { title: "Foreign Keys", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK", hindiUrl: "https://www.youtube.com/watch?v=f1oV46r69YM" },
          { title: "Data Types", url: "https://www.postgresql.org/docs/current/datatype.html", hindiUrl: "https://www.youtube.com/watch?v=dl00fOOYLOM" },
          { title: "NULL Semantics", url: "https://www.postgresql.org/docs/current/functions-comparison.html", hindiUrl: "https://www.youtube.com/watch?v=dl00fOOYLOM" },
          { title: "DDL, DML, DCL and TCL", url: "https://www.postgresql.org/docs/current/sql-commands.html", hindiUrl: "https://www.youtube.com/watch?v=dl00fOOYLOM" },
          { title: "Database vs Schema", url: "https://www.postgresql.org/docs/current/ddl-schemas.html", hindiUrl: "https://www.youtube.com/playlist?list=PLYwpaL_SFmcBU4HS74xGTK1cAFbY0rdVY" },
          { title: "Entity-Relationship Basics", url: "https://learn.microsoft.com/en-us/ef/core/modeling/relationships", hindiUrl: "https://www.youtube.com/watch?v=dl00fOOYLOM" }
        ]
      },
      {
        id: "basic-queries",
        title: "Basic Queries",
        topics: [
          { title: "SELECT", url: "https://www.postgresql.org/docs/current/queries-select-lists.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "Column Aliases", url: "https://www.postgresql.org/docs/current/queries-select-lists.html#QUERIES-COLUMN-LABELS", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "DISTINCT", url: "https://www.postgresql.org/docs/current/queries-select-lists.html#QUERIES-DISTINCT", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "WHERE", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-WHERE", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "ORDER BY", url: "https://www.postgresql.org/docs/current/queries-order.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "LIMIT and OFFSET", url: "https://www.postgresql.org/docs/current/queries-limit.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "Arithmetic and String Expressions", url: "https://www.postgresql.org/docs/current/sql-expressions.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "CASE Expressions", url: "https://www.postgresql.org/docs/current/functions-conditional.html#FUNCTIONS-CASE", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "COALESCE and NULLIF", url: "https://www.postgresql.org/docs/current/functions-conditional.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "Comments and Formatting", url: "https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-COMMENTS", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" }
        ]
      },
      {
        id: "filtering-operators",
        title: "Filtering and Operators",
        topics: [
          { title: "Comparison Operators", url: "https://www.postgresql.org/docs/current/functions-comparison.html", hindiUrl: "https://youtu.be/5bFxbwjN-Gk" },
          { title: "AND, OR and NOT", url: "https://www.postgresql.org/docs/current/functions-logical.html", hindiUrl: "https://www.youtube.com/playlist?list=PL0b6OzIxLPbzf12lu5etX_vjN-eUxgxnr" },
          { title: "IN and NOT IN", url: "https://www.postgresql.org/docs/current/functions-comparisons.html", hindiUrl: "https://www.youtube.com/playlist?list=PL0b6OzIxLPbzf12lu5etX_vjN-eUxgxnr" },
          { title: "BETWEEN", url: "https://www.postgresql.org/docs/current/functions-comparison.html", hindiUrl: "https://youtu.be/5bFxbwjN-Gk" },
          { title: "LIKE and ILIKE", url: "https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE", hindiUrl: "https://youtu.be/5bFxbwjN-Gk" },
          { title: "Wildcards and Escaping", url: "https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHqU4HKL7-SITyuSIcD93id" },
          { title: "IS NULL and IS NOT NULL", url: "https://www.postgresql.org/docs/current/functions-comparison.html", hindiUrl: "https://www.youtube.com/playlist?list=PL0b6OzIxLPbzf12lu5etX_vjN-eUxgxnr" },
          { title: "EXISTS vs IN", url: "https://www.postgresql.org/docs/current/functions-subquery.html", hindiUrl: "https://youtu.be/5bFxbwjN-Gk" },
          { title: "Pattern Matching", url: "https://www.postgresql.org/docs/current/functions-matching.html", hindiUrl: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU" }
        ]
      },
      {
        id: "joins",
        title: "Joins",
        topics: [
          { title: "INNER JOIN", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN", hindiUrl: "https://www.youtube.com/watch?v=AUnn_S60j00" },
          { title: "LEFT JOIN", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN", hindiUrl: "https://www.youtube.com/watch?v=F0S9zYlqV1A" },
          { title: "RIGHT JOIN", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN", hindiUrl: "https://www.youtube.com/watch?v=F0S9zYlqV1A" },
          { title: "FULL OUTER JOIN", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN", hindiUrl: "https://www.youtube.com/watch?v=ZtVw2iuFI2w" },
          { title: "CROSS JOIN", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN", hindiUrl: "https://www.youtube.com/watch?v=F0S9zYlqV1A" },
          { title: "SELF JOIN", url: "https://www.postgresql.org/docs/current/tutorial-join.html", hindiUrl: "https://www.youtube.com/watch?v=Lt0iZi50Vpw" },
          { title: "Join Conditions vs Filters", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-WHERE", hindiUrl: "https://www.youtube.com/watch?v=F0S9zYlqV1A" },
          { title: "Multiple Joins", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN", hindiUrl: "https://www.youtube.com/watch?v=ZtVw2iuFI2w" },
          { title: "Anti Joins", url: "https://www.postgresql.org/docs/current/functions-subquery.html#FUNCTIONS-SUBQUERY-EXISTS", hindiUrl: "https://www.youtube.com/watch?v=ZtVw2iuFI2w" },
          { title: "Semi Joins", url: "https://www.postgresql.org/docs/current/functions-subquery.html#FUNCTIONS-SUBQUERY-EXISTS", hindiUrl: "https://www.youtube.com/watch?v=ZtVw2iuFI2w" },
          { title: "NATURAL JOIN Caveats", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN", hindiUrl: "https://www.youtube.com/watch?v=F0S9zYlqV1A" },
          { title: "Join Algorithms", url: "https://www.postgresql.org/docs/current/using-explain.html", hindiUrl: "https://www.youtube.com/watch?v=F0S9zYlqV1A" }
        ]
      },
      {
        id: "aggregation",
        title: "Aggregation and Grouping",
        topics: [
          { title: "COUNT, SUM, AVG, MIN and MAX", url: "https://www.postgresql.org/docs/current/functions-aggregate.html", hindiUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
          { title: "GROUP BY", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP", hindiUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
          { title: "HAVING", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP", hindiUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
          { title: "Aggregates with NULLs", url: "https://www.postgresql.org/docs/current/functions-aggregate.html", hindiUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
          { title: "COUNT(*) vs COUNT(column)", url: "https://www.postgresql.org/docs/current/functions-aggregate.html", hindiUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
          { title: "Grouping by Multiple Columns", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP", hindiUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
          { title: "ROLLUP, CUBE and GROUPING SETS", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUPING-SETS", hindiUrl: "https://youtu.be/YRnjGeQbsHQ" },
          { title: "Filtered Aggregates", url: "https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-AGGREGATES", hindiUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
          { title: "String Aggregation", url: "https://www.postgresql.org/docs/current/functions-aggregate.html", hindiUrl: "https://youtu.be/YRnjGeQbsHQ" },
          { title: "Percentages and Ratios", url: "https://www.postgresql.org/docs/current/tutorial-window.html", hindiUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY" }
        ]
      },
      {
        id: "subqueries-ctes",
        title: "Subqueries and CTEs",
        topics: [
          { title: "Scalar Subqueries", url: "https://www.postgresql.org/docs/current/sql-expressions.html#SQL-SYNTAX-SCALAR-SUBQUERIES", hindiUrl: "https://www.youtube.com/watch?v=kxtc70z8o9c" },
          { title: "Correlated Subqueries", url: "https://www.postgresql.org/docs/current/functions-subquery.html", hindiUrl: "https://www.youtube.com/watch?v=kxtc70z8o9c" },
          { title: "Derived Tables", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-FROM", hindiUrl: "https://www.youtube.com/watch?v=kxtc70z8o9c" },
          { title: "IN and EXISTS Subqueries", url: "https://www.postgresql.org/docs/current/functions-subquery.html", hindiUrl: "https://www.youtube.com/watch?v=kxtc70z8o9c" },
          { title: "Common Table Expressions", url: "https://www.postgresql.org/docs/current/queries-with.html", hindiUrl: "https://www.youtube.com/watch?v=WHBH0yz35_8" },
          { title: "Recursive CTEs", url: "https://www.postgresql.org/docs/current/queries-with.html#QUERIES-WITH-RECURSIVE", hindiUrl: "https://www.youtube.com/watch?v=W3oO1eF5670" },
          { title: "CTE vs Subquery", url: "https://www.postgresql.org/docs/current/queries-with.html#QUERIES-WITH-CTE-MATERIALIZATION", hindiUrl: "https://www.youtube.com/watch?v=WHBH0yz35_8" },
          { title: "LATERAL Joins", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-LATERAL", hindiUrl: "https://www.youtube.com/watch?v=kxtc70z8o9c" },
          { title: "Query Readability", url: "https://www.postgresql.org/docs/current/queries-with.html", hindiUrl: "https://www.youtube.com/watch?v=kxtc70z8o9c" }
        ]
      },
      {
        id: "window-functions",
        title: "Window Functions",
        topics: [
          { title: "OVER Clause", url: "https://www.postgresql.org/docs/current/tutorial-window.html", hindiUrl: "https://www.youtube.com/watch?v=sCOw5y1RQpY" },
          { title: "PARTITION BY", url: "https://www.postgresql.org/docs/current/tutorial-window.html", hindiUrl: "https://www.youtube.com/watch?v=sCOw5y1RQpY" },
          { title: "ORDER BY in Windows", url: "https://www.postgresql.org/docs/current/tutorial-window.html", hindiUrl: "https://www.youtube.com/watch?v=sCOw5y1RQpY" },
          { title: "ROW_NUMBER", url: "https://www.postgresql.org/docs/current/functions-window.html", hindiUrl: "https://www.youtube.com/watch?v=6-1WiITAW10" },
          { title: "RANK and DENSE_RANK", url: "https://www.postgresql.org/docs/current/functions-window.html", hindiUrl: "https://www.youtube.com/watch?v=6-1WiITAW10" },
          { title: "NTILE", url: "https://www.postgresql.org/docs/current/functions-window.html", hindiUrl: "https://www.youtube.com/watch?v=sCOw5y1RQpY" },
          { title: "LAG and LEAD", url: "https://www.postgresql.org/docs/current/functions-window.html", hindiUrl: "https://www.youtube.com/watch?v=6-1WiITAW10" },
          { title: "FIRST_VALUE and LAST_VALUE", url: "https://www.postgresql.org/docs/current/functions-window.html", hindiUrl: "https://www.youtube.com/watch?v=sCOw5y1RQpY" },
          { title: "Running Totals", url: "https://www.postgresql.org/docs/current/tutorial-window.html", hindiUrl: "https://www.youtube.com/watch?v=sCOw5y1RQpY" },
          { title: "Moving Averages", url: "https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS", hindiUrl: "https://www.youtube.com/watch?v=sCOw5y1RQpY" },
          { title: "Frame Clauses (ROWS and RANGE)", url: "https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS", hindiUrl: "https://www.youtube.com/watch?v=sCOw5y1RQpY" },
          { title: "Gaps and Islands", url: "https://practicewindowfunctions.com/learn/gap_and_island", hindiUrl: "https://www.youtube.com/watch?v=sCOw5y1RQpY" }
        ]
      },
      {
        id: "set-operations",
        title: "Set Operations",
        topics: [
          { title: "UNION", url: "https://www.postgresql.org/docs/current/queries-union.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "UNION ALL", url: "https://www.postgresql.org/docs/current/queries-union.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "INTERSECT", url: "https://www.postgresql.org/docs/current/queries-union.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "EXCEPT and MINUS", url: "https://www.postgresql.org/docs/current/queries-union.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "Set Operation Rules", url: "https://www.postgresql.org/docs/current/queries-union.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" }
        ]
      },
      {
        id: "data-modification",
        title: "Data Modification",
        topics: [
          { title: "INSERT", url: "https://www.postgresql.org/docs/current/sql-insert.html", hindiUrl: "https://www.youtube.com/watch?v=M21rXLWOnFs" },
          { title: "Multi-Row INSERT", url: "https://www.postgresql.org/docs/current/dml-insert.html", hindiUrl: "https://www.youtube.com/watch?v=M21rXLWOnFs" },
          { title: "INSERT ... SELECT", url: "https://www.postgresql.org/docs/current/dml-insert.html", hindiUrl: "https://www.youtube.com/watch?v=M21rXLWOnFs" },
          { title: "UPDATE", url: "https://www.postgresql.org/docs/current/dml-update.html", hindiUrl: "https://www.youtube.com/watch?v=M21rXLWOnFs" },
          { title: "DELETE vs TRUNCATE", url: "https://www.postgresql.org/docs/current/sql-truncate.html", hindiUrl: "https://www.youtube.com/watch?v=M21rXLWOnFs" },
          { title: "UPSERT and MERGE", url: "https://www.postgresql.org/docs/current/sql-merge.html", hindiUrl: "https://www.youtube.com/watch?v=M21rXLWOnFs" },
          { title: "RETURNING Clause", url: "https://www.postgresql.org/docs/current/dml-returning.html", hindiUrl: "https://www.youtube.com/watch?v=M21rXLWOnFs" },
          { title: "Safe Updates", url: "https://www.postgresql.org/docs/current/dml-update.html", hindiUrl: "https://www.youtube.com/watch?v=M21rXLWOnFs" },
          { title: "Bulk Loading", url: "https://www.postgresql.org/docs/current/sql-copy.html", hindiUrl: "https://www.youtube.com/watch?v=M21rXLWOnFs" }
        ]
      },
      {
        id: "schema-design",
        title: "Schema Design and Normalization",
        topics: [
          { title: "Functional Dependencies", url: "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description", hindiUrl: "https://www.youtube.com/watch?v=5GDTIUVlHB8" },
          { title: "First Normal Form", url: "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description", hindiUrl: "https://www.youtube.com/watch?v=ZtVw2iuFI2w" },
          { title: "Second Normal Form", url: "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description", hindiUrl: "https://www.youtube.com/watch?v=ZtVw2iuFI2w" },
          { title: "Third Normal Form", url: "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description", hindiUrl: "https://www.youtube.com/watch?v=ZtVw2iuFI2w" },
          { title: "BCNF", url: "https://cs186berkeley.net/notes/note13/", hindiUrl: "https://www.youtube.com/watch?v=5GDTIUVlHB8" },
          { title: "Denormalization", url: "https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/online-transaction-processing", hindiUrl: "https://www.youtube.com/watch?v=5GDTIUVlHB8" },
          { title: "Surrogate vs Natural Keys", url: "https://www.postgresql.org/docs/current/ddl-identity-columns.html", hindiUrl: "https://www.youtube.com/watch?v=5GDTIUVlHB8" },
          { title: "One-to-One, One-to-Many and Many-to-Many", url: "https://learn.microsoft.com/en-us/ef/core/modeling/relationships", hindiUrl: "https://www.youtube.com/watch?v=5GDTIUVlHB8" },
          { title: "Junction Tables", url: "https://learn.microsoft.com/en-us/ef/core/modeling/relationships/many-to-many", hindiUrl: "https://www.youtube.com/watch?v=5GDTIUVlHB8" },
          { title: "Naming Conventions", url: "https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS", hindiUrl: "https://www.youtube.com/watch?v=5GDTIUVlHB8" },
          { title: "Schema Migration Basics", url: "https://www.postgresql.org/docs/current/ddl-alter.html", hindiUrl: "https://www.youtube.com/watch?v=5GDTIUVlHB8" }
        ]
      },
      {
        id: "constraints",
        title: "Constraints and Integrity",
        topics: [
          { title: "NOT NULL", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-NOT-NULL", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "UNIQUE", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "CHECK", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-CHECK-CONSTRAINTS", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "DEFAULT", url: "https://www.postgresql.org/docs/current/ddl-default.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "Primary Key Constraints", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "Foreign Key Constraints", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "ON DELETE and ON UPDATE Actions", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "Deferrable Constraints", url: "https://www.postgresql.org/docs/current/sql-set-constraints.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "Data Integrity Trade-offs", url: "https://www.postgresql.org/docs/current/ddl-constraints.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" }
        ]
      },
      {
        id: "indexes-performance",
        title: "Indexes and Performance",
        topics: [
          { title: "Index Basics", url: "https://www.postgresql.org/docs/current/indexes.html", hindiUrl: "https://www.youtube.com/watch?v=R2b_vN9Z2jI" },
          { title: "B-Tree Indexes", url: "https://www.postgresql.org/docs/current/indexes-types.html#INDEXES-TYPES-BTREE", hindiUrl: "https://www.youtube.com/watch?v=oN5xT_2JWuI" },
          { title: "Composite Indexes", url: "https://www.postgresql.org/docs/current/indexes-multicolumn.html", hindiUrl: "https://www.youtube.com/watch?v=oN5xT_2JWuI" },
          { title: "Covering Indexes", url: "https://www.postgresql.org/docs/current/indexes-index-only-scans.html", hindiUrl: "https://www.youtube.com/watch?v=oN5xT_2JWuI" },
          { title: "Unique and Partial Indexes", url: "https://www.postgresql.org/docs/current/indexes-partial.html", hindiUrl: "https://www.youtube.com/watch?v=oN5xT_2JWuI" },
          { title: "Index Selectivity", url: "https://www.postgresql.org/docs/current/planner-stats.html", hindiUrl: "https://www.youtube.com/watch?v=R2b_vN9Z2jI" },
          { title: "Query Execution Plans", url: "https://www.postgresql.org/docs/current/using-explain.html", hindiUrl: "https://www.youtube.com/watch?v=oN5xT_2JWuI" },
          { title: "Sequential vs Index Scan", url: "https://www.postgresql.org/docs/current/using-explain.html", hindiUrl: "https://www.youtube.com/watch?v=R2b_vN9Z2jI" },
          { title: "EXPLAIN and ANALYZE", url: "https://www.postgresql.org/docs/current/sql-explain.html", hindiUrl: "https://www.youtube.com/watch?v=oN5xT_2JWuI" },
          { title: "N+1 Query Problem", url: "https://www.prisma.io/docs/orm/prisma-client/queries/query-optimization-performance", hindiUrl: "https://www.youtube.com/watch?v=oN5xT_2JWuI" },
          { title: "Common Query Anti-patterns", url: "https://www.postgresql.org/docs/current/performance-tips.html", hindiUrl: "https://www.youtube.com/watch?v=oN5xT_2JWuI" },
          { title: "Statistics and Vacuum/Analyze", url: "https://www.postgresql.org/docs/current/maintenance.html", hindiUrl: "https://www.youtube.com/watch?v=oN5xT_2JWuI" }
        ]
      },
      {
        id: "transactions",
        title: "Transactions and Concurrency",
        topics: [
          { title: "ACID Properties", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "BEGIN, COMMIT and ROLLBACK", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "Savepoints", url: "https://www.postgresql.org/docs/current/sql-savepoint.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "Transaction Isolation Levels", url: "https://www.postgresql.org/docs/current/transaction-iso.html", hindiUrl: "https://www.youtube.com/playlist?list=PLYwpaL_SFmcBU4HS74xGTK1cAFbY0rdVY" },
          { title: "Dirty Reads", url: "https://www.postgresql.org/docs/current/transaction-iso.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "Non-Repeatable Reads", url: "https://www.postgresql.org/docs/current/transaction-iso.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "Phantom Reads", url: "https://www.postgresql.org/docs/current/transaction-iso.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "Lost Updates", url: "https://www.postgresql.org/docs/current/transaction-iso.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "Row-Level vs Table-Level Locks", url: "https://www.postgresql.org/docs/current/explicit-locking.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "Deadlocks", url: "https://www.postgresql.org/docs/current/explicit-locking.html#LOCKING-DEADLOCKS", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "Optimistic vs Pessimistic Locking", url: "https://www.postgresql.org/docs/current/explicit-locking.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "MVCC", url: "https://www.postgresql.org/docs/current/mvcc-intro.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" },
          { title: "Transaction Best Practices", url: "https://www.postgresql.org/docs/current/transaction-iso.html", hindiUrl: "https://www.youtube.com/watch?v=YRnjGeQbsHQ" }
        ]
      },
      {
        id: "advanced-sql",
        title: "Advanced SQL",
        topics: [
          { title: "Views", url: "https://www.postgresql.org/docs/current/sql-createview.html", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
          { title: "Materialized Views", url: "https://www.postgresql.org/docs/current/rules-materializedviews.html", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
          { title: "Stored Procedures", url: "https://www.postgresql.org/docs/current/xproc.html", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
          { title: "Functions", url: "https://www.postgresql.org/docs/current/xfunc.html", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
          { title: "Triggers", url: "https://www.postgresql.org/docs/current/triggers.html", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
          { title: "Events and Scheduling", url: "https://github.com/citusdata/pg_cron", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
          { title: "Dynamic SQL", url: "https://www.postgresql.org/docs/current/plpgsql-statements.html#PLPGSQL-STATEMENTS-EXECUTING-DYN", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
          { title: "JSON Functions", url: "https://www.postgresql.org/docs/current/functions-json.html", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
          { title: "Full-Text Search", url: "https://www.postgresql.org/docs/current/textsearch.html", hindiUrl: "https://www.youtube.com/watch?v=hlGoQC332VM" },
          { title: "Pivot and Unpivot", url: "https://www.postgresql.org/docs/current/tablefunc.html", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
          { title: "Temporary Tables", url: "https://www.postgresql.org/docs/current/sql-createtable.html", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
          { title: "GRANT and REVOKE", url: "https://www.postgresql.org/docs/current/ddl-priv.html", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" }
        ]
      },
      {
        id: "analytics-interview",
        title: "Analytics and Interview Practice",
        topics: [
          { title: "Top N per Group", url: "https://www.postgresql.org/docs/current/tutorial-window.html", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Nth Highest Salary", url: "https://leetcode.com/problems/nth-highest-salary/", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Duplicate Detection", url: "https://leetcode.com/problems/duplicate-emails/", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Deduplication", url: "https://leetcode.com/problems/delete-duplicate-emails/", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Cumulative Sums", url: "https://www.postgresql.org/docs/current/tutorial-window.html", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Month-over-Month Growth", url: "https://www.postgresql.org/docs/current/functions-window.html", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Cohort Analysis Basics", url: "https://www.metabase.com/glossary/cohort-analysis", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Funnel Analysis", url: "https://www.metabase.com/learn/grow-your-data-skills/business-analysis-methods/how-to-do-funnel-analysis", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Sessionization", url: "https://www.bluetickconsultants.com/blogs/advanced-sql-window-functions-part-4.html", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Median and Percentiles", url: "https://www.postgresql.org/docs/current/functions-aggregate.html", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Pivot Reporting", url: "https://www.postgresql.org/docs/current/tablefunc.html", hindiUrl: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDjLmzisazhqQy4iGkb" },
          { title: "Query Optimization Checklist", url: "https://www.postgresql.org/docs/current/performance-tips.html", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHqU4HKL7-SITyuSIcD93id" }
        ]
      }
    ]
  },

  backend: {
    label: "Backend",
    sections: [
      {
        id: "web-fundamentals",
        title: "Web Fundamentals",
        topics: [
          { title: "Client-Server Model", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Request-Response Lifecycle", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview", hindiUrl: "https://www.youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo" },
          { title: "DNS and IP Basics", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name", hindiUrl: "https://www.youtube.com/watch?v=vhfRArT11jc" },
          { title: "TCP vs UDP", url: "https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "HTTP/1.1, HTTP/2 and HTTP/3", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Evolution_of_HTTP", hindiUrl: "https://www.youtube.com/watch?v=VyvTabQHevw" },
          { title: "Stateless vs Stateful Services", url: "https://12factor.net/processes", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Backend Architecture Overview", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Environment Variables and Config", url: "https://12factor.net/config", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Twelve-Factor App Basics", url: "https://12factor.net/", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" }
        ]
      },
      {
        id: "http-rest",
        title: "HTTP and REST",
        topics: [
          { title: "HTTP Methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "Status Codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "Headers", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "Request and Response Bodies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "Content Negotiation", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Content_negotiation", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "Idempotency", url: "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "REST Resource Modeling", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "REST vs RPC vs GraphQL", url: "https://graphql.org/learn/", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Versioning Strategies", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#api-versioning", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "Pagination", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#filter-and-paginate-data", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "Filtering and Sorting", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#filter-and-paginate-data", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "Cookies vs Tokens", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
          { title: "HTTP Caching Headers", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching", hindiUrl: "https://www.youtube.com/watch?v=qgZiUvV41TI" }
        ]
      },
      {
        id: "api-design",
        title: "API Design",
        topics: [
          { title: "Contract-First Design", url: "https://spec.openapis.org/oas/latest.html", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW" },
          { title: "Resource Naming", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design", hindiUrl: "https://www.youtube.com/watch?v=kY6gWwWpC-Q" },
          { title: "Request Validation", url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=kY6gWwWpC-Q" },
          { title: "Response Schemas", url: "https://spec.openapis.org/oas/latest.html#schema-object", hindiUrl: "https://www.youtube.com/watch?v=kY6gWwWpC-Q" },
          { title: "Error Response Design", url: "https://www.rfc-editor.org/rfc/rfc9457", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW" },
          { title: "API Versioning", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#api-versioning", hindiUrl: "https://www.youtube.com/watch?v=kY6gWwWpC-Q" },
          { title: "Rate Limiting and Quotas", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/rate-limiting-pattern", hindiUrl: "https://www.youtube.com/watch?v=kY6gWwWpC-Q" },
          { title: "Idempotency Keys", url: "https://docs.stripe.com/api/idempotent_requests", hindiUrl: "https://www.youtube.com/watch?v=kY6gWwWpC-Q" },
          { title: "Webhooks", url: "https://docs.github.com/en/webhooks/about-webhooks", hindiUrl: "https://www.youtube.com/watch?v=kY6gWwWpC-Q" },
          { title: "OpenAPI Documentation", url: "https://swagger.io/docs/specification/v3_0/about/", hindiUrl: "https://www.youtube.com/watch?v=kY6gWwWpC-Q" },
          { title: "API Deprecation", url: "https://www.rfc-editor.org/rfc/rfc9745", hindiUrl: "https://www.youtube.com/watch?v=kY6gWwWpC-Q" },
          { title: "Backward Compatibility", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#api-versioning", hindiUrl: "https://www.youtube.com/watch?v=kY6gWwWpC-Q" }
        ]
      },
      {
        id: "auth-security",
        title: "Authentication and Security",
        topics: [
          { title: "Authentication vs Authorization", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Password Hashing", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "Sessions", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo" },
          { title: "JWT", url: "https://www.rfc-editor.org/rfc/rfc7519", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW" },
          { title: "OAuth 2.0", url: "https://oauth.net/2/", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "OpenID Connect", url: "https://openid.net/developers/how-connect-works/", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "Role-Based Access Control", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW" },
          { title: "Attribute-Based Access Control", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html#prefer-attribute-and-relationship-based-access-control-over-rbac", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW" },
          { title: "API Keys", url: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#api-keys", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "CSRF", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "XSS", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "SQL Injection", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "SSRF", url: "https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "Input Validation", url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "Secrets Management", url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "HTTPS and TLS", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "Security Headers", url: "https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW" },
          { title: "Least Privilege", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html#enforce-least-privileges", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" },
          { title: "Audit Logging", url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=X__dZujBTF4" }
        ]
      },
      {
        id: "databases",
        title: "Databases and Persistence",
        topics: [
          { title: "SQL vs NoSQL", url: "https://learn.microsoft.com/en-us/azure/architecture/data-guide/big-data/non-relational-data", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Relational Modeling", url: "https://www.postgresql.org/docs/current/ddl.html", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Indexing", url: "https://www.postgresql.org/docs/current/indexes.html", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Transactions and ACID", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html", hindiUrl: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU" },
          { title: "ORM vs Query Builder", url: "https://www.prisma.io/docs/orm/overview/introduction/what-is-an-orm", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Connection Pooling", url: "https://www.postgresql.org/docs/current/runtime-config-connection.html", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Migrations", url: "https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/overview", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "N+1 Queries", url: "https://www.prisma.io/docs/orm/prisma-client/queries/query-optimization-performance", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Read Replicas", url: "https://www.postgresql.org/docs/current/hot-standby.html", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Sharding", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/sharding", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Replication", url: "https://www.postgresql.org/docs/current/high-availability.html", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "CAP Theorem", url: "https://www.cs.berkeley.edu/~brewer/cs262b-2004/PODC-keynote.pdf", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Consistency Models", url: "https://jepsen.io/consistency", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Backups and Retention", url: "https://www.postgresql.org/docs/current/backup.html", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" },
          { title: "Choosing a Database", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/data-store-overview", hindiUrl: "https://www.youtube.com/watch?v=Cz3WcTmCbk8" }
        ]
      },
      {
        id: "caching",
        title: "Caching",
        topics: [
          { title: "Cache-Aside", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" },
          { title: "Read-Through and Write-Through", url: "https://redis.io/blog/cache-layer-architecture-guide/", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" },
          { title: "Write-Behind", url: "https://redis.io/learn/howtos/solutions/caching-architecture/common-caching/write-behind-vs-write-through", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" },
          { title: "TTL and Eviction", url: "https://redis.io/docs/latest/develop/reference/eviction/", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" },
          { title: "Cache Invalidation", url: "https://redis.io/docs/latest/develop/reference/client-side-caching/", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" },
          { title: "Redis Basics", url: "https://redis.io/docs/latest/develop/get-started/", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" },
          { title: "CDN Caching", url: "https://www.cloudflare.com/learning/cdn/what-is-caching/", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" },
          { title: "HTTP Caching", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" },
          { title: "Cache Stampede", url: "https://redis.io/blog/caches-promises-locks/", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" },
          { title: "Cache Key Design", url: "https://redis.io/docs/latest/develop/using-commands/keyspace/", hindiUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHanm1nA5_fMwbx5dCNFkDX" },
          { title: "Hot Keys", url: "https://redis.io/learn/howtos/antipatterns", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" },
          { title: "Local vs Distributed Cache", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/caching", hindiUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" }
        ]
      },
      {
        id: "async-jobs",
        title: "Async and Background Jobs",
        topics: [
          { title: "Synchronous vs Asynchronous", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing", hindiUrl: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3KELplHtc-RnJ5xTUPqdgH" },
          { title: "Event Loop Basics", url: "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick", hindiUrl: "https://www.youtube.com/watch?v=fe6L8bNC_Yw" },
          { title: "Promises and Async/Await", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37" },
          { title: "Concurrency vs Parallelism", url: "https://go.dev/blog/waza-talk", hindiUrl: "https://www.youtube.com/watch?v=fe6L8bNC_Yw" },
          { title: "Thread Pools", url: "https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop", hindiUrl: "https://www.youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo" },
          { title: "Background Jobs", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs", hindiUrl: "https://www.youtube.com/watch?v=fe6L8bNC_Yw" },
          { title: "Job Queues", url: "https://docs.bullmq.io/guide/queues", hindiUrl: "https://www.youtube.com/watch?v=fe6L8bNC_Yw" },
          { title: "Scheduling and Cron", url: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/", hindiUrl: "https://www.youtube.com/watch?v=fe6L8bNC_Yw" },
          { title: "Retries with Backoff", url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/", hindiUrl: "https://www.youtube.com/watch?v=fe6L8bNC_Yw" },
          { title: "Dead Letter Queues", url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html", hindiUrl: "https://www.youtube.com/watch?v=fe6L8bNC_Yw" },
          { title: "Idempotent Job Processing", url: "https://docs.bullmq.io/patterns/idempotent-jobs", hindiUrl: "https://www.youtube.com/watch?v=fe6L8bNC_Yw" },
          { title: "Graceful Shutdown", url: "https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html", hindiUrl: "https://www.youtube.com/watch?v=fe6L8bNC_Yw" }
        ]
      },
      {
        id: "messaging",
        title: "Messaging and Events",
        topics: [
          { title: "Message Queues", url: "https://www.rabbitmq.com/tutorials/tutorial-one-javascript", hindiUrl: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
          { title: "Publish-Subscribe", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber", hindiUrl: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
          { title: "Event-Driven Architecture", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven", hindiUrl: "https://www.youtube.com/watch?v=fsmhYmzU-2M" },
          { title: "Kafka Basics", url: "https://kafka.apache.org/documentation/", hindiUrl: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
          { title: "Delivery Semantics", url: "https://kafka.apache.org/documentation/#semantics", hindiUrl: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
          { title: "Ordering Guarantees", url: "https://kafka.apache.org/documentation/#intro_guarantees", hindiUrl: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
          { title: "Consumer Groups", url: "https://kafka.apache.org/documentation/#intro_consumers", hindiUrl: "https://www.youtube.com/watch?v=bCq9k7M9drc" },
          { title: "Outbox Pattern", url: "https://microservices.io/patterns/data/transactional-outbox.html", hindiUrl: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
          { title: "Saga Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/saga", hindiUrl: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
          { title: "Event Sourcing Introduction", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing", hindiUrl: "https://www.youtube.com/watch?v=fsmhYmzU-2M" },
          { title: "Event Schema Evolution", url: "https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html", hindiUrl: "https://www.youtube.com/watch?v=fsmhYmzU-2M" }
        ]
      },
      {
        id: "system-design",
        title: "System Design",
        topics: [
          { title: "Requirements Clarification", url: "https://github.com/donnemartin/system-design-primer#system-design-interview-questions-with-solutions", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Capacity Estimation", url: "https://github.com/donnemartin/system-design-primer#back-of-the-envelope-estimation", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Load Balancing", url: "https://www.nginx.com/resources/glossary/load-balancing/", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Horizontal vs Vertical Scaling", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Stateless Services", url: "https://12factor.net/processes", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Database Choice", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/data-store-overview", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Caching Layers", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/caching", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "CDN", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Rate Limiter Design", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/rate-limiting-pattern", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "URL Shortener", url: "https://github.com/donnemartin/system-design-primer#design-pastebincom-or-bitly", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Chat Application", url: "https://github.com/donnemartin/system-design-primer#design-a-chat-server", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "News Feed", url: "https://github.com/donnemartin/system-design-primer#design-twitter", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "File Upload Service", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Notification Service", url: "https://docs.aws.amazon.com/sns/latest/dg/welcome.html", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Unique ID Generation", url: "https://github.com/twitter-archive/snowflake", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" },
          { title: "Consistency and Availability Trade-offs", url: "https://jepsen.io/consistency", hindiUrl: "https://www.youtube.com/watch?v=lFeYU31TnQ8" }
        ]
      },
      {
        id: "reliability",
        title: "Reliability and Scalability",
        topics: [
          { title: "High Availability", url: "https://www.postgresql.org/docs/current/high-availability.html", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Fault Tolerance", url: "https://sre.google/sre-book/handling-overload/", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Redundancy", url: "https://sre.google/sre-book/availability-table/", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Health Checks", url: "https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Circuit Breakers", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Timeouts", url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Retries", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/retry", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Bulkheads", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Backpressure", url: "https://nodejs.org/en/learn/modules/backpressuring-in-streams", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Graceful Degradation", url: "https://sre.google/sre-book/handling-overload/", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Disaster Recovery", url: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Multi-Region Deployment", url: "https://docs.aws.amazon.com/whitepapers/latest/aws-multi-region-fundamentals/aws-multi-region-fundamentals.html", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Blue-Green Deployments", url: "https://learn.microsoft.com/en-us/azure/container-apps/blue-green-deployment", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" },
          { title: "Canary Releases", url: "https://sre.google/workbook/canarying-releases/", hindiUrl: "https://www.youtube.com/watch?v=_kCWAf8kEYI" }
        ]
      },
      {
        id: "observability",
        title: "Observability",
        topics: [
          { title: "Logging", url: "https://opentelemetry.io/docs/concepts/signals/logs/", hindiUrl: "https://www.youtube.com/watch?v=YwRotNcfZZY" },
          { title: "Structured Logs", url: "https://opentelemetry.io/docs/concepts/signals/logs/", hindiUrl: "https://www.youtube.com/playlist?list=PLdpzxOOAlwvJUIfwmmVDoPYqXXUNbdBmb" },
          { title: "Log Levels", url: "https://opentelemetry.io/docs/specs/otel/logs/data-model/#field-severitynumber", hindiUrl: "https://www.youtube.com/watch?v=YwRotNcfZZY" },
          { title: "Metrics", url: "https://opentelemetry.io/docs/concepts/signals/metrics/", hindiUrl: "https://www.youtube.com/playlist?list=PLdpzxOOAlwvJUIfwmmVDoPYqXXUNbdBmb" },
          { title: "Counters, Gauges and Histograms", url: "https://prometheus.io/docs/concepts/metric_types/", hindiUrl: "https://www.youtube.com/watch?v=ddZjhv66o_o" },
          { title: "Distributed Tracing", url: "https://opentelemetry.io/docs/concepts/signals/traces/", hindiUrl: "https://www.youtube.com/watch?v=YwRotNcfZZY" },
          { title: "Correlation IDs", url: "https://opentelemetry.io/docs/concepts/context-propagation/", hindiUrl: "https://www.youtube.com/watch?v=ddZjhv66o_o" },
          { title: "Error Tracking", url: "https://docs.sentry.io/platforms/javascript/guides/node/", hindiUrl: "https://www.youtube.com/watch?v=ddZjhv66o_o" },
          { title: "Alerting", url: "https://prometheus.io/docs/alerting/latest/overview/", hindiUrl: "https://www.youtube.com/watch?v=ddZjhv66o_o" },
          { title: "SLI, SLO and SLA", url: "https://sre.google/sre-book/service-level-objectives/", hindiUrl: "https://www.youtube.com/watch?v=ddZjhv66o_o" },
          { title: "Dashboards", url: "https://grafana.com/docs/grafana/latest/dashboards/", hindiUrl: "https://www.youtube.com/watch?v=ddZjhv66o_o" },
          { title: "Profiling", url: "https://nodejs.org/en/learn/getting-started/profiling", hindiUrl: "https://www.youtube.com/watch?v=ddZjhv66o_o" },
          { title: "On-Call Runbooks", url: "https://sre.google/sre-book/being-on-call/", hindiUrl: "https://www.youtube.com/watch?v=ddZjhv66o_o" }
        ]
      },
      {
        id: "testing",
        title: "Testing",
        topics: [
          { title: "Unit Testing", url: "https://nodejs.org/api/test.html", hindiUrl: "https://www.youtube.com/watch?v=rqY_RlOKu8s" },
          { title: "Integration Testing", url: "https://martinfowler.com/articles/practical-test-pyramid.html#IntegrationTests", hindiUrl: "https://www.youtube.com/watch?v=mILLHaIjGn4" },
          { title: "End-to-End Testing", url: "https://playwright.dev/docs/writing-tests", hindiUrl: "https://www.youtube.com/watch?v=TFW_zvFHuOg" },
          { title: "Contract Testing", url: "https://docs.pact.io/", hindiUrl: "https://www.youtube.com/watch?v=mILLHaIjGn4" },
          { title: "Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html", hindiUrl: "https://www.youtube.com/watch?v=mILLHaIjGn4" },
          { title: "Test Doubles and Mocks", url: "https://martinfowler.com/bliki/TestDouble.html", hindiUrl: "https://www.youtube.com/watch?v=mILLHaIjGn4" },
          { title: "Fixtures and Factories", url: "https://docs.pytest.org/en/stable/how-to/fixtures.html", hindiUrl: "https://www.youtube.com/watch?v=mILLHaIjGn4" },
          { title: "Database Test Isolation", url: "https://testcontainers.com/guides/getting-started-with-testcontainers-for-nodejs/", hindiUrl: "https://www.youtube.com/watch?v=mILLHaIjGn4" },
          { title: "Testing Async Code", url: "https://jestjs.io/docs/asynchronous", hindiUrl: "https://www.youtube.com/watch?v=TFW_zvFHuOg" },
          { title: "Load Testing", url: "https://grafana.com/docs/k6/latest/get-started/", hindiUrl: "https://www.youtube.com/watch?v=mILLHaIjGn4" },
          { title: "Security Testing", url: "https://owasp.org/www-project-web-security-testing-guide/", hindiUrl: "https://www.youtube.com/watch?v=mILLHaIjGn4" },
          { title: "CI Test Gates", url: "https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration", hindiUrl: "https://www.youtube.com/watch?v=mILLHaIjGn4" }
        ]
      },
      {
        id: "node-express",
        title: "Node.js and Express",
        topics: [
          { title: "Node.js Runtime", url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW" },
          { title: "Event Loop and Non-Blocking I/O", url: "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "npm and package.json", url: "https://docs.npmjs.com/cli/v11/configuring-npm/package-json", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "CommonJS vs ES Modules", url: "https://nodejs.org/api/esm.html", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Express Routing", url: "https://expressjs.com/en/guide/routing.html", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW" },
          { title: "Middleware", url: "https://expressjs.com/en/guide/using-middleware.html", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Error-Handling Middleware", url: "https://expressjs.com/en/guide/error-handling.html", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Request Validation", url: "https://express-validator.github.io/docs/", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Environment Configuration", url: "https://nodejs.org/api/environment_variables.html", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Logging Middleware", url: "https://expressjs.com/en/resources/middleware/morgan.html", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Authentication Middleware", url: "https://www.passportjs.org/concepts/authentication/middleware/", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Rate Limiting Middleware", url: "https://express-rate-limit.mintlify.app/overview", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "File Uploads", url: "https://expressjs.com/en/resources/middleware/multer.html", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Cluster and Worker Threads", url: "https://nodejs.org/api/worker_threads.html", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" }
        ]
      },
      {
        id: "devops-deployment",
        title: "DevOps and Deployment",
        topics: [
          { title: "Git Workflows", url: "https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" },
          { title: "Build and Artifact Management", url: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" },
          { title: "Docker Basics", url: "https://docs.docker.com/get-started/", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" },
          { title: "Docker Compose", url: "https://docs.docker.com/compose/", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" },
          { title: "Container Images and Registries", url: "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" },
          { title: "CI/CD Pipelines", url: "https://docs.github.com/en/actions/about-github-actions/understanding-github-actions", hindiUrl: "https://www.youtube.com/watch?v=3uE-v0D6qKo" },
          { title: "Infrastructure as Code", url: "https://developer.hashicorp.com/terraform/intro", hindiUrl: "https://www.youtube.com/watch?v=rr9cI4u1_88" },
          { title: "Reverse Proxy and Nginx", url: "https://nginx.org/en/docs/beginners_guide.html", hindiUrl: "https://www.youtube.com/watch?v=EH3vGeqeIAo" },
          { title: "Process Managers", url: "https://pm2.keymetrics.io/docs/usage/quick-start/", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" },
          { title: "Environment Promotion", url: "https://12factor.net/dev-prod-parity", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" },
          { title: "Secrets in CI", url: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions", hindiUrl: "https://www.youtube.com/watch?v=3uE-v0D6qKo" },
          { title: "Rollbacks", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" },
          { title: "Zero-Downtime Deployments", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" },
          { title: "Cloud Basics", url: "https://aws.amazon.com/what-is-cloud-computing/", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" },
          { title: "Cost Awareness", url: "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html", hindiUrl: "https://www.youtube.com/watch?v=qV_TqF10I6s" }
        ]
      },
      {
        id: "architecture-patterns",
        title: "Architecture Patterns",
        topics: [
          { title: "Monolith", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/web-queue-worker", hindiUrl: "https://www.youtube.com/watch?v=MPxr1q8ORuA" },
          { title: "Modular Monolith", url: "https://www.kamilgrzybek.com/blog/posts/modular-monolith-primer", hindiUrl: "https://www.youtube.com/watch?v=MPxr1q8ORuA" },
          { title: "Microservices", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices", hindiUrl: "https://www.youtube.com/watch?v=MPxr1q8ORuA" },
          { title: "Service Boundaries", url: "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis", hindiUrl: "https://www.youtube.com/watch?v=MPxr1q8ORuA" },
          { title: "API Gateway", url: "https://learn.microsoft.com/en-us/azure/architecture/microservices/design/gateway", hindiUrl: "https://www.youtube.com/watch?v=MPxr1q8ORuA" },
          { title: "Backend for Frontend", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends", hindiUrl: "https://www.youtube.com/watch?v=MPxr1q8ORuA" },
          { title: "Strangler Fig Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig", hindiUrl: "https://www.youtube.com/watch?v=qGlUKtjqaEQ" },
          { title: "Shared Database Anti-pattern", url: "https://microservices.io/patterns/data/shared-database.html", hindiUrl: "https://www.youtube.com/watch?v=l1OCmsBnQ3g" },
          { title: "Synchronous vs Asynchronous Communication", url: "https://learn.microsoft.com/en-us/azure/architecture/microservices/design/interservice-communication", hindiUrl: "https://www.youtube.com/watch?v=MPxr1q8ORuA" },
          { title: "CQRS Introduction", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs", hindiUrl: "https://www.youtube.com/watch?v=l1OCmsBnQ3g" },
          { title: "Domain-Driven Design Basics", url: "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis", hindiUrl: "https://www.youtube.com/watch?v=l1OCmsBnQ3g" },
          { title: "Hexagonal Architecture", url: "https://alistair.cockburn.us/hexagonal-architecture", hindiUrl: "https://www.youtube.com/watch?v=MPxr1q8ORuA" },
          { title: "Layered Architecture", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier", hindiUrl: "https://www.youtube.com/watch?v=MPxr1q8ORuA" },
          { title: "Trade-off Analysis", url: "https://docs.aws.amazon.com/wellarchitected/2024-06-27/framework/the-review-process.html", hindiUrl: "https://www.youtube.com/watch?v=MPxr1q8ORuA" }
        ]
      }
    ]
  },

  frontend: {
    label: "Frontend",
    sections: [
      {
        id: "html-fundamentals",
        title: "HTML Fundamentals",
        topics: [
          { title: "Document Structure", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "Metadata and Head", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "Headings and Paragraphs", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "Links", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "Images and Alt Text", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "Lists", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "Tables", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "Forms and Inputs", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "Labels and Fieldsets", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "Buttons vs Links", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "Audio and Video", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio", hindiUrl: "https://www.youtube.com/watch?v=BPftiMM8mgI" },
          { title: "Iframes", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "HTML Entities", url: "https://developer.mozilla.org/en-US/docs/Glossary/Character_reference", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
          { title: "HTML Validation", url: "https://validator.w3.org/", hindiUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4" }
        ]
      },
      {
        id: "accessibility",
        title: "Semantic HTML and Accessibility",
        topics: [
          { title: "Semantic Elements", url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI" },
          { title: "Landmark Regions", url: "https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "Heading Hierarchy", url: "https://www.w3.org/WAI/tutorials/page-structure/headings/", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "ARIA Basics", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "ARIA Roles, States and Properties", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "Keyboard Navigation", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "Focus Management", url: "https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "Color Contrast", url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "Screen Reader Basics", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Tooling#screen_reader_testing", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "Accessible Forms", url: "https://www.w3.org/WAI/tutorials/forms/", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "Accessible Modals", url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "Live Regions", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "Reduced Motion", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" },
          { title: "Accessibility Testing", url: "https://www.w3.org/WAI/test-evaluate/", hindiUrl: "https://www.youtube.com/watch?v=FKfsmV6otEM" }
        ]
      },
      {
        id: "css-fundamentals",
        title: "CSS Fundamentals",
        topics: [
          { title: "Selectors", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Specificity", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Cascade and Inheritance", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Box Model", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model", hindiUrl: "https://www.youtube.com/watch?v=5koxb4JaDqc" },
          { title: "Units (px, rem, em, %)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Colors and Alpha", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Typography", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Pseudo-classes", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Pseudo-elements", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Custom Properties", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "Shorthand Properties", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "DevTools Debugging", url: "https://developer.chrome.com/docs/devtools/css/", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
          { title: "CSS Architecture", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing", hindiUrl: "https://www.youtube.com/watch?v=kJEsTjH5mVg" }
        ]
      },
      {
        id: "layout",
        title: "Layout",
        topics: [
          { title: "Display Types", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display", hindiUrl: "https://www.youtube.com/watch?v=kJ_6qHtBVGA" },
          { title: "Normal Flow", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow", hindiUrl: "https://www.youtube.com/watch?v=kJ_6qHtBVGA" },
          { title: "Positioning", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position", hindiUrl: "https://www.youtube.com/watch?v=kJ_6qHtBVGA" },
          { title: "Stacking Context and z-index", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context", hindiUrl: "https://www.youtube.com/watch?v=kJ_6qHtBVGA" },
          { title: "Flexbox Basics", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox", hindiUrl: "https://www.youtube.com/watch?v=kJ_6qHtBVGA" },
          { title: "Flex Direction and Wrapping", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items", hindiUrl: "https://www.youtube.com/watch?v=kJ_6qHtBVGA" },
          { title: "Flex Alignment", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container", hindiUrl: "https://www.youtube.com/watch?v=kJ_6qHtBVGA" },
          { title: "Flex Grow, Shrink and Basis", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis", hindiUrl: "https://www.youtube.com/watch?v=kJ_6qHtBVGA" },
          { title: "CSS Grid Basics", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout", hindiUrl: "https://www.youtube.com/watch?v=MPl9bevckUE" },
          { title: "Grid Template Areas", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas", hindiUrl: "https://www.youtube.com/watch?v=MPl9bevckUE" },
          { title: "Grid Auto Placement", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout", hindiUrl: "https://www.youtube.com/watch?v=MPl9bevckUE" },
          { title: "Gap and Alignment", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout", hindiUrl: "https://www.youtube.com/watch?v=kJ_6qHtBVGA" },
          { title: "Overflow and Aspect Ratio", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overflow", hindiUrl: "https://www.youtube.com/watch?v=kJ_6qHtBVGA" },
          { title: "Container Queries Introduction", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries", hindiUrl: "https://www.youtube.com/watch?v=MPl9bevckUE" }
        ]
      },
      {
        id: "responsive-design",
        title: "Responsive Design",
        topics: [
          { title: "Mobile-First Design", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design", hindiUrl: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
          { title: "Media Queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries", hindiUrl: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
          { title: "Breakpoints", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries", hindiUrl: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
          { title: "Fluid Layouts", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design", hindiUrl: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
          { title: "Responsive Images", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images", hindiUrl: "https://www.youtube.com/watch?v=IA8JWGP13dI" },
          { title: "srcset and sizes", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#srcset", hindiUrl: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
          { title: "Viewport Meta Tag", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport", hindiUrl: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
          { title: "Relative Units", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length", hindiUrl: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
          { title: "clamp() and min()/max()", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp", hindiUrl: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
          { title: "Touch Targets", url: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html", hindiUrl: "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
          { title: "Responsive Typography", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design", hindiUrl: "https://www.youtube.com/watch?v=IA8JWGP13dI" },
          { title: "Testing on Devices", url: "https://developer.chrome.com/docs/devtools/device-mode/", hindiUrl: "https://www.youtube.com/watch?v=Edsxf_NBFrw" }
        ]
      },
      {
        id: "javascript-fundamentals",
        title: "JavaScript Fundamentals",
        topics: [
          { title: "Variables and Scope", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Data Types", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Type Coercion", url: "https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "== vs ===", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Operators", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Conditionals", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Loops", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Arrow Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Hoisting", url: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "this Binding", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Objects and Prototypes", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Array Methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Map and Set", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Destructuring", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Spread and Rest", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Template Literals", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Modules (import/export)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Error Handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "JSON", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Dates", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Regular Expressions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" },
          { title: "Immutability Basics", url: "https://react.dev/learn/updating-objects-in-state", hindiUrl: "https://www.youtube.com/watch?v=Hr5iLG7sUa0" }
        ]
      },
      {
        id: "dom-events",
        title: "DOM and Events",
        topics: [
          { title: "DOM Tree", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction", hindiUrl: "https://www.youtube.com/watch?v=DcjNkHtDj8A" },
          { title: "Selecting Elements", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector", hindiUrl: "https://www.youtube.com/watch?v=_ALUMTa8BAE" },
          { title: "Traversing the DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model", hindiUrl: "https://www.youtube.com/watch?v=DcjNkHtDj8A" },
          { title: "Creating and Removing Elements", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement", hindiUrl: "https://www.youtube.com/watch?v=_ALUMTa8BAE" },
          { title: "Modifying Content and Attributes", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute", hindiUrl: "https://www.youtube.com/watch?v=_ALUMTa8BAE" },
          { title: "classList and Inline Styles", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList", hindiUrl: "https://www.youtube.com/watch?v=_ALUMTa8BAE" },
          { title: "Event Listeners", url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener", hindiUrl: "https://www.youtube.com/watch?v=CO_DAXswOrc" },
          { title: "Event Bubbling and Capturing", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling", hindiUrl: "https://www.youtube.com/watch?v=CO_DAXswOrc" },
          { title: "Event Delegation", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation", hindiUrl: "https://www.youtube.com/watch?v=CO_DAXswOrc" },
          { title: "preventDefault and stopPropagation", url: "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault", hindiUrl: "https://www.youtube.com/watch?v=_ALUMTa8BAE" },
          { title: "Forms and FormData", url: "https://developer.mozilla.org/en-US/docs/Web/API/FormData", hindiUrl: "https://www.youtube.com/watch?v=_ALUMTa8BAE" },
          { title: "Custom Events", url: "https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent", hindiUrl: "https://www.youtube.com/watch?v=_ALUMTa8BAE" },
          { title: "MutationObserver", url: "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver", hindiUrl: "https://www.youtube.com/watch?v=_ALUMTa8BAE" },
          { title: "IntersectionObserver", url: "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver", hindiUrl: "https://www.youtube.com/watch?v=_ALUMTa8BAE" }
        ]
      },
      {
        id: "async-javascript",
        title: "Async JavaScript",
        topics: [
          { title: "Call Stack", url: "https://developer.mozilla.org/en-US/docs/Glossary/Call_stack", hindiUrl: "https://www.youtube.com/watch?v=ScWpPpXaVcA" },
          { title: "Event Loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model", hindiUrl: "https://www.youtube.com/watch?v=VaBP6_pBOgM" },
          { title: "Task Queue vs Microtask Queue", url: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide", hindiUrl: "https://www.youtube.com/watch?v=ScWpPpXaVcA" },
          { title: "Callbacks", url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function", hindiUrl: "https://www.youtube.com/watch?v=A3slyZ5h-zE" },
          { title: "Promises and Chaining", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises", hindiUrl: "https://www.youtube.com/watch?v=A3slyZ5h-zE" },
          { title: "async/await", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function", hindiUrl: "https://www.youtube.com/watch?v=VlWjpI_sV5E" },
          { title: "Async Error Handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch", hindiUrl: "https://www.youtube.com/watch?v=ScWpPpXaVcA" },
          { title: "Promise.all and allSettled", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled", hindiUrl: "https://www.youtube.com/watch?v=NJpf8ahvriQ" },
          { title: "Promise.race and any", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any", hindiUrl: "https://www.youtube.com/watch?v=NJpf8ahvriQ" },
          { title: "AbortController", url: "https://developer.mozilla.org/en-US/docs/Web/API/AbortController", hindiUrl: "https://www.youtube.com/watch?v=ScWpPpXaVcA" },
          { title: "Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch", hindiUrl: "https://www.youtube.com/watch?v=VlWjpI_sV5E" },
          { title: "Timeouts and Retries", url: "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static", hindiUrl: "https://www.youtube.com/watch?v=ScWpPpXaVcA" },
          { title: "Debouncing", url: "https://developer.mozilla.org/en-US/docs/Glossary/Debounce", hindiUrl: "https://www.youtube.com/watch?v=ScWpPpXaVcA" },
          { title: "Throttling", url: "https://developer.mozilla.org/en-US/docs/Glossary/Throttle", hindiUrl: "https://www.youtube.com/watch?v=ScWpPpXaVcA" },
          { title: "Concurrency Control", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all", hindiUrl: "https://www.youtube.com/watch?v=ScWpPpXaVcA" },
          { title: "Web Workers", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers", hindiUrl: "https://www.youtube.com/watch?v=ScWpPpXaVcA" }
        ]
      },
      {
        id: "browser-apis",
        title: "Browser APIs and Storage",
        topics: [
          { title: "localStorage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "sessionStorage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "Cookies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "IndexedDB", url: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "Cache API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Cache", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "History API", url: "https://developer.mozilla.org/en-US/docs/Web/API/History_API", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "Clipboard API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "Geolocation", url: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "Notifications", url: "https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "File API", url: "https://developer.mozilla.org/en-US/docs/Web/API/File_API", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "Drag and Drop", url: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "Same-Origin Policy", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" },
          { title: "CORS in the Browser", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS", hindiUrl: "https://www.youtube.com/watch?v=VlPiVmYuoqw" },
          { title: "Content Security Policy", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP", hindiUrl: "https://www.youtube.com/watch?v=onbBV0uFVpo" }
        ]
      },
      {
        id: "typescript",
        title: "TypeScript",
        topics: [
          { title: "TypeScript Setup", url: "https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html", hindiUrl: "https://www.youtube.com/watch?v=j89BvWz8Eag" },
          { title: "Basic Types", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Type Inference", url: "https://www.typescriptlang.org/docs/handbook/type-inference.html", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Interfaces vs Type Aliases", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Unions and Intersections", url: "https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Narrowing", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Generics", url: "https://www.typescriptlang.org/docs/handbook/2/generics.html", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Utility Types", url: "https://www.typescriptlang.org/docs/handbook/utility-types.html", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Literal Unions and Enums", url: "https://www.typescriptlang.org/docs/handbook/enums.html", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Type Assertions", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Strict Mode", url: "https://www.typescriptlang.org/tsconfig/strict.html", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Typing DOM Events", url: "https://www.typescriptlang.org/docs/handbook/dom-manipulation.html", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" },
          { title: "Typing API Responses", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html", hindiUrl: "https://www.youtube.com/watch?v=qYP2P8ipa-Y" }
        ]
      },
      {
        id: "react",
        title: "React Fundamentals",
        topics: [
          { title: "Components and JSX", url: "https://react.dev/learn/your-first-component", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Props", url: "https://react.dev/learn/passing-props-to-a-component", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "State", url: "https://react.dev/learn/state-a-components-memory", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Rendering and Reconciliation", url: "https://react.dev/learn/render-and-commit", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Lists and Keys", url: "https://react.dev/learn/rendering-lists", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Event Handling", url: "https://react.dev/learn/responding-to-events", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Controlled Inputs", url: "https://react.dev/reference/react-dom/components/input", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "useEffect", url: "https://react.dev/reference/react/useEffect", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Dependency Arrays", url: "https://react.dev/learn/removing-effect-dependencies", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Lifting State Up", url: "https://react.dev/learn/sharing-state-between-components", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Context", url: "https://react.dev/learn/passing-data-deeply-with-context", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Reducers", url: "https://react.dev/learn/extracting-state-logic-into-a-reducer", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "React.memo, useMemo and useCallback", url: "https://react.dev/reference/react/memo", hindiUrl: "https://www.youtube.com/watch?v=vz1RlUyrc3w" },
          { title: "Custom Hooks", url: "https://react.dev/learn/reusing-logic-with-custom-hooks", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Error Boundaries", url: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "React Router Basics", url: "https://reactrouter.com/start/declarative/installation", hindiUrl: "https://www.youtube.com/watch?v=vz1RlUyrc3w" },
          { title: "Data Fetching Patterns", url: "https://react.dev/learn/synchronizing-with-effects#fetching-data", hindiUrl: "https://www.youtube.com/watch?v=yRpLlJmRo2w" },
          { title: "Accessibility in React", url: "https://react.dev/reference/react-dom/components#common-components", hindiUrl: "https://www.youtube.com/watch?v=vz1RlUyrc3w" }
        ]
      },
      {
        id: "state-management",
        title: "State Management",
        topics: [
          { title: "Local vs Global State", url: "https://react.dev/learn/choosing-the-state-structure", hindiUrl: "https://www.youtube.com/watch?v=KCr-UNsM3vA" },
          { title: "Prop Drilling", url: "https://react.dev/learn/passing-data-deeply-with-context", hindiUrl: "https://www.youtube.com/watch?v=1i04-A7kfFI" },
          { title: "Context API", url: "https://react.dev/reference/react/useContext", hindiUrl: "https://www.youtube.com/watch?v=1i04-A7kfFI" },
          { title: "Reducers", url: "https://react.dev/reference/react/useReducer", hindiUrl: "https://www.youtube.com/watch?v=1i04-A7kfFI" },
          { title: "Zustand Basics", url: "https://zustand.docs.pmnd.rs/learn/getting-started/introduction", hindiUrl: "https://www.youtube.com/watch?v=KCr-UNsM3vA" },
          { title: "Redux Fundamentals", url: "https://redux.js.org/tutorials/fundamentals/part-1-overview", hindiUrl: "https://www.youtube.com/watch?v=1i04-A7kfFI" },
          { title: "Redux Toolkit", url: "https://redux-toolkit.js.org/introduction/getting-started", hindiUrl: "https://www.youtube.com/watch?v=1i04-A7kfFI" },
          { title: "Server State vs Client State", url: "https://tanstack.com/query/latest/docs/framework/react/overview", hindiUrl: "https://www.youtube.com/watch?v=KCr-UNsM3vA" },
          { title: "TanStack Query Basics", url: "https://tanstack.com/query/latest/docs/framework/react/quick-start", hindiUrl: "https://www.youtube.com/watch?v=1i04-A7kfFI" },
          { title: "Optimistic Updates", url: "https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates", hindiUrl: "https://www.youtube.com/watch?v=1i04-A7kfFI" },
          { title: "URL as State", url: "https://reactrouter.com/explanation/state-management", hindiUrl: "https://www.youtube.com/watch?v=KCr-UNsM3vA" },
          { title: "Form State", url: "https://react.dev/reference/react-dom/components/input", hindiUrl: "https://www.youtube.com/watch?v=KCr-UNsM3vA" }
        ]
      },
      {
        id: "performance",
        title: "Frontend Performance",
        topics: [
          { title: "Core Web Vitals", url: "https://web.dev/articles/vitals", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Largest Contentful Paint", url: "https://web.dev/articles/lcp", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Cumulative Layout Shift", url: "https://web.dev/articles/cls", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Interaction to Next Paint", url: "https://web.dev/articles/inp", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Critical Rendering Path", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Render-Blocking Resources", url: "https://web.dev/learn/performance/understanding-the-critical-path", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Code Splitting", url: "https://webpack.js.org/guides/code-splitting/", hindiUrl: "https://www.youtube.com/watch?v=QA6oTpMZp84" },
          { title: "Lazy Loading", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading", hindiUrl: "https://www.youtube.com/watch?v=QA6oTpMZp84" },
          { title: "Tree Shaking", url: "https://webpack.js.org/guides/tree-shaking/", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Bundle Analysis", url: "https://github.com/webpack-contrib/webpack-bundle-analyzer", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Image Optimization", url: "https://web.dev/learn/images", hindiUrl: "https://www.youtube.com/watch?v=QA6oTpMZp84" },
          { title: "Font Loading", url: "https://web.dev/articles/font-best-practices", hindiUrl: "https://www.youtube.com/watch?v=QA6oTpMZp84" },
          { title: "Preload, Prefetch and Preconnect", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Speculative_loading", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Browser Caching", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Compression and Minification", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Reflow and DOM Size", url: "https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
          { title: "Performance Profiling", url: "https://developer.chrome.com/docs/devtools/performance/", hindiUrl: "https://www.youtube.com/watch?v=QA6oTpMZp84" },
          { title: "Memory Leaks", url: "https://developer.chrome.com/docs/devtools/memory-problems/", hindiUrl: "https://www.youtube.com/watch?v=CyRlWlaJnTY" }
        ]
      },
      {
        id: "testing",
        title: "Testing",
        topics: [
          { title: "Unit Testing Basics", url: "https://vitest.dev/guide/", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Testing Library", url: "https://testing-library.com/docs/", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Component Testing", url: "https://testing-library.com/docs/react-testing-library/intro/", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Integration Testing", url: "https://testing-library.com/docs/guiding-principles/", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "End-to-End Testing", url: "https://playwright.dev/docs/intro", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Mocking APIs", url: "https://mswjs.io/docs/", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Arrange, Act, Assert", url: "https://playwright.dev/docs/writing-tests", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Async Testing", url: "https://testing-library.com/docs/dom-testing-library/api-async/", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Snapshot Testing", url: "https://vitest.dev/guide/snapshot.html", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Accessibility Testing", url: "https://playwright.dev/docs/accessibility-testing", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Visual Regression Testing", url: "https://playwright.dev/docs/test-snapshots", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Coverage vs Confidence", url: "https://vitest.dev/guide/coverage.html", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" },
          { title: "Flaky Tests", url: "https://playwright.dev/docs/best-practices", hindiUrl: "https://www.youtube.com/watch?v=chz_g0VfP4U" }
        ]
      },
      {
        id: "tooling",
        title: "Tooling and Workflow",
        topics: [
          { title: "Node.js and npm", url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs", hindiUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w" },
          { title: "package.json", url: "https://docs.npmjs.com/cli/v11/configuring-npm/package-json", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "Semantic Versioning", url: "https://semver.org/", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "npm Scripts", url: "https://docs.npmjs.com/cli/v11/using-npm/scripts", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "Vite Basics", url: "https://vite.dev/guide/", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige" },
          { title: "Bundlers Overview", url: "https://webpack.js.org/concepts/", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "ESLint", url: "https://eslint.org/docs/latest/use/getting-started", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "Prettier", url: "https://prettier.io/docs/install", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "Git Basics", url: "https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "Branching and Merging", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "Pull Requests and Code Review", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews", hindiUrl: "https://www.youtube.com/watch?v=LyxCWXOq4uQ" },
          { title: "Conventional Commits", url: "https://www.conventionalcommits.org/en/v1.0.0/", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "Environment Variables", url: "https://vite.dev/guide/env-and-mode", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "Source Maps", url: "https://developer.chrome.com/docs/devtools/javascript/source-maps/", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "Browser Support and Polyfills", url: "https://developer.mozilla.org/en-US/docs/Glossary/Polyfill", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" },
          { title: "Monorepo Basics", url: "https://docs.npmjs.com/cli/v11/using-npm/workspaces", hindiUrl: "https://www.youtube.com/watch?v=ipnWAKoiBtY" }
        ]
      },
      {
        id: "web-security",
        title: "Web Security",
        topics: [
          { title: "XSS", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=q_0fdnSNXsU" },
          { title: "CSRF", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/playlist?list=PL5OhSdfH4uDuCcQ-NZ4lYa3S07FQTFtrY" },
          { title: "Clickjacking", url: "https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=q_0fdnSNXsU" },
          { title: "Content Security Policy", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP", hindiUrl: "https://www.youtube.com/watch?v=ZnYHnBYIyK8" },
          { title: "Same-Origin Policy", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy", hindiUrl: "https://www.youtube.com/watch?v=q_0fdnSNXsU" },
          { title: "CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW" },
          { title: "Sanitizing User Input", url: "https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=q_0fdnSNXsU" },
          { title: "Safe HTML Rendering", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML", hindiUrl: "https://www.youtube.com/watch?v=q_0fdnSNXsU" },
          { title: "Secure Cookies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie", hindiUrl: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW" },
          { title: "Third-Party Script Risks", url: "https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=q_0fdnSNXsU" },
          { title: "Dependency Auditing", url: "https://docs.npmjs.com/cli/v11/commands/npm-audit", hindiUrl: "https://www.youtube.com/watch?v=q_0fdnSNXsU" },
          { title: "Security Headers", url: "https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html", hindiUrl: "https://www.youtube.com/watch?v=ZnYHnBYIyK8" },
          { title: "OWASP Top 10 Basics", url: "https://owasp.org/www-project-top-ten/", hindiUrl: "https://www.youtube.com/watch?v=q_0fdnSNXsU" }
        ]
      },
      {
        id: "design-ux",
        title: "Design and UX",
        topics: [
          { title: "Design System Basics", url: "https://designsystem.digital.gov/design-principles/", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Typography Scale", url: "https://designsystem.digital.gov/design-tokens/typesetting/overview/", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Spacing Scale", url: "https://designsystem.digital.gov/design-tokens/spacing-units/", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Color Systems", url: "https://designsystem.digital.gov/design-tokens/color/overview/", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Dark Mode", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Visual Hierarchy", url: "https://www.nngroup.com/articles/visual-hierarchy-ux-definition/", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Interaction States", url: "https://carbondesignsystem.com/components/button/usage/", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Loading States", url: "https://carbondesignsystem.com/components/loading/usage/", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Empty States", url: "https://carbondesignsystem.com/patterns/empty-states-pattern/", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Error States", url: "https://designsystem.digital.gov/components/alert/", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Microcopy", url: "https://www.gov.uk/guidance/content-design/writing-for-gov-uk", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Usability Heuristics", url: "https://www.nngroup.com/articles/ten-usability-heuristics/", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" },
          { title: "Responsive Patterns", url: "https://web.dev/articles/responsive-web-design-basics", hindiUrl: "https://www.youtube.com/watch?v=S_B5h2m2nj0" }
        ]
      }
    ]
  }
};
