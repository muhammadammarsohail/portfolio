/* Personal portfolio content for Ammar Sohail. */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import careemLogo from "./assets/images/careemLogo.png";
import airliftLogo from "./assets/images/airliftLogo.png";
import karatLogo from "./assets/images/karatLogo.png";
import siliconplexLogo from "./assets/images/siliconplexLogo.png";
import karachiUniversityLogo from "./assets/images/karachiUniversityLogo.png";

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 1200
};

const illustration = {animated: true};

const greeting = {
  username: "Ammar Sohail",
  title: "Hi, I'm Ammar",
  subTitle: emoji(
    "Senior Software Engineer with 5+ years of experience building resilient, high-scale systems at Careem and Airlift. I combine strong distributed-systems fundamentals with agentic engineering to ship reliable software faster."
  ),
  resumeLink: "resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/muhammadammarsohail",
  linkedin: "https://www.linkedin.com/in/muhammadammarsohail/",
  gmail: "muhammadammarsohail@gmail.com",
  medium: "https://muhammadammarsohail.medium.com/",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND ENGINEERING, DISTRIBUTED SYSTEMS, AND AI-ASSISTED DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Design resilient, high-throughput APIs and microservices with Java, Spring Boot, TypeScript, and NestJS"
    ),
    emoji(
      "⚡ Operate production systems with Kubernetes, Docker, Kafka, Redis, AWS, and end-to-end observability"
    ),
    emoji(
      "⚡ Apply agentic engineering workflows to accelerate system design, implementation, testing, and documentation"
    )
  ],
  softwareSkills: [
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true
};

const aiEngineeringSection = {
  title: "AI-Augmented Engineering",
  subtitle:
    "USING AGENTIC AI TO IMPROVE SOFTWARE DESIGN, DELIVERY, AND TECHNICAL LEARNING",
  capabilities: [
    {
      icon: "fas fa-drafting-compass",
      title: "Architecture & RFC Generation",
      description:
        "Designed an AI-driven RFC workflow that combines product requirements with codebase context to produce system architecture blueprints and accelerate project kickoffs."
    },
    {
      icon: "fas fa-project-diagram",
      title: "Multi-Repository System Analysis",
      description:
        "Use Cursor and large-context models to index dependent microservices, map cross-service domain knowledge, and accelerate complex technical investigations."
    },
    {
      icon: "fas fa-robot",
      title: "Agentic Software Delivery",
      description:
        "Apply Claude and Gemini with sub-agents, skills, memory, planning, and structured testing workflows to improve engineering velocity by 60%."
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Karachi",
      logo: karachiUniversityLogo,
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2018 - December 2021",
      desc: "Graduated with a CGPA of 3.47 / 4.0.",
      descBullets: [
        "Built Let's Ride, a C# console game demonstrating object-oriented programming principles.",
        "Built Barbelator, a real-time barber shop queue simulation in Python and Google Colab."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Backend & API Engineering", progressPercentage: "92%"},
    {Stack: "Microservices & System Design", progressPercentage: "88%"},
    {Stack: "Production Reliability & Optimization", progressPercentage: "85%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer II",
      company: "Careem",
      companyUrl: "https://www.careem.com/",
      companylogo: careemLogo,
      date: "December 2022 - Present",
      desc: "Karachi, Pakistan (On-site)",
      descBullets: [
        "Migrating the Careem Express API to a new logistics platform, supporting the deprecation of the legacy stack.",
        "Implemented Dynamic Delivery Radius to optimize captain supply during stress situations, protecting up to USD 1M in annual revenue.",
        "Built live captain tracking for Express merchants using ScheduledThreadPoolExecutor, ConcurrentHashMap, and Redis.",
        "Led Kubernetes readiness, API optimization, end-to-end tracing, and acceptance testing initiatives that helped Express achieve zero production incidents for the year.",
        "Mentored new engineers and delivered learning sessions on Redis and Swagger Codegen."
      ]
    },
    {
      role: "Interview Engineer",
      company: "Karat",
      companyUrl: "https://karat.com/",
      companylogo: karatLogo,
      date: "June 2026 - Present",
      desc: "Remote",
      descBullets: [
        "Apprenticeship focused on systems design, problem solving, and structured technical interviewing."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Airlift Technologies",
      companyUrl: "https://www.instagram.com/airlift_pk/?hl=en",
      companylogo: airliftLogo,
      date: "June 2021 - November 2022",
      desc: "Karachi, Pakistan",
      descBullets: [
        "Built an order-delivery ETA engine using historical lifecycle data to produce phase-specific, order-level estimates.",
        "Added exponential backoff for failed Amazon SQS events, protecting inventory accuracy and reducing manual correction.",
        "Helped build the Supply Chain microservice from scratch, migrating and optimizing legacy endpoints under a no-QA ownership model.",
        "Optimized an inventory API consuming 30% of server time, reducing overall server load by 10%.",
        "Resolved a major production defect responsible for more than USD 10K in liability during the preceding month."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Siliconplex",
      companyUrl: "https://siliconplex.com/",
      companylogo: siliconplexLogo,
      date: "May 2021 - June 2021",
      desc: "Karachi, Pakistan",
      descBullets: [
        "Co-developed a Python web crawler using XML sitemaps.",
        "Built a Django charity application, from ERD design through API development."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "University of Karachi",
      companyUrl: "https://uok.edu.pk/",
      companylogo: karachiUniversityLogo,
      date: "January 2019 - February 2019",
      desc: "Karachi, Pakistan (On-site)",
      descBullets: [
        "Supported computer science teaching with an emphasis on foundational problem-solving skills."
      ]
    }
  ]
};

// Featured repositories are configured statically so the site builds without a GitHub token.
const openSource = {showGithubProfile: "false", display: false};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "PRODUCTION SYSTEMS AND PERSONAL SOFTWARE PROJECTS",
  projects: [
    {
      category: "Professional Projects",
      projectName: "Dynamic Delivery Radius - Careem",
      projectDesc:
        "A supply-optimization capability that dynamically adjusted delivery coverage and protected USD 1M in annual revenue."
    },
    {
      category: "Professional Projects",
      projectName: "Live Captain Tracking - Careem",
      projectDesc:
        "A live package-location and ETA notification system built with Java scheduling and Redis, supporting the onboarding of 10+ high-value merchants."
    },
    {
      category: "Professional Projects",
      projectName: "Delivery ETA Engine - Airlift",
      projectDesc:
        "A calculation engine that analyzed historical fulfillment data to generate more realistic real-time order delivery estimates."
    },
    {
      category: "Personal Projects",
      projectName: "Qarijee Backend",
      projectDesc:
        "A modular education-platform backend built with TypeScript and NestJS, featuring authentication, role-based users, classrooms, courses, assessments, PostgreSQL, and TypeORM.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/muhammadammarsohail/qarijee-backend-nestjs"
        }
      ]
    },
    {
      category: "Personal Projects",
      projectName: "Let's Ride",
      projectDesc:
        "A C# console-based bike riding game demonstrating object-oriented programming through speed, gears, braking, and rider interactions.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/muhammadammarsohail/Let-s-Ride"
        }
      ]
    },
    {
      category: "Personal Projects",
      projectName: "Code Analyzer",
      projectDesc:
        "A Python implementation of lexical and syntax analysis, with partial semantic analysis.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/muhammadammarsohail/code-analyzer"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Professional milestones and certifications.",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "Lessons from building, operating, and improving production systems.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://muhammadammarsohail.medium.com/life-at-the-tech-war-room-694e873a0ee8",
      title: "Life at the Tech War Room",
      description:
        "Practical lessons from serving as the primary on-call engineer for high-priority production incidents."
    },
    {
      url: "https://muhammadammarsohail.medium.com/api-optimization-8842bae96ba3",
      title: "API Optimization",
      description:
        "How careful API optimization reduced server load and improved the efficiency of a production inventory workflow."
    },
    {
      url: "https://muhammadammarsohail.medium.com/the-barbelator-45d7b5ece98b",
      title: "The Barbelator",
      description:
        "A story-driven look at a Python simulation that models customer arrivals, service times, queueing, and capacity in a single-server barbershop."
    }
  ],
  display: true
};

const talkSection = {
  title: "Talks & Teaching",
  subtitle:
    "Sharing practical backend engineering knowledge with the next generation of engineers.",
  talks: [
    {
      title: "API Client Generation with OpenAPI",
      subtitle:
        "A technical session on using Swagger Codegen to generate API clients from OpenAPI specifications, delivered as part of Careem's NextGen mentorship program.",
      event_url: "https://www.youtube.com/watch?v=uNQ_rSVWYGI",
      event_label: "Watch on YouTube"
    }
  ],
  display: true
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume for the full story.",
  display: true
};

const contactInfo = {
  title: emoji("Let's Connect ☕"),
  subtitle:
    "Want to discuss backend systems, engineering productivity, or an opportunity? My inbox is open.",
  number: "",
  email_address: "muhammadammarsohail@gmail.com"
};

const twitterDetails = {userName: "mammarsohail", display: false};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  aiEngineeringSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
