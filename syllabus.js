/* Study syllabus for the four checklist subjects. */

const SYLLABUS = {
  dsa: {
    label: "DSA",
    sections: [
      {
        id: "fundamentals",
        title: "Fundamentals",
        topics: [
          "Big O Notation",
          "Time Complexity",
          "Space Complexity",
          "Asymptotic Analysis",
          "Best, Average and Worst Case",
          "Common Complexity Classes",
          "Amortized Analysis",
          "Recursion vs Iteration",
          "Problem-Solving Approach"
        ]
      },
      {
        id: "arrays",
        title: "Arrays",
        topics: [
          "Array Traversal",
          "Reverse Array",
          "Find Maximum",
          "Find Minimum",
          "Find Duplicates",
          "Second Largest Element",
          "Rotate Array",
          "Move Zeroes",
          "Prefix Sum",
          "Kadane's Algorithm",
          "Merge Sorted Arrays",
          "Product of Array Except Self"
        ]
      },
      {
        id: "strings",
        title: "Strings",
        topics: [
          "String Traversal",
          "Reverse String",
          "Palindrome",
          "Anagram",
          "Character Frequency",
          "Longest Common Prefix",
          "String Compression",
          "Substring Search",
          "Longest Palindromic Substring",
          "ASCII and Unicode Basics"
        ]
      },
      {
        id: "searching-sorting",
        title: "Searching and Sorting",
        topics: [
          "Linear Search",
          "Binary Search",
          "Lower and Upper Bound",
          "Bubble Sort",
          "Selection Sort",
          "Insertion Sort",
          "Merge Sort",
          "Quick Sort",
          "Heap Sort",
          "Counting Sort",
          "Stability and In-Place Sorting",
          "Comparator Design"
        ]
      },
      {
        id: "hash-maps",
        title: "Hash Maps",
        topics: [
          "Hash Function Basics",
          "Hash Table Operations",
          "Collision Handling",
          "Frequency Counting",
          "Two Sum",
          "Group Anagrams",
          "Longest Consecutive Sequence",
          "Contains Duplicate",
          "Hash Set vs Hash Map",
          "Design a HashMap"
        ]
      },
      {
        id: "two-pointers",
        title: "Two Pointers",
        topics: [
          "Opposite-End Pointers",
          "Same-Direction Pointers",
          "Two Sum II",
          "Three Sum",
          "Remove Duplicates from Sorted Array",
          "Container With Most Water",
          "Trapping Rain Water",
          "Dutch National Flag"
        ]
      },
      {
        id: "sliding-window",
        title: "Sliding Window",
        topics: [
          "Fixed-Size Window",
          "Variable-Size Window",
          "Maximum Sum Subarray of Size K",
          "Longest Substring Without Repeating Characters",
          "Minimum Window Substring",
          "Longest Repeating Character Replacement",
          "Permutation in String",
          "Window with Frequency Map"
        ]
      },
      {
        id: "stack-queue",
        title: "Stack and Queue",
        topics: [
          "Stack Fundamentals",
          "Queue Fundamentals",
          "Deque Fundamentals",
          "Valid Parentheses",
          "Min Stack",
          "Next Greater Element",
          "Daily Temperatures",
          "Evaluate Reverse Polish Notation",
          "Implement Queue Using Stacks",
          "Monotonic Stack",
          "Circular Queue",
          "Sliding Window Maximum"
        ]
      },
      {
        id: "linked-lists",
        title: "Linked Lists",
        topics: [
          "Singly Linked List",
          "Doubly Linked List",
          "Traversal",
          "Insertion and Deletion",
          "Reverse Linked List",
          "Find Middle Node",
          "Detect Cycle",
          "Merge Two Sorted Lists",
          "Remove Nth Node From End",
          "Palindrome Linked List",
          "Copy List with Random Pointer",
          "LRU Cache"
        ]
      },
      {
        id: "recursion-backtracking",
        title: "Recursion and Backtracking",
        topics: [
          "Recursion Basics",
          "Base Case and Recursive Case",
          "Call Stack",
          "Factorial and Fibonacci",
          "Subsets",
          "Permutations",
          "Combination Sum",
          "N-Queens",
          "Sudoku Solver",
          "Word Search",
          "Generate Parentheses",
          "Memoization Basics"
        ]
      },
      {
        id: "trees",
        title: "Trees",
        topics: [
          "Tree Terminology",
          "Preorder, Inorder and Postorder",
          "Level Order Traversal",
          "Maximum Depth",
          "Balanced Binary Tree",
          "Diameter of Binary Tree",
          "Lowest Common Ancestor",
          "BST Search, Insert and Delete",
          "Validate BST",
          "Kth Smallest Element in BST",
          "Serialize and Deserialize Binary Tree",
          "Morris Traversal"
        ]
      },
      {
        id: "heaps",
        title: "Heaps and Priority Queues",
        topics: [
          "Heap Properties",
          "Min Heap",
          "Max Heap",
          "Heapify",
          "Insert and Extract",
          "Kth Largest Element",
          "Top K Frequent Elements",
          "Merge K Sorted Lists",
          "Find Median from Data Stream",
          "Priority Queue Applications"
        ]
      },
      {
        id: "graphs",
        title: "Graphs",
        topics: [
          "Graph Terminology",
          "Adjacency List and Matrix",
          "Breadth-First Search",
          "Depth-First Search",
          "Connected Components",
          "Cycle Detection in Undirected Graphs",
          "Cycle Detection in Directed Graphs",
          "Topological Sort",
          "Shortest Path in Unweighted Graphs",
          "Dijkstra's Algorithm",
          "Bellman-Ford Algorithm",
          "Floyd-Warshall Algorithm",
          "Minimum Spanning Tree",
          "Union-Find (Disjoint Set)",
          "Number of Islands",
          "Clone Graph",
          "Course Schedule",
          "Grid Traversal Patterns"
        ]
      },
      {
        id: "dynamic-programming",
        title: "Dynamic Programming",
        topics: [
          "DP Fundamentals",
          "Overlapping Subproblems",
          "Optimal Substructure",
          "Top-Down Memoization",
          "Bottom-Up Tabulation",
          "Space Optimization",
          "0/1 Knapsack",
          "Unbounded Knapsack",
          "Longest Common Subsequence",
          "Longest Increasing Subsequence",
          "Edit Distance",
          "Coin Change",
          "House Robber",
          "Climbing Stairs",
          "Unique Paths",
          "DP on Stocks",
          "Partition Equal Subset Sum",
          "Bitmask DP Introduction"
        ]
      },
      {
        id: "greedy",
        title: "Greedy",
        topics: [
          "Greedy Choice Property",
          "Activity Selection",
          "Interval Scheduling",
          "Jump Game",
          "Gas Station",
          "Huffman Coding",
          "Fractional Knapsack",
          "Greedy vs Dynamic Programming"
        ]
      },
      {
        id: "bit-manipulation",
        title: "Bit Manipulation",
        topics: [
          "Binary Representation",
          "Bitwise Operators",
          "Set, Clear and Toggle Bits",
          "Check Odd or Even",
          "Count Set Bits",
          "Single Number",
          "Power of Two",
          "Subsets Using Bitmasks",
          "XOR Tricks"
        ]
      },
      {
        id: "tries",
        title: "Tries",
        topics: [
          "Trie Structure",
          "Insert and Search",
          "Prefix Search",
          "Delete from Trie",
          "Autocomplete",
          "Maximum XOR Using Trie"
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
          "Relational Database Concepts",
          "Tables, Rows and Columns",
          "Primary Keys",
          "Foreign Keys",
          "Data Types",
          "NULL Semantics",
          "DDL, DML, DCL and TCL",
          "Database vs Schema",
          "Entity-Relationship Basics"
        ]
      },
      {
        id: "basic-queries",
        title: "Basic Queries",
        topics: [
          "SELECT",
          "Column Aliases",
          "DISTINCT",
          "WHERE",
          "ORDER BY",
          "LIMIT and OFFSET",
          "Arithmetic and String Expressions",
          "CASE Expressions",
          "COALESCE and NULLIF",
          "Comments and Formatting"
        ]
      },
      {
        id: "filtering-operators",
        title: "Filtering and Operators",
        topics: [
          "Comparison Operators",
          "AND, OR and NOT",
          "IN and NOT IN",
          "BETWEEN",
          "LIKE and ILIKE",
          "Wildcards and Escaping",
          "IS NULL and IS NOT NULL",
          "EXISTS vs IN",
          "Pattern Matching"
        ]
      },
      {
        id: "joins",
        title: "Joins",
        topics: [
          "INNER JOIN",
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL OUTER JOIN",
          "CROSS JOIN",
          "SELF JOIN",
          "Join Conditions vs Filters",
          "Multiple Joins",
          "Anti Joins",
          "Semi Joins",
          "NATURAL JOIN Caveats",
          "Join Algorithms"
        ]
      },
      {
        id: "aggregation",
        title: "Aggregation and Grouping",
        topics: [
          "COUNT, SUM, AVG, MIN and MAX",
          "GROUP BY",
          "HAVING",
          "Aggregates with NULLs",
          "COUNT(*) vs COUNT(column)",
          "Grouping by Multiple Columns",
          "ROLLUP, CUBE and GROUPING SETS",
          "Filtered Aggregates",
          "String Aggregation",
          "Percentages and Ratios"
        ]
      },
      {
        id: "subqueries-ctes",
        title: "Subqueries and CTEs",
        topics: [
          "Scalar Subqueries",
          "Correlated Subqueries",
          "Derived Tables",
          "IN and EXISTS Subqueries",
          "Common Table Expressions",
          "Recursive CTEs",
          "CTE vs Subquery",
          "LATERAL Joins",
          "Query Readability"
        ]
      },
      {
        id: "window-functions",
        title: "Window Functions",
        topics: [
          "OVER Clause",
          "PARTITION BY",
          "ORDER BY in Windows",
          "ROW_NUMBER",
          "RANK and DENSE_RANK",
          "NTILE",
          "LAG and LEAD",
          "FIRST_VALUE and LAST_VALUE",
          "Running Totals",
          "Moving Averages",
          "Frame Clauses (ROWS and RANGE)",
          "Gaps and Islands"
        ]
      },
      {
        id: "set-operations",
        title: "Set Operations",
        topics: [
          "UNION",
          "UNION ALL",
          "INTERSECT",
          "EXCEPT and MINUS",
          "Set Operation Rules"
        ]
      },
      {
        id: "data-modification",
        title: "Data Modification",
        topics: [
          "INSERT",
          "Multi-Row INSERT",
          "INSERT ... SELECT",
          "UPDATE",
          "DELETE vs TRUNCATE",
          "UPSERT and MERGE",
          "RETURNING Clause",
          "Safe Updates",
          "Bulk Loading"
        ]
      },
      {
        id: "schema-design",
        title: "Schema Design and Normalization",
        topics: [
          "Functional Dependencies",
          "First Normal Form",
          "Second Normal Form",
          "Third Normal Form",
          "BCNF",
          "Denormalization",
          "Surrogate vs Natural Keys",
          "One-to-One, One-to-Many and Many-to-Many",
          "Junction Tables",
          "Naming Conventions",
          "Schema Migration Basics"
        ]
      },
      {
        id: "constraints",
        title: "Constraints and Integrity",
        topics: [
          "NOT NULL",
          "UNIQUE",
          "CHECK",
          "DEFAULT",
          "Primary Key Constraints",
          "Foreign Key Constraints",
          "ON DELETE and ON UPDATE Actions",
          "Deferrable Constraints",
          "Data Integrity Trade-offs"
        ]
      },
      {
        id: "indexes-performance",
        title: "Indexes and Performance",
        topics: [
          "Index Basics",
          "B-Tree Indexes",
          "Composite Indexes",
          "Covering Indexes",
          "Unique and Partial Indexes",
          "Index Selectivity",
          "Query Execution Plans",
          "Sequential vs Index Scan",
          "EXPLAIN and ANALYZE",
          "N+1 Query Problem",
          "Common Query Anti-patterns",
          "Statistics and Vacuum/Analyze"
        ]
      },
      {
        id: "transactions",
        title: "Transactions and Concurrency",
        topics: [
          "ACID Properties",
          "BEGIN, COMMIT and ROLLBACK",
          "Savepoints",
          "Transaction Isolation Levels",
          "Dirty Reads",
          "Non-Repeatable Reads",
          "Phantom Reads",
          "Lost Updates",
          "Row-Level vs Table-Level Locks",
          "Deadlocks",
          "Optimistic vs Pessimistic Locking",
          "MVCC",
          "Transaction Best Practices"
        ]
      },
      {
        id: "advanced-sql",
        title: "Advanced SQL",
        topics: [
          "Views",
          "Materialized Views",
          "Stored Procedures",
          "Functions",
          "Triggers",
          "Events and Scheduling",
          "Dynamic SQL",
          "JSON Functions",
          "Full-Text Search",
          "Pivot and Unpivot",
          "Temporary Tables",
          "GRANT and REVOKE"
        ]
      },
      {
        id: "analytics-interview",
        title: "Analytics and Interview Practice",
        topics: [
          "Top N per Group",
          "Nth Highest Salary",
          "Duplicate Detection",
          "Deduplication",
          "Cumulative Sums",
          "Month-over-Month Growth",
          "Cohort Analysis Basics",
          "Funnel Analysis",
          "Sessionization",
          "Median and Percentiles",
          "Pivot Reporting",
          "Query Optimization Checklist"
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
          "Client-Server Model",
          "Request-Response Lifecycle",
          "DNS and IP Basics",
          "TCP vs UDP",
          "HTTP/1.1, HTTP/2 and HTTP/3",
          "Stateless vs Stateful Services",
          "Backend Architecture Overview",
          "Environment Variables and Config",
          "Twelve-Factor App Basics"
        ]
      },
      {
        id: "http-rest",
        title: "HTTP and REST",
        topics: [
          "HTTP Methods",
          "Status Codes",
          "Headers",
          "Request and Response Bodies",
          "Content Negotiation",
          "Idempotency",
          "REST Resource Modeling",
          "REST vs RPC vs GraphQL",
          "Versioning Strategies",
          "Pagination",
          "Filtering and Sorting",
          "CORS",
          "Cookies vs Tokens",
          "HTTP Caching Headers"
        ]
      },
      {
        id: "api-design",
        title: "API Design",
        topics: [
          "Contract-First Design",
          "Resource Naming",
          "Request Validation",
          "Response Schemas",
          "Error Response Design",
          "API Versioning",
          "Rate Limiting and Quotas",
          "Idempotency Keys",
          "Webhooks",
          "OpenAPI Documentation",
          "API Deprecation",
          "Backward Compatibility"
        ]
      },
      {
        id: "auth-security",
        title: "Authentication and Security",
        topics: [
          "Authentication vs Authorization",
          "Password Hashing",
          "Sessions",
          "JWT",
          "OAuth 2.0",
          "OpenID Connect",
          "Role-Based Access Control",
          "Attribute-Based Access Control",
          "API Keys",
          "CSRF",
          "XSS",
          "SQL Injection",
          "SSRF",
          "Input Validation",
          "Secrets Management",
          "HTTPS and TLS",
          "Security Headers",
          "Least Privilege",
          "Audit Logging"
        ]
      },
      {
        id: "databases",
        title: "Databases and Persistence",
        topics: [
          "SQL vs NoSQL",
          "Relational Modeling",
          "Indexing",
          "Transactions and ACID",
          "ORM vs Query Builder",
          "Connection Pooling",
          "Migrations",
          "N+1 Queries",
          "Read Replicas",
          "Sharding",
          "Replication",
          "CAP Theorem",
          "Consistency Models",
          "Backups and Retention",
          "Choosing a Database"
        ]
      },
      {
        id: "caching",
        title: "Caching",
        topics: [
          "Cache-Aside",
          "Read-Through and Write-Through",
          "Write-Behind",
          "TTL and Eviction",
          "Cache Invalidation",
          "Redis Basics",
          "CDN Caching",
          "HTTP Caching",
          "Cache Stampede",
          "Cache Key Design",
          "Hot Keys",
          "Local vs Distributed Cache"
        ]
      },
      {
        id: "async-jobs",
        title: "Async and Background Jobs",
        topics: [
          "Synchronous vs Asynchronous",
          "Event Loop Basics",
          "Promises and Async/Await",
          "Concurrency vs Parallelism",
          "Thread Pools",
          "Background Jobs",
          "Job Queues",
          "Scheduling and Cron",
          "Retries with Backoff",
          "Dead Letter Queues",
          "Idempotent Job Processing",
          "Graceful Shutdown"
        ]
      },
      {
        id: "messaging",
        title: "Messaging and Events",
        topics: [
          "Message Queues",
          "Publish-Subscribe",
          "Event-Driven Architecture",
          "Kafka Basics",
          "Delivery Semantics",
          "Ordering Guarantees",
          "Consumer Groups",
          "Outbox Pattern",
          "Saga Pattern",
          "Event Sourcing Introduction",
          "Event Schema Evolution"
        ]
      },
      {
        id: "system-design",
        title: "System Design",
        topics: [
          "Requirements Clarification",
          "Capacity Estimation",
          "Load Balancing",
          "Horizontal vs Vertical Scaling",
          "Stateless Services",
          "Database Choice",
          "Caching Layers",
          "CDN",
          "Rate Limiter Design",
          "URL Shortener",
          "Chat Application",
          "News Feed",
          "File Upload Service",
          "Notification Service",
          "Unique ID Generation",
          "Consistency and Availability Trade-offs"
        ]
      },
      {
        id: "reliability",
        title: "Reliability and Scalability",
        topics: [
          "High Availability",
          "Fault Tolerance",
          "Redundancy",
          "Health Checks",
          "Circuit Breakers",
          "Timeouts",
          "Retries",
          "Bulkheads",
          "Backpressure",
          "Graceful Degradation",
          "Disaster Recovery",
          "Multi-Region Deployment",
          "Blue-Green Deployments",
          "Canary Releases"
        ]
      },
      {
        id: "observability",
        title: "Observability",
        topics: [
          "Logging",
          "Structured Logs",
          "Log Levels",
          "Metrics",
          "Counters, Gauges and Histograms",
          "Distributed Tracing",
          "Correlation IDs",
          "Error Tracking",
          "Alerting",
          "SLI, SLO and SLA",
          "Dashboards",
          "Profiling",
          "On-Call Runbooks"
        ]
      },
      {
        id: "testing",
        title: "Testing",
        topics: [
          "Unit Testing",
          "Integration Testing",
          "End-to-End Testing",
          "Contract Testing",
          "Test Pyramid",
          "Test Doubles and Mocks",
          "Fixtures and Factories",
          "Database Test Isolation",
          "Testing Async Code",
          "Load Testing",
          "Security Testing",
          "CI Test Gates"
        ]
      },
      {
        id: "node-express",
        title: "Node.js and Express",
        topics: [
          "Node.js Runtime",
          "Event Loop and Non-Blocking I/O",
          "npm and package.json",
          "CommonJS vs ES Modules",
          "Express Routing",
          "Middleware",
          "Error-Handling Middleware",
          "Request Validation",
          "Environment Configuration",
          "Logging Middleware",
          "Authentication Middleware",
          "Rate Limiting Middleware",
          "File Uploads",
          "Cluster and Worker Threads"
        ]
      },
      {
        id: "devops-deployment",
        title: "DevOps and Deployment",
        topics: [
          "Git Workflows",
          "Build and Artifact Management",
          "Docker Basics",
          "Docker Compose",
          "Container Images and Registries",
          "CI/CD Pipelines",
          "Infrastructure as Code",
          "Reverse Proxy and Nginx",
          "Process Managers",
          "Environment Promotion",
          "Secrets in CI",
          "Rollbacks",
          "Zero-Downtime Deployments",
          "Cloud Basics",
          "Cost Awareness"
        ]
      },
      {
        id: "architecture-patterns",
        title: "Architecture Patterns",
        topics: [
          "Monolith",
          "Modular Monolith",
          "Microservices",
          "Service Boundaries",
          "API Gateway",
          "Backend for Frontend",
          "Strangler Fig Pattern",
          "Shared Database Anti-pattern",
          "Synchronous vs Asynchronous Communication",
          "CQRS Introduction",
          "Domain-Driven Design Basics",
          "Hexagonal Architecture",
          "Layered Architecture",
          "Trade-off Analysis"
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
          "Document Structure",
          "Metadata and Head",
          "Headings and Paragraphs",
          "Links",
          "Images and Alt Text",
          "Lists",
          "Tables",
          "Forms and Inputs",
          "Labels and Fieldsets",
          "Buttons vs Links",
          "Audio and Video",
          "Iframes",
          "HTML Entities",
          "HTML Validation"
        ]
      },
      {
        id: "accessibility",
        title: "Semantic HTML and Accessibility",
        topics: [
          "Semantic Elements",
          "Landmark Regions",
          "Heading Hierarchy",
          "ARIA Basics",
          "ARIA Roles, States and Properties",
          "Keyboard Navigation",
          "Focus Management",
          "Color Contrast",
          "Screen Reader Basics",
          "Accessible Forms",
          "Accessible Modals",
          "Live Regions",
          "Reduced Motion",
          "Accessibility Testing"
        ]
      },
      {
        id: "css-fundamentals",
        title: "CSS Fundamentals",
        topics: [
          "Selectors",
          "Specificity",
          "Cascade and Inheritance",
          "Box Model",
          "Units (px, rem, em, %)",
          "Colors and Alpha",
          "Typography",
          "Pseudo-classes",
          "Pseudo-elements",
          "Custom Properties",
          "Shorthand Properties",
          "DevTools Debugging",
          "CSS Architecture"
        ]
      },
      {
        id: "layout",
        title: "Layout",
        topics: [
          "Display Types",
          "Normal Flow",
          "Positioning",
          "Stacking Context and z-index",
          "Flexbox Basics",
          "Flex Direction and Wrapping",
          "Flex Alignment",
          "Flex Grow, Shrink and Basis",
          "CSS Grid Basics",
          "Grid Template Areas",
          "Grid Auto Placement",
          "Gap and Alignment",
          "Overflow and Aspect Ratio",
          "Container Queries Introduction"
        ]
      },
      {
        id: "responsive-design",
        title: "Responsive Design",
        topics: [
          "Mobile-First Design",
          "Media Queries",
          "Breakpoints",
          "Fluid Layouts",
          "Responsive Images",
          "srcset and sizes",
          "Viewport Meta Tag",
          "Relative Units",
          "clamp() and min()/max()",
          "Touch Targets",
          "Responsive Typography",
          "Testing on Devices"
        ]
      },
      {
        id: "javascript-fundamentals",
        title: "JavaScript Fundamentals",
        topics: [
          "Variables and Scope",
          "Data Types",
          "Type Coercion",
          "== vs ===",
          "Operators",
          "Conditionals",
          "Loops",
          "Functions",
          "Arrow Functions",
          "Closures",
          "Hoisting",
          "this Binding",
          "Objects and Prototypes",
          "Array Methods",
          "Map and Set",
          "Destructuring",
          "Spread and Rest",
          "Template Literals",
          "Modules (import/export)",
          "Error Handling",
          "JSON",
          "Dates",
          "Regular Expressions",
          "Immutability Basics"
        ]
      },
      {
        id: "dom-events",
        title: "DOM and Events",
        topics: [
          "DOM Tree",
          "Selecting Elements",
          "Traversing the DOM",
          "Creating and Removing Elements",
          "Modifying Content and Attributes",
          "classList and Inline Styles",
          "Event Listeners",
          "Event Bubbling and Capturing",
          "Event Delegation",
          "preventDefault and stopPropagation",
          "Forms and FormData",
          "Custom Events",
          "MutationObserver",
          "IntersectionObserver"
        ]
      },
      {
        id: "async-javascript",
        title: "Async JavaScript",
        topics: [
          "Call Stack",
          "Event Loop",
          "Task Queue vs Microtask Queue",
          "Callbacks",
          "Promises and Chaining",
          "async/await",
          "Async Error Handling",
          "Promise.all and allSettled",
          "Promise.race and any",
          "AbortController",
          "Fetch API",
          "Timeouts and Retries",
          "Debouncing",
          "Throttling",
          "Concurrency Control",
          "Web Workers"
        ]
      },
      {
        id: "browser-apis",
        title: "Browser APIs and Storage",
        topics: [
          "localStorage",
          "sessionStorage",
          "Cookies",
          "IndexedDB",
          "Cache API",
          "History API",
          "Clipboard API",
          "Geolocation",
          "Notifications",
          "File API",
          "Drag and Drop",
          "Same-Origin Policy",
          "CORS in the Browser",
          "Content Security Policy"
        ]
      },
      {
        id: "typescript",
        title: "TypeScript",
        topics: [
          "TypeScript Setup",
          "Basic Types",
          "Type Inference",
          "Interfaces vs Type Aliases",
          "Unions and Intersections",
          "Narrowing",
          "Generics",
          "Utility Types",
          "Literal Unions and Enums",
          "Type Assertions",
          "Strict Mode",
          "Typing DOM Events",
          "Typing API Responses"
        ]
      },
      {
        id: "react",
        title: "React Fundamentals",
        topics: [
          "Components and JSX",
          "Props",
          "State",
          "Rendering and Reconciliation",
          "Lists and Keys",
          "Event Handling",
          "Controlled Inputs",
          "useEffect",
          "Dependency Arrays",
          "Lifting State Up",
          "Context",
          "Reducers",
          "React.memo, useMemo and useCallback",
          "Custom Hooks",
          "Error Boundaries",
          "React Router Basics",
          "Data Fetching Patterns",
          "Accessibility in React"
        ]
      },
      {
        id: "state-management",
        title: "State Management",
        topics: [
          "Local vs Global State",
          "Prop Drilling",
          "Context API",
          "Reducers",
          "Zustand Basics",
          "Redux Fundamentals",
          "Redux Toolkit",
          "Server State vs Client State",
          "TanStack Query Basics",
          "Optimistic Updates",
          "URL as State",
          "Form State"
        ]
      },
      {
        id: "performance",
        title: "Frontend Performance",
        topics: [
          "Core Web Vitals",
          "Largest Contentful Paint",
          "Cumulative Layout Shift",
          "Interaction to Next Paint",
          "Critical Rendering Path",
          "Render-Blocking Resources",
          "Code Splitting",
          "Lazy Loading",
          "Tree Shaking",
          "Bundle Analysis",
          "Image Optimization",
          "Font Loading",
          "Preload, Prefetch and Preconnect",
          "Browser Caching",
          "Compression and Minification",
          "Reflow and DOM Size",
          "Performance Profiling",
          "Memory Leaks"
        ]
      },
      {
        id: "testing",
        title: "Testing",
        topics: [
          "Unit Testing Basics",
          "Testing Library",
          "Component Testing",
          "Integration Testing",
          "End-to-End Testing",
          "Mocking APIs",
          "Arrange, Act, Assert",
          "Async Testing",
          "Snapshot Testing",
          "Accessibility Testing",
          "Visual Regression Testing",
          "Coverage vs Confidence",
          "Flaky Tests"
        ]
      },
      {
        id: "tooling",
        title: "Tooling and Workflow",
        topics: [
          "Node.js and npm",
          "package.json",
          "Semantic Versioning",
          "npm Scripts",
          "Vite Basics",
          "Bundlers Overview",
          "ESLint",
          "Prettier",
          "Git Basics",
          "Branching and Merging",
          "Pull Requests and Code Review",
          "Conventional Commits",
          "Environment Variables",
          "Source Maps",
          "Browser Support and Polyfills",
          "Monorepo Basics"
        ]
      },
      {
        id: "web-security",
        title: "Web Security",
        topics: [
          "XSS",
          "CSRF",
          "Clickjacking",
          "Content Security Policy",
          "Same-Origin Policy",
          "CORS",
          "Sanitizing User Input",
          "Safe HTML Rendering",
          "Secure Cookies",
          "Third-Party Script Risks",
          "Dependency Auditing",
          "Security Headers",
          "OWASP Top 10 Basics"
        ]
      },
      {
        id: "design-ux",
        title: "Design and UX",
        topics: [
          "Design System Basics",
          "Typography Scale",
          "Spacing Scale",
          "Color Systems",
          "Dark Mode",
          "Visual Hierarchy",
          "Interaction States",
          "Loading States",
          "Empty States",
          "Error States",
          "Microcopy",
          "Usability Heuristics",
          "Responsive Patterns"
        ]
      }
    ]
  }
};
