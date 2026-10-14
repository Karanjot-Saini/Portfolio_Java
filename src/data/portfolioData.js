/**
 * Central Configuration File for Portfolio
 * All personal information, links, projects, and skills are managed here.
 * Any fields that you need to customize later are clearly commented with [UPDATE_REQUIRED].
 */

export const personalInfo = {
  name: "Karanjot Singh",
  title: "Java Backend Developer",
  subtitle: "Building resilient REST APIs, scalable Spring Boot microservices, and high-performance data layers.",
  tagline: "1.5 Years IT Experience | Enterprise Support to Backend Engineering",
  location: "Pune, India", // [UPDATE_REQUIRED]: e.g., "Mohali / Chandigarh, India" or "Remote / Hybrid"
  email: "ksinghsaini5@gmail.com", // [UPDATE_REQUIRED]: Replace with your real contact email
  phone: "+91-7087693757", // [UPDATE_REQUIRED]: Optional phone number
  status: "Actively seeking Java Backend Developer opportunities",
  availability: "Available for Immediate / Standard Notice",

  // Social & Professional Profiles
  // [UPDATE_REQUIRED]: Update these URLs with your real profiles
  links: {
    github: "https://github.com/Karanjot-Saini", // [UPDATE_REQUIRED]: Replace with your GitHub URL
    linkedin: "https://www.linkedin.com/in/karanjot-singh-78bb8121a/?isSelfProfile=true", // [UPDATE_REQUIRED]: Replace with your LinkedIn URL
    resume: "/Karanjot_Singh_Resume.pdf", // Served from public/ directory
  },

  // Key stats highlights
  stats: [
    { label: "IT Experience", value: "1.5+ Yrs", detail: "Enterprise Production Systems" },
    { label: "Core Focus", value: "Java 21", detail: "Spring Boot & RESTful APIs" },
    { label: "Enterprise Support", value: "99.9%", detail: "SLA Adherence & Incident Resolution" },
    { label: "Database Management", value: "MySQL / Postgres", detail: "ACID & JPA/Hibernate Optimization" },
  ],
};

export const aboutData = {
  headline: "From Enterprise Production Stability to Robust Backend Architecture",
  paragraphs: [
    "I am an IT professional with 1.5 years of industry experience at Tech Mahindra, where I specialize in enterprise application troubleshooting, SAP BusinessObjects support, server administration, and production incident resolution.",
    "Handling high-priority production incidents and maintaining enterprise uptime taught me what truly matters in production systems: clean architecture, graceful failure handling, deterministic database transactions, and zero-defect deployments. This practical operations background fuels my journey into Java backend development.",
    "Driven by a passion for backend engineering, I design and build modern backend systems using Java 21, Spring Boot, Spring Security (JWT), Hibernate/Spring Data JPA, and relational databases (MySQL & PostgreSQL). My goal is to write clean, maintainable, and high-throughput server-side applications that solve real-world problems."
  ],
  highlights: [
    {
      title: "Root Cause & Incident Analysis",
      description: "Proven track record of diagnosing deep-rooted application glitches, logs, and server bottlenecks under tight enterprise SLAs."
    },
    {
      title: "Secure & Resilient API Design",
      description: "Hands-on implementation of stateless JWT authentication, refresh token rotations, role-based authorization, and standardized exception handling."
    },
    {
      title: "Database Integrity & JPA Tuning",
      description: "Designing normalized relational schemas with Hibernate/Spring Data JPA, handling indexing, cascading, and transactional consistency."
    },
    {
      title: "Production-First Mindset",
      description: "Bridging the gap between software development and production reality through logging, Docker containerization, and API documentation."
    }
  ]
};

export const skillsCategories = [
  {
    id: "backend",
    name: "Backend Development",
    icon: "Server",
    description: "Core server-side engineering, OOP, and frameworks",
    skills: [
      { name: "Java 21", level: "Advanced", core: true, tags: ["Records", "Streams", "Pattern Matching"] },
      { name: "Spring Boot 3", level: "Advanced", core: true, tags: ["IoC", "AOP", "Actuator"] },
      { name: "RESTful APIs", level: "Advanced", core: true, tags: ["Clean Architecture", "HATEOAS"] },
      { name: "Spring Security", level: "Proficient", core: true, tags: ["RBAC", "Filter Chains"] },
      { name: "JWT Auth", level: "Proficient", core: true, tags: ["Access & Refresh Tokens"] },
      { name: "Hibernate / ORM", level: "Proficient", core: true, tags: ["Entity Mappings", "Caching"] },
      { name: "Spring Data JPA", level: "Proficient", core: true, tags: ["JPQL", "Paging & Sorting"] },
      { name: "Swagger / OpenAPI", level: "Proficient", core: false, tags: ["API Contracts", "Documentation"] },
    ],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    icon: "Database",
    description: "Relational modeling, indexing, and query integrity",
    skills: [
      { name: "MySQL", level: "Proficient", core: true, tags: ["DDL/DML", "Foreign Keys", "Transactions"] },
      { name: "PostgreSQL", level: "Intermediate", core: true, tags: ["Schema Design", "ACID Compliance"] },
      { name: "SQL Query Tuning", level: "Proficient", core: false, tags: ["Joins", "Aggregation", "Indexes"] },
    ],
  },
  {
    id: "tools-devops",
    name: "DevOps & Build Tools",
    icon: "Cpu",
    description: "Build automation, containerization, and version control",
    skills: [
      { name: "Git & GitHub", level: "Proficient", core: true, tags: ["Branching", "Pull Requests", "Workflows"] },
      { name: "Apache Maven", level: "Proficient", core: true, tags: ["Multi-module", "POM Dependency Mgmt"] },
      { name: "Docker", level: "Intermediate", core: true, tags: ["Containerization", "Dockerfiles"] },
      { name: "Postman", level: "Proficient", core: false, tags: ["API Testing", "Environment Variables"] },
      { name: "Linux / Bash", level: "Proficient", core: false, tags: ["CLI", "Server Management"] },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Integration",
    icon: "Layout",
    description: "Client-side consumption of backend REST APIs",
    skills: [
      { name: "React", level: "Intermediate", core: true, tags: ["Hooks", "Component Architecture"] },
      { name: "JavaScript (ES6+)", level: "Intermediate", core: true, tags: ["Promises", "Async/Await"] },
      { name: "Axios", level: "Proficient", core: false, tags: ["Interceptors", "Token Refreshing"] },
      { name: "HTML5 & CSS3", level: "Proficient", core: false, tags: ["Responsive Design", "Flex/Grid"] },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise & Production Support",
    icon: "ShieldAlert",
    description: "Real-world operational expertise from Tech Mahindra",
    skills: [
      { name: "SAP BusinessObjects", level: "Advanced", core: true, tags: ["Server Admin", "CMC", "Webi"] },
      { name: "Server Administration", level: "Proficient", core: true, tags: ["Service Health", "Resource Monitoring"] },
      { name: "Incident & Log Analysis", level: "Advanced", core: true, tags: ["Root Cause Analysis", "Stack Traces"] },
      { name: "SLA & Ticket Resolution", level: "Advanced", core: false, tags: ["ITIL Workflow", "Severity 1-4"] },
    ],
  },
];

export const projectsData = [
  {
    id: "grewal-electric-store",
    title: "Grewal Electric Store",
    subtitle: "Full-Stack E-Commerce Platform with Robust Java Backend",
    featured: true,
    category: "Full Stack / Java Backend",
    summary: "An enterprise-grade e-commerce application designed for electrical appliances and hardware supplies, powered by a modular Spring Boot REST API, secure JWT authentication with refresh token rotation, and a responsive React client.",
    problemStatement: "Small-to-medium electrical enterprises struggle with fragmented product management, insecure cart persistence, and brittle checkout APIs. This project solves this with transactional data safety, decoupled client-server architecture, and token-based role authentication.",
    architecture: {
      client: "React 18 SPA with Axios interceptors for automated token refreshing",
      apiGateway: "Spring Security Filter Chain with Stateless Session Management",
      backend: "Java 21, Spring Boot REST controllers, service layer with clean separation of concerns",
      dataAccess: "Spring Data JPA & Hibernate ORM with custom transactional boundaries",
      database: "MySQL relational database with normalized schema (Users, Roles, Products, Carts, Orders)",
    },
    techStack: [
      { name: "Java 21", category: "Backend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "Spring Security", category: "Security" },
      { name: "JWT & Refresh Tokens", category: "Security" },
      { name: "Spring Data JPA", category: "Data" },
      { name: "Hibernate", category: "Data" },
      { name: "MySQL", category: "Database" },
      { name: "React", category: "Frontend" },
      { name: "Axios", category: "Frontend" },
      { name: "Maven", category: "Build Tool" },
    ],
    features: [
      "Custom JWT Authentication with dual-token architecture (short-lived access tokens and database-tracked refresh tokens).",
      "Role-Based Access Control (RBAC) separating customer operations from administrative inventory management.",
      "Transactional Shopping Cart & Checkout engine preventing race conditions and stock discrepancies.",
      "Global Exception Handling with standardized error response envelopes (BadRequestException, ResourceNotFoundException).",
      "Dynamic Product Catalog with categorized filtering, search pagination, and real-time inventory checks.",
      "Responsive React UI connected through Axios with seamless automatic token refresh handling on 401 expiration."
    ],
    codeHighlights: [
      {
        title: "Stateless Security & JWT Filter",
        description: "Intercepts incoming requests, validates bearer tokens, and populates Spring's SecurityContext without server-side HTTP sessions."
      },
      {
        title: "Cart & Order Atomic Transactions",
        description: "Utilizes @Transactional guarantees to ensure atomicity between inventory decrements and order record insertions."
      },
      {
        title: "Centralized Global Error Handler",
        description: "@RestControllerAdvice providing predictable JSON payloads with timestamps, HTTP status codes, and clear client diagnostics."
      }
    ],
    githubUrl: "https://github.com/Karanjot-Saini/grewal-electric-store",
    liveUrl: "", // Add live demo link if deployed, or leave blank to show "Demo on Request"
    demoAvailable: false,
  },
  {
    id: "taskade-task-management",
    title: "Taskade – Task Management Platform",
    subtitle: "Productivity-Focused Task Management System with Spring Boot & MySQL",
    featured: false,
    category: "Full Stack / Java Backend",
    summary: "A productivity-focused task management platform built with Spring Boot and MySQL, featuring user authentication, customizable lists, deadline management with smart reminders, and filtered search for optimal workflow efficiency.",
    architecture: {
      backend: "Spring Boot RESTful service architecture with Controller-Service-Repository pattern",
      security: "User authentication, role-based controls, and secure session handling",
      dataAccess: "Spring Data JPA & Hibernate ORM with relational entity mappings",
      database: "MySQL relational database with indexed queries for fast task retrieval",
    },
    techStack: [
      { name: "Java", category: "Backend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "Spring Data JPA", category: "Data" },
      { name: "Hibernate", category: "Data" },
      { name: "REST APIs", category: "Backend" },
      { name: "Maven", category: "Build Tool" },
    ],
    features: [
      "Developed a productivity-focused task management system with user authentication and secure session handling.",
      "Implemented customizable task lists, allowing users to add, update, categorize, and prioritize tasks efficiently.",
      "Added deadline management and smart reminders to help users track and complete tasks on time.",
      "Integrated task search functionality with multi-criteria filters for quick retrieval, improving user workflow and productivity."
    ],
    githubUrl: "https://github.com/Karanjot-Saini/taskade",
    liveUrl: "",
    demoAvailable: false,
  }
];

export const experienceData = [
  {
    role: "Production Support & Systems Engineer",
    company: "Tech Mahindra",
    location: "India",
    duration: "1.5 Years (Present)",
    badge: "Current Role",
    honestScope: "Enterprise Production Support & Server Administration",
    summary: "Responsible for maintaining 24/7 enterprise application stability, resolving critical incidents, supporting SAP BusinessObjects environments, and conducting root cause analysis under stringent SLAs.",
    responsibilities: [
      {
        title: "Enterprise Application & Server Administration",
        description: "Monitor and manage SAP BusinessObjects enterprise servers, Central Management Console (CMC), server services, and memory/CPU thresholds to maintain 99.9% application availability."
      },
      {
        title: "Incident Analysis & Production Troubleshooting",
        description: "Analyze system logs, error traces, and job failure dumps to triage Severity 1-4 incidents, identifying root causes across web tiers, application servers, and database connectivity."
      },
      {
        title: "Database & Query Diagnostics",
        description: "Investigate database connectivity issues, connection pooling limits, query execution timeouts, and user permission hierarchies."
      },
      {
        title: "Release Deployment & Maintenance Operations",
        description: "Execute scheduled production patch releases, service restarts, server maintenance windows, and disaster recovery validations without business disruption."
      },
      {
        title: "Stakeholder Collaboration & ITIL Compliance",
        description: "Collaborate closely with enterprise cross-functional teams, developers, and infrastructure leads adhering to strict ITIL incident, problem, and change management workflows."
      }
    ],
    keyTakeaway: "Working in enterprise production support gave me deep respect for software resilience, deterministic error handling, and clean logging—principles I apply directly when developing Java backend services."
  }
];

export const contactData = {
  heading: "Let's Connect",
  subheading: "I'm actively seeking opportunities as a Java Backend Developer where I can bring my operational discipline and Spring Boot engineering skills to your team.",
  email: "ksinghsaini5@gmail.com",
  location: "Pune, India (Open to Relocation / Remote)",
  linkedin: "https://www.linkedin.com/in/karanjot-singh-78bb8121a/?isSelfProfile=true",
  github: "https://github.com/Karanjot-Saini",
  resumePath: "/Karanjot_Singh_Resume.pdf"
};
