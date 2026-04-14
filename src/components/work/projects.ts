export interface IProject {
  title: string;
  description?: string;
  role?: string;
  year?: string;
  type?: string;
  bgColor?: string;
  product?: string[];
  image?: string;
  industry?: string;
  mobileImages?: string[];
  service?: string[];

  meta?: {
    tech?: string[];
    links?: {
      website?: string;
      android?: string;
      ios?: string;
      github?: string;
    };
  };

  sections?: {
    problem?: {
      heading?: string;
      content?: string;
    };

    solution?: {
      heading?: string;
      content?: string;
    };

    role?: {
      heading?: string;
      content?: string;
    };

    features?: {
      heading?: string;
      items?: string[];
    };

    techStack?: {
      heading?: string;
      frontend?: string[];
      backend?: string[];
      database?: string[];
      other?: string[];
    };

    impact?: {
      heading?: string;
      items?: string[];
    };

    challenges?: {
      heading?: string;
      content?: string;
    };

    cta?: {
      heading?: string;
      content?: string;
      button?: string;
    };
  };
}

export interface IArchiveProject {
  title: string;
  role?: string;
  year?: string;
  type?: string;
  industry?: string;
  meta?: {
    links?: {
      website?: string;
      android?: string;
      ios?: string;
      github?: string;
    };
  };
}

export const archiveProject: IArchiveProject[] = [
  {
    title: "Cloy",
    role: "Design & Code",
    year: "2025",
    type: "Ecommerce",
    industry: "Clothing",
    meta: { links: { website: "https://cloy.co.in" } },
  },
  {
    title: "DigiDeck",
    role: "Design & Code",
    year: "2025",
    type: "Website",
    industry: "Politics",
    meta: { links: { website: "https://digideck.in" } },
  },
];

export const projects: IProject[] = [
  {
    title: "Moovato",
    description:
      "AI-powered logistics platform for optimizing delivery operations, routing, and real-time tracking.",
    role: "Design & Code",
    year: "2026",
    type: "Full-stack Development",
    bgColor: "#DCD0C2",
    product: ["CRM", "Backend", "Website"],
    image: "project/moovato.jpg",
    industry: "Logistics",
    service: ["Frontend Development", "Backend Development"],

    meta: {
      tech: [
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "React Native",
        "Next.js",
        "Tailwind CSS",
      ],
      links: {
        website: "https://moovato.de/",
        android: "",
        ios: "",
        github: "",
      },
    },

    sections: {
      problem: {
        heading: "The Problem",
        content:
          "Logistics operations are complex, involving routing, tracking, and fleet management. Many systems struggle with inefficiencies, delays, and lack of real-time visibility.",
      },

      solution: {
        heading: "The Solution",
        content:
          "Built a scalable AI-powered logistics platform that automates workflows, optimizes delivery routes, and provides real-time tracking across systems.",
      },

      role: {
        heading: "My Role",
        content:
          "Worked on full-stack development including CRM system, backend APIs, mobile applications, and web dashboard. Focused on scalable architecture, integration, and performance optimization.",
      },

      features: {
        heading: "Key Features",
        items: [
          "Real-time delivery tracking",
          "AI-based route optimization",
          "CRM system for operations",
          "Cross-platform mobile apps",
          "Web-based admin dashboard",
        ],
      },

      techStack: {
        heading: "Tech Stack",
        frontend: ["Next.js"],
        backend: ["Node.js", "Express", "REST APIs"],
        database: ["MongoDB"],
      },

      impact: {
        heading: "Impact",
        items: [
          "Improved logistics efficiency through automation",
          "Enabled real-time tracking and decision making",
          "Built scalable multi-platform system",
        ],
      },

      challenges: {
        heading: "Challenges & Learnings",
        content:
          "Handling real-time data synchronization and ensuring system scalability for logistics operations required careful backend architecture and optimized API design.",
      },

      cta: {
        heading: "Let’s Build Something Like This",
        content:
          "I build scalable full-stack systems, mobile apps, and AI-powered platforms. Let’s discuss your project.",
        button: "Contact Me",
      },
    },
  },
  {
    title: "Alpha Wund",
    description:
      "A full-stack healthcare platform including CRM, mobile apps, and website for managing patient workflows and services.",
    year: "2026",
    role: "Design & Code",
    type: "Full-stack Web & Mobile Development",
    bgColor: "#7E7E7E",
    product: ["CRM", "Android & iOS app", "Backend"],
    image: "project/alphawund.jpg",
    industry: "Healthcare",
    mobileImages: [
      "project/alpha1.png",
      "project/alpha2.png",
      "project/alpha3.png",
    ],
    service: [
      "Frontend Development",
      "Backend Development",
      "Mobile Development",
    ],

    meta: {
      tech: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Firebase",
        "React Native",
        "Tailwind CSS",
      ],
      links: {
        website: "https://alpha-wundexperten.de",
        android:
          "https://play.google.com/store/apps/details?id=com.Alphawund.Listandsell",
        ios: "",
      },
    },
    sections: {
      problem: {
        heading: "The Problem",
        content:
          "Managing patient workflows, communication, and data across platforms can be complex and inefficient in healthcare systems.",
      },
      solution: {
        heading: "The Solution",
        content:
          "Developed a full-stack platform including CRM, mobile apps, and website to streamline patient management, improve communication, and centralize data handling.",
      },
      role: {
        heading: "My Role",
        content:
          "Built the CRM system, mobile applications for iOS and Android, and the website. Focused on backend architecture, API development, and seamless integration across platforms.",
      },
      features: {
        heading: "Key Features",
        items: [
          "Custom CRM for patient and workflow management",
          "Cross-platform mobile apps (iOS & Android)",
          "Real-time data synchronization",
          "Secure data handling and storage",
          "Responsive web platform",
        ],
      },
      techStack: {
        heading: "Tech Stack",
        frontend: ["Next.js", "React Native"],
        backend: ["Node.js", "Express", "REST APIs"],

        database: ["MongoDB", "Firebase"],
      },
      impact: {
        heading: "Impact",
        items: [
          "Streamlined healthcare workflow management",
          "Improved communication and data accessibility",
          "Built scalable multi-platform system",
        ],
      },
      challenges: {
        heading: "Challenges & Learnings",
        content:
          "Ensuring secure data handling and maintaining synchronization between CRM, mobile apps, and web platform required careful backend design and efficient API structure.",
      },
      cta: {
        heading: "Let’s Build Something Like This",
        content:
          "I build scalable full-stack systems across web and mobile. Let’s discuss your project.",
        button: "Contact Me",
      },
    },
  },
  {
    title: "Flotix",
    description:
      "A full-stack platform with CRM, mobile apps, and website featuring AI-powered scanning functionality.",
    year: "2026",
    role: "Design & Code",
    type: "Full-stack Web & Mobile Development",
    bgColor: "#CCD8C7",
    product: ["CRM", "Android & iOS app", "Backend", "Website"],
    image: "project/flotix.jpg",
    industry: "Transport",
    mobileImages: [
      "project/flotix1.png",
      "project/flotix2.png",
      "project/flotix3.png",
    ],
    service: [
      "Frontend Development",
      "Backend Development",
      "Mobile Development",
    ],

    meta: {
      tech: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Firebase",
        "React Native",
        "Tailwind CSS",
      ],
      links: {
        website: "https://flotix.listandsell.de",
        android:
          "https://play.google.com/store/apps/details?id=com.Flotix.listandsell",
        ios: "",
      },
    },
    sections: {
      problem: {
        heading: "The Problem",
        content:
          "Businesses need efficient systems to manage operations, data, and product workflows, along with intelligent tools for faster processing.",
      },
      solution: {
        heading: "The Solution",
        content:
          "Developed a full-stack platform with CRM, mobile apps, and website, integrating AI-based scanning to automate and enhance data processing within the application.",
      },
      role: {
        heading: "My Role",
        content:
          "Built the CRM, mobile applications for iOS and Android, and the web platform. Integrated AI-based scanning functionality and developed scalable backend systems.",
      },
      features: {
        heading: "Key Features",
        items: [
          "Custom CRM system",
          "Cross-platform mobile apps",
          "AI-powered scanning integration",
          "Real-time data handling",
          "Responsive web platform",
        ],
      },
      techStack: {
        heading: "Tech Stack",
        frontend: ["Next.js", "React Native"],
        backend: ["Node.js", "Express", "REST APIs", "AI integration"],
        database: ["MongoDB", "Firebase"],
      },
      impact: {
        heading: "Impact",
        items: [
          "Automated workflows using AI scanning",
          "Improved efficiency in data processing",
          "Built scalable multi-platform system",
        ],
      },
      challenges: {
        heading: "Challenges & Learnings",
        content:
          "Integrating AI-based scanning into a real-time system required handling asynchronous processing, optimizing performance, and ensuring accurate data extraction.",
      },
      cta: {
        heading: "Let’s Build Something Like This",
        content:
          "I build scalable systems with modern technologies and AI integrations. Let’s work together.",
        button: "Contact Me",
      },
    },
  },
];

// export const projects: IProject[] = [
//   {
//     name: "Sloop",
//     role: "Design & Code",
//     year: "2025",
//     link: "https://cloy.co.in/",
//     image: "project/cloy.jpg",
//     bgColor: "#DCD0C2",
//     description:
//       "A real-time chat web application allows users to send and receive messages instantly, facilitating live communication between individuals or groups. The application typically features real-time updates without requiring page reloads, achieved through technologies like WebSockets or server-sent events.",
//     technologies:
//       "Node.js / React.js / Typescript / Tailwind / Axios / AWS / Razorpay / GoDaddy",
//     purpose:
//       "Building a real-time chat application taught me a variety of valuable technical skills, such as implementing WebSockets for instant messaging, creating a scalable back-end and handling state management in a responsive front-end with NextJS. I also gained hands-on experience with database management, user authentication, and performance optimization to ensure a smooth user experience. Beyond technical abilities, I learned the importance of user-centered design, debugging real-time systems, and managing a project end-to-end, from planning and development to deployment and ongoing maintenance.",
//     type: "E-commerce Website",
//     product: "Android & IOS App",
//   },
//   {
//     name: "Moovato",
//     role: "Design & Code",
//     year: "2026",
//     link: "https://moovato.de",
//     image: "project/moovato.jpg",
//     bgColor: "#DCD0C2",
//     description:
//       "Moovato is an international logistics and shopping facilitation platform that enables users to purchase products from global online stores and have them delivered seamlessly to their location. The platform combines smart logistics, technology-driven tracking, and personalized services to simplify cross-border shopping.",
//     technologies: "Node.js / Next.js / Typescript / Tailwind / MongoDB",
//     purpose:
//       "Building a real-time chat application taught me a variety of valuable technical skills, such as implementing WebSockets for instant messaging, creating a scalable back-end and handling state management in a responsive front-end with NextJS. I also gained hands-on experience with database management, user authentication, and performance optimization to ensure a smooth user experience. Beyond technical abilities, I learned the importance of user-centered design, debugging real-time systems, and managing a project end-to-end, from planning and development to deployment and ongoing maintenance.",
//     problem : "Logistics operations involve complex routing, tracking, and fleet management. Many systems struggle with inefficiencies, delays, and lack of real-time visibility.",
//     solution: 'Built a scalable system that automates logistics workflows, optimizes delivery routes, and provides real-time tracking through efficient backend services.',
//     myrole:"Developed backend systems and APIs to support real-time logistics operations. Focused on building scalable architecture, handling data efficiently, and ensuring reliable performance.",
//     type: "Full-stack",
//     product: "CRM / Backend",
//   },
//   {
//     name: "Flotix",
//     role: "Design & Code",
//     year: "2025",
//     link: "https://cloy.co.in/",
//     image: "project/flotix.jpg",
//     bgColor: "#CCD8C7",
//     description:
//       "A real-time chat web application allows users to send and receive messages instantly, facilitating live communication between individuals or groups. The application typically features real-time updates without requiring page reloads, achieved through technologies like WebSockets or server-sent events.",
//     technologies:
//       "Node.js / React.js / Typescript / Tailwind / Axios / AWS / Razorpay / GoDaddy",
//     purpose:
//       "Building a real-time chat application taught me a variety of valuable technical skills, such as implementing WebSockets for instant messaging, creating a scalable back-end and handling state management in a responsive front-end with NextJS. I also gained hands-on experience with database management, user authentication, and performance optimization to ensure a smooth user experience. Beyond technical abilities, I learned the importance of user-centered design, debugging real-time systems, and managing a project end-to-end, from planning and development to deployment and ongoing maintenance.",
//     type: "E-commerce Website",
//     product: "CRM / Backend / Android & IOS App",
//   },
//   {
//     name: "Alphawund",
//     role: "Design & Code",
//     year: "2025",
//     link: "https://cloy.co.in/",
//     image: "project/alphawund.jpg",
//     bgColor: "#7E7E7E",
//     description:
//       "A real-time chat web application allows users to send and receive messages instantly, facilitating live communication between individuals or groups. The application typically features real-time updates without requiring page reloads, achieved through technologies like WebSockets or server-sent events.",
//     technologies:
//       "Node.js / React.js / Typescript / Tailwind / Axios / AWS / Razorpay / GoDaddy",
//     purpose:
//       "Building a real-time chat application taught me a variety of valuable technical skills, such as implementing WebSockets for instant messaging, creating a scalable back-end and handling state management in a responsive front-end with NextJS. I also gained hands-on experience with database management, user authentication, and performance optimization to ensure a smooth user experience. Beyond technical abilities, I learned the importance of user-centered design, debugging real-time systems, and managing a project end-to-end, from planning and development to deployment and ongoing maintenance.",
//     type: "E-commerce Website",
//     product: "CRM / Backend / Android & IOS App",
//   },
//   {
//     name: "Cloy",
//     role: "Design & Code",
//     year: "2025",
//     link: "https://cloy.co.in/",
//     image: "project/cloy.jpg",
//     bgColor: "#ffde59",
//     description:
//       "A real-time chat web application allows users to send and receive messages instantly, facilitating live communication between individuals or groups. The application typically features real-time updates without requiring page reloads, achieved through technologies like WebSockets or server-sent events.",
//     technologies:
//       "Node.js / React.js / Typescript / Tailwind / Axios / AWS / Razorpay / GoDaddy",
//     purpose:
//       "Building a real-time chat application taught me a variety of valuable technical skills, such as implementing WebSockets for instant messaging, creating a scalable back-end and handling state management in a responsive front-end with NextJS. I also gained hands-on experience with database management, user authentication, and performance optimization to ensure a smooth user experience. Beyond technical abilities, I learned the importance of user-centered design, debugging real-time systems, and managing a project end-to-end, from planning and development to deployment and ongoing maintenance.",
//     type: "E-commerce Website",
//     product: "Website / CRM / Backend ",
//   },
//   {
//     name: "DigiDeck",
//     role: "Design & Code",
//     year: "2025",
//     link: "https://digideck.in/",
//     image: "project/digideck.jpg",
//     bgColor: "#545454",
//     description:
//       "A real-time chat web application allows users to send and receive messages instantly, facilitating live communication between individuals or groups. The application typically features real-time updates without requiring page reloads, achieved through technologies like WebSockets or server-sent events.",
//     technologies: "React.js / Typescript / Tailwind / PHP / Axios / Hostgator",
//     purpose:
//       "Building a real-time chat application taught me a variety of valuable technical skills, such as implementing WebSockets for instant messaging, creating a scalable back-end and handling state management in a responsive front-end with NextJS. I also gained hands-on experience with database management, user authentication, and performance optimization to ensure a smooth user experience. Beyond technical abilities, I learned the importance of user-centered design, debugging real-time systems, and managing a project end-to-end, from planning and development to deployment and ongoing maintenance.",
//     type: "Website",
//     product: "Website",
//   },
// ];
