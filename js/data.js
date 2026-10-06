/* ==========================================================================
   PORTFOLIO CONTENT
   Edit text here. The page builds the Journey, Skills and Projects sections
   from this file.
   ========================================================================== */

const portfolioData = {
  timeline: [
    {
      label: "Present",
      title: "BS Information Technology",
      text: "Studying Information Technology at Batangas State University – The National Engineering University, Lipa Campus while developing practical software and research projects.",
      hoverTitle: "Education & Professional Experience",
      hoverItems: [
        {
          label: "Education",
          title: "BS Information Technology",
          text: "Batangas State University – The National Engineering University, Lipa Campus"
        },
        {
          label: "May – August 2026",
          title: "Operations Manager | Booth Attendant",
          text: "Krajsty Pinoy — part-time experience assisting in operations management, customer service, and product handling."
        }
      ]
    },
    {
      label: "System analysis",
      title: "From Problems to Systems",
      text: "Learning how to identify user needs, analyze processes, design workflows, document requirements, and translate real-world problems into proposed information systems.",
      hoverTitle: "System Analysis Experience",
      hoverItems: [
        {
          label: "Focus",
          title: "Requirements & Workflow Analysis",
          text: "Developing the ability to identify user needs, document requirements, map processes, and turn real-world problems into structured system concepts."
        }
      ]
    },
    {
      label: "Web development",
      title: "Building Functional Web Applications",
      text: "Developing web-based projects using Python, Flask, SQLAlchemy, SQLite, HTML, CSS, and JavaScript.",
      hoverTitle: "Web Development Experience",
      hoverItems: [
        {
          label: "Development",
          title: "Python, Flask, HTML, CSS & JavaScript",
          text: "Building academic and personal web applications with emphasis on functionality, responsive interfaces, database integration, and user experience."
        }
      ]
    },
    {
      label: "2024 – 2026",
      title: "Teatro Aliwana",
      text: "Growing through leadership, creative collaboration, and organizational experience as Lente Head.",
      hoverTitle: "Leadership & Organizational Experience",
      hoverItems: [
        {
          label: "Lente Head",
          title: "Teatro Aliwana",
          text: "Led and coordinated members in organizational projects and creative activities; managed schedules, delegated tasks, and ensured smooth communication within the department."
        }
      ]
    },
    {
      label: "2024 – 2025",
      title: "JPCS – Lipa Chapter",
      text: "Building communication, media, teamwork, and organization skills through student technology activities.",
      hoverTitle: "Leadership & Organizational Experience",
      hoverItems: [
        {
          label: "Media Committee Member",
          title: "Junior Philippine Computer Society – Lipa Chapter",
          text: "Collaborated with fellow members in planning and promoting organization activities and events, assisted with media content, and maintained active engagement across digital platforms."
        }
      ]
    },
    {
      label: "2024 – 2025",
      title: "Aya Ibaba Youth Ministry",
      text: "Strengthening leadership, communication, coordination, and community involvement through media-related activities.",
      hoverTitle: "Leadership & Organizational Experience",
      hoverItems: [
        {
          label: "Media Committee Chairman",
          title: "Aya Ibaba Youth Ministry",
          text: "Organized media-related activities and coordinated effectively with team members while strengthening communication, leadership, and community service skills."
        }
      ]
    },
    {
      label: "Technical foundation",
      title: "Programming Skills",
      text: "Developing practical programming foundations through academic coursework, certifications, and hands-on projects.",
      hoverTitle: "Programming Skills",
      hoverItems: [
        {
          label: "Programming",
          title: "Python, HTML, CSS, JavaScript & SQL",
          text: "Programming knowledge developed through academic projects, web development practice, and introductory programming and database courses."
        }
      ]
    },
    {
      label: "Technical tools",
      title: "Databases & Tools",
      text: "Working with databases and development tools used to design, build, test, and manage information systems.",
      hoverTitle: "Databases & Development Tools",
      hoverItems: [
        {
          label: "Databases",
          title: "Database Management Systems",
          text: "Experience with database concepts and practical database work using SQLite and SQL-based systems."
        },
        {
          label: "Development Tools",
          title: "GitHub, VS Code & Cisco Packet Tracer",
          text: "Using development, version-control, and networking tools for academic and project-based work."
        }
      ]
    },
    {
      label: "2025 – 2026",
      title: "Certifications",
      text: "Continuously building technical knowledge through recognized programming and database certifications.",
      hoverTitle: "Certifications",
      hoverItems: [
        {
          label: "August 2026",
          title: "Introduction to Programming Using Python — DataCamp",
          text: "Completed introductory Python programming training focused on core programming concepts and practical coding foundations."
        },
        {
          label: "August 2025",
          title: "Intermediate SQL — DataCamp",
          text: "Completed intermediate SQL training covering practical querying and database skills."
        },
        {
          label: "August 2025",
          title: "Introduction to SQL — DataCamp",
          text: "Completed foundational SQL training and database query concepts."
        },
        {
          label: "May 2025",
          title: "Introduction to Programming Using Python — CodeChum",
          text: "Completed introductory Python programming training and strengthened programming fundamentals."
        }
      ]
    },
    {
      label: "2024 – 2026",
      title: "Trainings & Seminars",
      text: "Expanding knowledge beyond coursework through technology, data, AI, communication, and emerging-technology events.",
      hoverTitle: "Trainings & Seminars",
      hoverItems: [
        {
          label: "April 2026",
          title: "The Bites of Communication",
          text: "A symposium focused on communication for the 21st century."
        },
        {
          label: "March 2026",
          title: "BITS: AI and Blockchain for Smart Cities, Smart Business, and Smart Governance",
          text: "Explored emerging technologies and their applications in smart communities, business, and governance."
        },
        {
          label: "October 2024",
          title: "Databiz: Future-Proof Skills: Empowering Students with Data, AI, and Analytics",
          text: "Focused on developing future-ready knowledge in data, artificial intelligence, and analytics."
        },
        {
          label: "October 2024",
          title: "Internet of Things Conference (IoT CON)",
          text: "Expanded understanding of Internet of Things concepts and emerging technology applications."
        },
        {
          label: "October 2024",
          title: "Databiz: Equipping Tomorrow’s Innovators with Data Science, AI and Business Analytics",
          text: "Explored data science, AI, and business analytics for future technology professionals."
        }
      ]
    }
  ],

  skills: [
    {
      category: "Frontend",
      description: "Building clean, responsive, and user-friendly interfaces.",
      items: [
        { name: "HTML5", icon: "html5", tone: "orange" },
        { name: "CSS3", icon: "css3", tone: "blue" },
        { name: "JavaScript", icon: "javascript", tone: "yellow" },
        { name: "Responsive UI", icon: "responsive", tone: "purple" }
      ]
    },
    {
      category: "Backend",
      description: "Developing practical server-side applications and logic.",
      items: [
        { name: "Python", icon: "python", tone: "blue" },
        { name: "Flask", icon: "flask", tone: "red" },
        { name: "SQLAlchemy", icon: "sqlalchemy", tone: "orange" }
      ]
    },
    {
      category: "Database",
      description: "Working with relational data, queries, and database-driven systems.",
      items: [
        { name: "SQLite", icon: "sqlite", tone: "blue" },
        { name: "SQL", icon: "sql", tone: "gray" },
        { name: "Database Design", icon: "database", tone: "green" }
      ]
    },
    {
      category: "Systems & Networking",
      description: "Applying analysis, system design, integration, and networking concepts.",
      items: [
        { name: "System Analysis", icon: "system", tone: "red" },
        { name: "System Design", icon: "design", tone: "purple" },
        { name: "Cisco Packet Tracer", icon: "cisco", tone: "cyan" }
      ]
    },
    {
      category: "Tools & Design",
      description: "Tools I use for development, collaboration, documentation, and visual design.",
      items: [
        { name: "GitHub", icon: "github", tone: "white" },
        { name: "VS Code", icon: "vscode", tone: "blue" },
        { name: "Figma", icon: "figma", tone: "pink" },
        { name: "Canva", icon: "canva", tone: "cyan" }
      ]
    }
  ],

  /* --------------------------------------------------------------------------
     PROJECTS
     image: path to the screenshot. To change a screenshot, replace the file
            at this path (same filename) or change the path here.
     url:   OPTIONAL. Paste a live-site or GitHub link between the quotes and
            a "Visit project" button will appear. Leave "" to hide it.
     -------------------------------------------------------------------------- */
  projects: [
    {
      category: "Web Platform",
      title: "EcoSphere",
      fullTitle: "EcoSphere: A Web-Based Environmental Awareness and Fundraising Platform for Sustainable Action in Lipa City",
      image: "assets/images/projects/ecosphere.jpg",
      url: "",
      short: "A web-based platform connecting environmental awareness, local sustainability initiatives, project information, and fundraising opportunities for sustainable action in Lipa City.",
      problem: "Many communities have access to environmental information online but lack an organized and localized platform connecting awareness with actual participation and sustainability projects.",
      solution: "EcoSphere provides structured environmental topics, local project information, active and completed initiatives, and fundraising opportunities to encourage environmental awareness and community participation.",
      tags: ["Flask", "SQLAlchemy", "SQLite", "Fundraising", "Sustainability"]
    },
    {
      category: "Energy System",
      title: "eKuryente",
      fullTitle: "eKuryente: An Intelligent Household Energy Monitoring and Power Control System for Energy Conservation in Barangay Balintawak, Lipa City",
      image: "assets/images/projects/ekuryente.jpg",
      url: "",
      short: "An intelligent household energy monitoring and power control system for energy conservation in Barangay Balintawak, Lipa City.",
      problem: "Monthly bills provide limited visibility into real-time and appliance-level electricity usage, while standby consumption and inefficient appliance use may go unnoticed.",
      solution: "The system provides monitoring, kWh and cost estimation, daily/weekly/monthly dashboards, alerts, energy goals, and automated power-control features with user notification and override options.",
      tags: ["Energy Monitoring", "Automation", "IoT", "Dashboard"]
    },
    {
      category: "University System",
      title: "RedSpartan Queue",
      fullTitle: "Student Service Appointment and Queue Management System",
      image: "assets/images/projects/queue-system.jpg",
      url: "",
      short: "A centralized multi-department student service appointment and queue management system for Batangas State University – Lipa Campus.",
      problem: "Students may need to visit multiple offices to determine services, schedules, requirements, and queue availability, while high-volume offices may experience long waiting periods.",
      solution: "The system combines an office directory, appointment scheduling, QR appointment passes, digital queue monitoring, service management, transaction statuses, and administrative analytics.",
      tags: ["Flask", "Appointments", "QR Code", "Queue Management"]
    }
  ]
};
