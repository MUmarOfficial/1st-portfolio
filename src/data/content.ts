export const personalInfo = {
  name: "Muhammad Umar",
  age: 18,
  profession: "Frontend Developer",
  intro: `I'm a Front End Developer specialized in React, TypeScript, and Tailwind CSS, with a strong focus on automated testing and code quality. My approach emphasizes building fast, reliable, and sharp-looking interfaces that handle real-world demands. I prioritize longevity in design and use automated workflows to ensure faults are caught early and deployments are seamless.`,
  aboutIntro: `I'm Muhammad Umar — an 18-year-old college student currently pursuing ICS at KIPS Education System, and a self-driven Front-End Developer. I specialize in React, TypeScript, and Tailwind CSS to build fast, reliable, and sharp-looking interfaces. At just 18, I've already shipped production apps, written automated test suites, and set up CI/CD pipelines. I thrive on solving real-world problems through clean architecture and modern tooling — and I'm just getting started.`,
};

export const contactDetails = {
  name: "Muhammad Umar",
  location: "Gujranwala, Punjab, Pakistan",
  phone: "03448442657",
  email: "muhammad.umar.official0307@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammadumarofficial/",
  github: "https://github.com/MUmarOfficial/",
  whatsapp: "https://wa.me/923448442657",
};

export const techStack = [
  {
    category: "Languages & Core",
    tools: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend & UI",
    tools: [
      "React",
      "Tailwind CSS",
      "Shadcn/UI",
      "DaisyUI",
      "MUI",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    category: "State & Logic",
    tools: ["Redux", "Context API", "React Router", "React Hook Form"],
  },
  {
    category: "Testing Suite",
    tools: ["Playwright", "Vitest", "Testing Library"],
  },
  {
    category: "DevOps & Tools",
    tools: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Vercel",
      "Netlify",
      "Cloudflare",
      "sonarqube",
      "Ubuntu",
      "Linux",
    ],
  },
  {
    category: "Code Quality/DX",
    tools: ["Prettier", "eslint"],
  },
  {
    category: "AI SDKs",
    tools: ["Groq", "Google GenAI", "Anthropic", "OpenAI", "xAI"],
  },
  {
    category: "Design & Build",
    tools: ["Vite", "NPM", "Figma", "Canva"],
  },
];

export const projects = [
  {
    title: "React AI Chatbot",
    tagline:
      "A privacy-first AI chatbot with multi-model support and optimized local storage.",
    description:
      "A powerful and responsive AI chatbot focused on performance and user privacy. It features multi-model support, lz-string compression for optimized local storage, and a privacy-first data consent modal.",
    highlights: [
      "Multi-model AI support with Groq, OpenAI, Anthropic, Google GenAI, and xAI",
      "LZ-string compression for efficient local storage management",
      "Privacy-first architecture with data consent modal",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS (v4)",
      "Framer Motion",
      "AI SDKs (Groq, Google GenAI, Anthropic, OpenAI, xAI)",
    ],
    testingTools: ["Vitest", "React Testing Library", "Playwright"],
    repo: "https://github.com/MUmarOfficial/react-ai-chatbot",
    live: "https://www.reactaichatbot.live",
    image: "/assets/react-ai-chatbot.png",
    accent: "#5227FF",
  },
  {
    title: "Pizza Lab",
    tagline:
      "A feature-rich pizza ordering app with advanced state management and real-time credit card visualization.",
    description:
      "A comprehensive pizza ordering application designed to master advanced frontend concepts like complex state management and responsive design. It includes interactive menu browsing, persistent cart data, a custom credit card form with real-time visualization, and developer tools for mock data injection.",
    highlights: [
      "Interactive menu browsing with persistent cart via Redux Persist",
      "Custom credit card form with real-time card visualization",
      "Developer tools for mock data injection and testing",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Redux Toolkit",
      "Redux Persist",
      "Tailwind CSS 4",
      "DaisyUI 5",
      "Framer Motion",
      "React Router 7",
    ],
    testingTools: ["Playwright"],
    repo: "https://github.com/MUmarOfficial/pizza-lab",
    live: "https://pizza-lab-now.vercel.app/",
    image: "/assets/pizza-lab.png",
    accent: "#e05a2b",
  },
  {
    title: "Ruha Water",
    tagline:
      "A premium mineral water brand website with glassmorphism aesthetics and interactive data tables.",
    description:
      "A high-performance web application for a premium mineral water brand that showcases a 7-step filtration process and provides transparent lab analysis. The site features modern aesthetics with glassmorphism, interactive data tables, and a mobile-optimized product showcase.",
    highlights: [
      "7-step filtration process showcase with interactive visuals",
      "Glassmorphism design with transparent lab analysis data tables",
      "Mobile-optimized product showcase with EmailJS contact form",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS v4",
      "Framer Motion",
      "React Router DOM v7",
      "React Hook Form",
      "EmailJS",
    ],
    repo: "Private",
    live: "https://ruhabeverages.com.pk/",
    image: "/assets/ruha-water.png",
    accent: "#0ea5e9",
  },
];

export const education = [
  {
    degree: "ICS (Computer Science)",
    institution: "KIPS Education System",
    period: "2025 - Present",
    description:
      "Pursuing foundational education in Computer Science with a focus on programming, databases, and problem-solving techniques. Working on academic projects involving HTML, CSS, and JavaScript to develop a strong understanding of front-end development and responsive web design.",
  },
  {
    degree: "Matriculation (Computer Science)",
    institution: "Worker Welfare School (Boys)",
    period: "2023 - 2025",
    grade: "A+",
    description:
      "Completed matriculation with a focus on Computer Science fundamentals. Developed a strong foundation in logical thinking, mathematics, and introductory programming concepts that sparked my passion for web development.",
  },
];

export const certifications = [
  {
    title: "ReactJS Course",
    link: "https://www.udemy.com/certificate/UC-2ec548c3-07ca-402d-8581-75d429b8e52c/",
  },
];

export const services = [
  {
    title: "Website Design",
    description:
      "Custom, responsive web designs that reflect your brand identity and engage users.",
    keyFeatures: [
      "Custom UI/UX design",
      "Mobile-first responsive layouts",
      "Brand identity integration",
    ],
    iconName: "LayoutDashboard",
    gradient: "from-[#5227FF] to-[#7c3aed]",
  },
  {
    title: "Frontend Development",
    description:
      "Modern frontend development using React and TypeScript for scalable, high-performance experiences.",
    keyFeatures: [
      "React & TypeScript development",
      "Component-based architecture",
      "Performance optimization",
    ],
    iconName: "Code",
    gradient: "from-[#7c3aed] to-[#a78bfa]",
  },
  {
    title: "Bug & Issue Fixing",
    description:
      "Fix broken layouts, errors, or frontend bugs quickly and professionally.",
    keyFeatures: [
      "Layout & styling fixes",
      "JavaScript error debugging",
      "Cross-browser compatibility",
    ],
    iconName: "Bug",
    gradient: "from-[#a78bfa] to-[#c084fc]",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, and improvements for long-term stability.",
    keyFeatures: [
      "Regular updates & patches",
      "Performance monitoring",
      "Dependency upgrades & code cleanup",
    ],
    iconName: "Wrench",
    gradient: "from-[#c084fc] to-[#e879f9]",
  },
];

export const howIWorkSteps = [
  {
    id: 1,
    title: "Discovery",
    iconName: "Search",
    description:
      "Understanding your needs and goals through consultation and research.",
    details: [
      "Initial consultation",
      "Project requirements analysis",
      "Market research",
      "Competitor analysis",
      "Goal setting",
    ],
    color: "from-[#5227FF] to-[#7c3aed]",
  },
  {
    id: 2,
    title: "Planning",
    iconName: "ClipboardList",
    description:
      "Creating a detailed roadmap and strategy for your project.",
    details: [
      "Project scope definition",
      "Timeline creation",
      "Resource allocation",
      "Technology selection",
      "Risk assessment",
    ],
    color: "from-[#7c3aed] to-[#a78bfa]",
  },
  {
    id: 3,
    title: "Design",
    iconName: "Layers",
    description:
      "Crafting visually stunning and user-friendly interfaces.",
    details: [
      "Wireframing",
      "UI/UX design",
      "Prototype development",
      "Client feedback integration",
      "Design finalization",
    ],
    color: "from-[#a78bfa] to-[#c084fc]",
  },
  {
    id: 4,
    title: "Development",
    iconName: "Code",
    description:
      "Building robust and scalable solutions with modern technologies.",
    details: [
      "React & TypeScript development",
      "Component-based architecture",
      "State management setup",
      "Automated testing integration",
      "Performance optimization",
    ],
    color: "from-[#c084fc] to-[#e879f9]",
  },
  {
    id: 5,
    title: "Testing",
    iconName: "FlaskConical",
    description:
      "Ensuring functionality, performance, and compatibility across devices.",
    details: [
      "Functionality testing",
      "Performance optimization",
      "Cross-browser testing",
      "Responsive design testing",
      "User acceptance testing",
    ],
    color: "from-[#5227FF] to-[#06b6d4]",
  },
  {
    id: 6,
    title: "Launch",
    iconName: "Rocket",
    description:
      "Deploying your project with a smooth transition to the live environment.",
    details: [
      "Final review",
      "Deployment preparation",
      "Go-live execution",
      "Post-launch monitoring",
      "Client training",
    ],
    color: "from-[#06b6d4] to-[#5227FF]",
  },
];
