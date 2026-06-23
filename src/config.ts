export const siteConfig = {
  name: "Ogenna Israel Eze",
  title: "Backend Developer/Engineer",
  description: "My portfolio(ogenna israel)",
  accentColor: "#1d4ed8",
  social: {
    email: "ogennaisrael98@gmail.com",
    linkedin: "https://linkedin.com/in/ogennaisrael",
    twitter: "https://x.com/Ogenna01",
    github: "https://github.com/ogennaisrael01",
  },
  aboutMe: "I take full ownership of my work, ensuring that I deliver high-quality results on time. \
  I am a strong believer in continuous learning and growth, always seeking opportunities to expand my skill set and stay updated with the latest industry trends. \
  I am a team player who values collaboration and open communication, and I am committed to contributing to the success of any project I am a part of.",
  skills: [
    "Python", "Javascript", "TypeScript", "Django", "Node.js", "Django REST Framework", "Express.js",
    "FastAPI", "PostgreSQL", "MongoDB", "Docker", "Git", "JWT", "Kubernetes", "AWS", 
    'Digital Ocean', "Vercel", "Render", "Heroku"
  ],
  projects: [
    {
      name: "Market Place API",
      description: "I built Market-API to handle everything a real marketplace needs under the hood - vendor storefronts, product listings, cart and checkout flows, order management, and payment processing. It's deployed on Render and connects to a securely managed PostgreSQL database, so the whole thing is live and production-ready.",
      link: "https://market-api-gx0p.onrender.com/api-docs/",
      skills: [
        "Javascript", "Node.js", "Express.js", "Sequelize", 
        "PostgreSQL", "PAYSTACK Payment", "JWT-Auth", "Render-Deployment",
      ],
    },
    {
      name: "Skill Speed API",
      description: "I built Skill Speed to give children aged 5–15 a structured path into technology, craft, and vocational skills. \
      The platform lets guardians register and manage their children's accounts, Pay for course materials via secure CHAPA GateWay,\
      while kids enroll in age-appropriate skill paths, complete lessons, and receive AI-driven recommendations tailored to their progress. \
      Project contenerized with docker and deployed on DigitalOcean.",
      link: "https://github.com/ogennaisrael01/SkillSpeed",
      skills: [
        "Python", "Django", "Django REST Framework", "PostgreSQL",
        "Docker", "DigitalOcean Deployment", "JWT-Auth", "AI-Driven Recommendations",
        "GEMINI AI Integration", 'Redis', 'Celery Task Queue', 'CHAPA Payment Gateway'
      ],
    },
    {
      name: "Wallet API",
      description:"I built Wallet-API to take the complexity out of fintech integration. \
      It gives developers a clean API layer over payment processors, \
      handling everything from account registration and deposits to fund transfers and bank withdrawals - \
      with transaction PINs, idempotency keys, and Celery-powered async processing built in from the ground up.\
      Deployed on Render with a PostgreSQL database.",
      link: "https://wallet-api-4bmm.onrender.com/api/schema/swagger-ui/",
      skills: [
        "Python", "Django REST Framework", "Django", "PostgreSQL", "JWT-Auth",
        "Celery", "Redis", "Render Deployment", "PAYSTACK Payment Integration",
      ],
    },
    {
      name: "Just-Watch API",
      description:"I built Just-Watch because picking a movie shouldn't feel like a chore. \
      It's a FastAPI backend that taps into the TMDB API to let users search millions of titles, \
      curate personal watchlists, and rate what they've watched. The recommendations get smarter over time, \
      and a built-in Google Gemini AI assistant means users can just describe what they're in the mood for and \
      get an answer. Deployed on Vercel with a managed PostgreSQL database.",
      link: "https://just-watch-nu.vercel.app/docs",
      skills: [
        "Python", "FastAPI", "Alembic", "PostgreSQL", "JWT", "vercel",
        "TMDB API Integration", "Google Gemini AI Assistant", "AI-Driven Recommendations",
        "JWT-Auth", "SQLAlchemy ORM", "Redis caching", "SlowAPI protection with rate limiting"
      ],
    },
    {
      name: "House Rental Management API",
      description: "A full-featured rental management API that connects house owners and tenants on one platform. \
      It handles role-based authentication, property listings, tenant rentals, and secure owner-tenant messaging \
      giving both sides everything they need to find, negotiate, and close a rental deal through clean RESTful APIs.",
      link: "https://github.com/ogennaisrael01/PropertyHub",
      skills: [
        "Python", "Django REST Framework", "Django", "PostgreSQL", "JWT-Auth",
        "Role-Based Authentication", "Secure Messaging System", 
      ],
    },
    {
      name: "Blog API - Complete Blogging Platform Backend",
      description: "A production-ready backend for a full-featured blogging platform built with Node.js/Express and TypeScript. \
      Users can create, publish, and discover blog posts with rich interactions including comments, likes, and bookmarks. \
      The platform features AI-powered content summarization, newsletter subscriptions with bulk email delivery, and real-time \
      notifications via Socket.IO. It includes secure JWT-based authentication with email verification, role-based access control, \
      and a robust background job processing system using Redis and BullMQ. Complete REST API with auto-generated Swagger documentation.",
      link: "https://blog1.up.railway.app/api-docs/",
      skills: [
        "TypeScript", "Node.js", "Express.js",
        "PostgreSQL", "Prisma ORM", "Redis",
        "Socket.IO", "BullMQ", "JWT Authentication",
        "Nodemailer", "Cloudinary", "OpenAI",
        "Swagger/OpenAPI", "Bcrypt", "Multer",
        "Zod Validation"
      ]
    }
  ],
  experience: [
    {
      company: "SKills4Hire: Digital marketplace connecting skilled professionals with clients",
      title: "Backend Software Developer",
      dateRange: "Dec 2025 - Present",
      bullets: [
        "Architected and built the entire backend system from scratch using Django and Django REST Framework, taking full ownership from database schema design to production deployment.",
        "Implemented Paystack payment integration with webhook handling, idempotency guards, and automated failure recovery to ensure transaction integrity.",
        "Deployed and managed the production environment on DigitalOcean, including SSH configuration, Nginx reverse proxy setup, and SSL provisioning via Certbot.",
        "Set up a GitHub Actions CI/CD pipeline for automated testing and deployment via raw SSH",
        "Containerised the full application stack using Docker and Docker Compose, covering the Django app, Celery workers, Redis, and Nginx",
        "Configured asynchronous task processing using Celery and Redis for background jobs like payment processing and email delivery",
        "Managed the Git workflow including creating pull requests, conducting code reviews, and maintaining branch integrity across the team"
      ],
    },
    {
      company: "QaCircle: Virtual Hackathon",
      title: "Hackathon Participant",
      dateRange: "Sep 2025 - Oct 2025",
      bullets: [
        "Architected the reservation system covering user authentication, vehicle listings, booking logic, and real-time availability management, all backed by a MongoDB database.",
        "Modelled and structured NoSQL data schemas in MongoDB to efficiently handle vehicle inventory, booking states, and user records within a fast-moving development cycle",
        "Containerised the full application using Docker and managed deployment on a Contabo server, with a CI/CD pipeline to keep the live environment in sync with the codebase throughout the competition",
        "Wrote clean, modular FastAPI route handlers and service logic under time pressure, maintaining code quality and meeting all specified functional requirements",
        "Demonstrated the ability to deliver a production-deployed, containerised API from scratch within a compressed timeline, coordinating across a remote team without compromising on core functionality",
      
      ],
    },
    {
      company: "Decio Labs",
      title: "Backend Software Developer",
      bullets: [
          "Designed and built the entire backend system for a remote cinema platform from scratch using FastAPI with a fully async architecture, taking complete ownership from database schema to production deployment",
          "Implemented async database interactions with SQLAlchemy 2.0, connected to a Supabase-managed PostgreSQL instance for reliable and scalable data persistence",
          "Engineered a secure file upload pipeline integrating Cloudflare R2 for storing and serving media assets including movie files and thumbnails",
          "Built a robust authentication system with JWT access and refresh tokens, implementing refresh token rotation and reuse detection to prevent session hijacking",
          "Configured Celery with Redis as the message broker to handle asynchronous email processing, integrated with Brevo for transactional email delivery including OTP and user notification flows",
          "Deployed the production application on Render, managing environment configuration, service setup, and live environment stability",
          "Managed the Git workflow including creating pull requests, conducting code reviews, and maintaining branch integrity across the team"
      ]
    }
  ],
  education: [
      {
      school: "ALX Africa",
      degree: "Certified Pro-Backend Developer",
      dateRange: "Mar 2025 - Feb 2026",
      achievements: [
        "Completed an intensive, project-based backend engineering programme spanning core computer science fundamentals, systems programming, and modern web development practices",
        "Built production-grade projects across the full backend stack. REST API design, database modelling, authentication systems, and deployment pipelines, under real-world deadlines and peer review",
        "Developed deep proficiency in Python, Django, Django REST Framework, and supporting technologies including Celery, Redis, Docker, and PostgreSQL through hands-on, specification-driven projects",
        "Gained practical experience with Linux system administration, shell scripting, networking fundamentals, and version control workflows as part of the programme's low-level engineering curriculum",
        "Collaborated with a global cohort of engineers in a remote-first, peer-reviewed learning environment, building habits around code quality, documentation, and technical communication",
        "Graduated with a backend specialisation, having built and shipped multiple full-featured backend systems independently from scratch"
      ],
    },
    {
      school: "Online Platform",
      degree: "Professional Foundation Training",
      dateRange: "Jan 2025 - Mar 2025",
      achievements: [
        "Completed a 3 months of intense training to thrive professionlaly",
        "Developed strong foundation in problem solving, critical thinking and collaboration through team based challenges",
        "Practiced AGILE methodologies and effective time management across multiple deadlines and deliverables",
        "Learned communication best practices for technical documentation, code reviws and peer feedback"
      ],
    },
  ],
};
