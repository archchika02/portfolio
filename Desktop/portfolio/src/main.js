import './style.css'

// Scroll Header effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scroll-shadow');
  } else {
    header.classList.remove('scroll-shadow');
  }
});

// Icon Mapping (Simplified professional SVGs)
const icons = {
  programming: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.1-3.9-4.4-.5-3.3-3.3-5.6-6.6-5.6-2.5 0-4.7 1.3-6 3.2-2.7.2-4.9 2.5-4.9 5.3C0.6 15.9 2.6 18 5.1 18h12.4"></path></svg>`,
  web: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  devops: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  ai: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  soft: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
};

// Custom Skill Logos (SVGs with specific professional colors)
const customLogos = {
  api: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`, color: '#61dafb' },
  auth: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`, color: '#ff5f56' },
  rbac: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>`, color: '#ffbd2e' },
  microservices: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6"></rect><rect x="16" y="2" width="6" height="6"></rect><rect x="2" y="16" width="6" height="6"></rect><rect x="16" y="16" width="6" height="6"></rect><path d="M8 5h8"></path><path d="M5 8v8"></path></svg>`, color: '#addb67' },
  vector: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline></svg>`, color: '#82aaff' },
  monitoring: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`, color: '#ff9f43' },
  loadbalance: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8"></path><path d="M12 14v8"></path><path d="M4 12h16"></path><circle cx="12" cy="12" r="2"></circle></svg>`, color: '#54a0ff' },
  concurrency: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`, color: '#00d2d3' },
  brain: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A5 5 0 0 1 12 4.5 5 5 0 0 1 14.5 2h2a5 5 0 0 1 5 5v2a5 5 0 0 1-2.5 4.33A5 5 0 0 1 21.5 17.67V20a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2v-2.33a5 5 0 0 1 2.5-4.34A5 5 0 0 1 2.5 9V7a5 5 0 0 1 5-5h2z"></path></svg>`, color: '#ef9a9a' },
  nlp: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 9h8"></path><path d="M8 13h5"></path></svg>`, color: '#ce93d8' },
  problem_solving: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`, color: '#80deea' },
  leadership: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`, color: '#fff59d' },
  communication: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 6.1H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z"></path><path d="M23 7.1l-6 5 6 5"></path></svg>`, color: '#b39ddb' },
  time_management: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`, color: '#a5d6a7' },
  streamlit: { svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.86L19.29 19H4.71L12 5.86zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>`, color: '#ff4b4b' }
};

// Mock Data
const skillCategories = [
  {
    title: 'Programming Languages',
    icon: icons.programming,
    items: [
      { name: 'C++', logo: 'devicon-cplusplus-plain colored' },
      { name: 'Java', logo: 'devicon-java-plain colored' },
      { name: 'Python', logo: 'devicon-python-plain colored' },
      { name: 'JavaScript', logo: 'devicon-javascript-plain colored' }
    ]
  },
  {
    title: 'Web & Cloud',
    icon: icons.cloud,
    items: [
      { name: 'RESTful APIs', custom: customLogos.api },
      { name: 'JWT Auth', custom: customLogos.auth },
      { name: 'RBAC', custom: customLogos.rbac },
      { name: 'Microservices', custom: customLogos.microservices },
      { name: 'NGINX', logo: 'devicon-nginx-original colored' },
      { name: 'Azure Cloud', logo: 'devicon-azure-plain colored' }
    ]
  },
  {
    title: 'Frontend Development',
    icon: icons.web,
    items: [
      { name: 'React & Vite', logo: 'devicon-react-original colored' },
      { name: 'Tailwind CSS', logo: 'devicon-tailwindcss-original colored' },
      { name: 'HTML/CSS', logo: 'devicon-html5-plain colored' }
    ]
  },
  {
    title: 'Databases',
    icon: icons.database,
    items: [
      { name: 'MySQL', logo: 'devicon-mysql-plain colored' },
      { name: 'SQLite', logo: 'devicon-sqlite-plain colored' },
      { name: 'MongoDB Atlas', logo: 'devicon-mongodb-plain colored' },
      { name: 'ChromaDB', custom: customLogos.vector }
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: icons.devops,
    items: [
      { name: 'Git', logo: 'devicon-git-plain colored' },
      { name: 'GitHub', logo: 'devicon-github-original' },
      { name: 'Docker', logo: 'devicon-docker-plain colored' },
      { name: 'Monitoring', custom: customLogos.monitoring },
      { name: 'Load Balance', custom: customLogos.loadbalance },
      { name: 'Concurrency', custom: customLogos.concurrency }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: icons.ai,
    items: [
      { name: 'RAG', custom: customLogos.brain },
      { name: 'NLP', custom: customLogos.nlp },
      { name: 'Vector Search', custom: customLogos.vector },
      { name: 'Streamlit', custom: customLogos.streamlit }
    ]
  },
  {
    title: 'Soft Skills',
    icon: icons.soft,
    items: [
      { name: 'Problem-Solving', custom: customLogos.problem_solving },
      { name: 'Leadership', custom: customLogos.leadership },
      { name: 'Communication', custom: customLogos.communication },
      { name: 'Time Management', custom: customLogos.time_management }
    ]
  }
];

const projects = [
  {
    title: 'Examination Management System',
    subtitle: 'Industrial Management Dept.',
    description: 'A robust role-based platform streamlining university exam workflows. Orchestrates complex interactions between Students, Batch Reps, Faculty, Deans, and Hall Attendants with granular RBAC.',
    tech: [
      { name: 'React', logo: 'devicon-react-original colored' },
      { name: 'Node.js', logo: 'devicon-nodejs-plain colored' },
      { name: 'Express', logo: 'devicon-express-original' },
      { name: 'MySQL', logo: 'devicon-mysql-plain colored' },
      { name: 'Vite', logo: 'devicon-vite-plain colored' },
      { name: 'Tailwind CSS', logo: 'devicon-tailwindcss-original colored' }
    ],
    github: '#',
    link: '#',
  },
  {
    title: 'CineBook Movie Booking',
    subtitle: 'Distributed System',
    description: 'A distributed online movie seat booking system. Features real-time seat locking with auto-expiration, service health monitoring via NGINX, and Docker-containerized microservices for high reliability.',
    tech: [
      { name: 'React', logo: 'devicon-react-original colored' },
      { name: 'Node.js', logo: 'devicon-nodejs-plain colored' },
      { name: 'MySQL', logo: 'devicon-mysql-plain colored' },
      { name: 'NGINX', logo: 'devicon-nginx-original colored' },
      { name: 'Docker', logo: 'devicon-docker-plain colored' }
    ],
    github: '#',
    link: '#',
  },
  {
    title: 'Gazette Chatbot',
    subtitle: 'RAG Application | Legal Domain',
    description: 'High-performance RAG system for legal gazettes. Delivers verified citations, real-time response streaming, and automated multi-PDF processing with vector search accuracy.',
    tech: [
      { name: 'Python', logo: 'devicon-python-plain colored' },
      { name: 'LangChain', custom: customLogos.nlp },
      { name: 'ChromaDB', custom: customLogos.vector },
      { name: 'Streamlit', custom: customLogos.streamlit },
      { name: 'Llama 3', custom: customLogos.brain }
    ],
    github: '#',
    link: '#',
  },
  {
    title: 'SmartStudyApp',
    subtitle: 'Intelligent Study Companion | Android Mobile Application',
    description: 'An Android application designed to enhance digital studying with advanced PDF/image reading, note-taking, and context-aware features that adapt to lighting and activity.',
    tech: [
      { name: 'Android Studio', logo: 'devicon-android-plain colored' },
      { name: 'Java', logo: 'devicon-java-plain colored' },
      { name: 'SQLite (Room)', logo: 'devicon-sqlite-plain colored' }
    ],
    github: '#',
    link: '#',
  },
  {
    title: 'SthreeHub',
    subtitle: 'User Authentication System',
    description: 'A comprehensive user management system featuring email-based registration, JWT-based secure login, and Role-Based Access Control (RBAC). Integrated password reset and seamless API communication, deployed to Microsoft Azure with Docker for high availability.',
    tech: [
      { name: 'React', logo: 'devicon-react-original colored' },
      { name: 'Node.js', logo: 'devicon-nodejs-plain colored' },
      { name: 'MongoDB', logo: 'devicon-mongodb-plain colored' },
      { name: 'Auth', custom: customLogos.auth },
      { name: 'RBAC', custom: customLogos.rbac },
      { name: 'Azure', logo: 'devicon-azure-plain colored' },
      { name: 'Docker', logo: 'devicon-docker-plain colored' }
    ],
    github: '#',
    link: '#',
  },
  {
    title: 'Doctor Appointment System',
    subtitle: 'Healthcare Management',
    description: 'A healthcare system enabling patient registration, doctor scheduling, and appointment booking. Focuses on improved management efficiency and data security through robust validation.',
    tech: [
      { name: 'Java', logo: 'devicon-java-plain colored' },
      { name: 'MySQL', logo: 'devicon-mysql-plain colored' }
    ],
    github: '#',
    link: '#',
  },
  {
    title: 'Flappy Bird Text-Based',
    subtitle: 'C++ Game Development',
    description: 'A text-based game featuring collision detection, randomized obstacles, and high-score persistence. Optimized for smooth movement and screen refresh performance.',
    tech: [
      { name: 'C++', logo: 'devicon-cplusplus-plain colored' }
    ],
    github: '#',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Personal Brand | DevOps Themed',
    description: 'A high-performance, single-page professional portfolio. Showcasing DevOps principles through a terminal-style bio and modern interactive UI.',
    tech: [
      { name: 'Vanilla JS', logo: 'devicon-javascript-plain colored' },
      { name: 'CSS3', logo: 'devicon-css3-plain colored' },
      { name: 'Vite', logo: 'devicon-vite-plain colored' }
    ],
    github: '#',
    link: '#',
  }
];

const achievements = [
  {
    title: 'Venture Verse 2025',
    organization: 'Sabaragamuwa University of Sri Lanka',
    status: 'Finalist (Top 5)',
    year: '2025',
    description: 'Selected among the Top 5 from 99 teams at the International Conference (ICSUSL 2025). A journey of refining high-impact entrepreneurship ideas and pitching to industry experts.',
    team: 'Thilukshika Leo Jebarajah, Rahitha Thangavel, Thushanthi Sivasothilingam',
    images: ['/src/verse1.jpeg', '/src/verse2.jpeg', '/src/verse3.jpeg']
  },
  {
    title: 'CodeFest 2025',
    organization: 'SLIIT',
    status: 'Finalist - Technopreneur',
    year: '2025',
    description: 'Experienced the full entrepreneurship cycle with Team HeraForce. From conceptualizing digital solutions to stage pitching at a premier national platform.',
    team: 'Thilukshika Leo Jebarajah, Thushanthi Sivasothilingam, Rahitha Thangavel',
    images: ['/src/sliit1.jpeg', '/src/sliit2.jpeg', '/src/sliit3.png']
  },
  {
    title: 'IdeaSprint 2025',
    organization: 'University of Kelaniya',
    status: 'Finalist',
    year: '2025',
    description: 'Pitched as Team TechNest, receiving intensive mentorship and industry insights. Strengthened technical vision and presentation clarity through professional guidance.',
    team: 'Rahitha Thangavel, Thilukshika Leo Jebarajah, Thushanthi Sivasothilingam',
    images: ['/src/idea1.jpeg', '/src/idea2.jpeg', '/src/idea3.jpeg']
  }
];

const certifications = [
  {
    name: 'DevOps Foundations',
    issuer: 'LinkedIn Learning',
    date: '2024',
    image: '/src/DevOpsfou.png',
    link: 'https://www.linkedin.com/learning/certificates/94fecfe08e0dc123f1ce9272c236b11f4cc6dd1a67427f4c9fd607349b889166'
  },
  {
    name: 'Git Essential Training',
    issuer: 'LinkedIn Learning',
    date: '2024',
    image: '/src/git.png',
    link: 'https://www.linkedin.com/learning/certificates/7fc4c117b4de109ea151d7e2ffeca6bea6ae3f3a8fe9327b6ca454c9eb322914'
  },
  {
    name: 'Learning Linux Command Line',
    issuer: 'LinkedIn Learning',
    date: '2024',
    image: '/src/linux.png',
    link: 'https://www.linkedin.com/learning/certificates/cfe6ec5f182dbb3664e6c674e5368d1017d94c2a32cd30b22ecc4d4f05010d9e'
  },
  {
    name: 'Networking Basics',
    issuer: 'Cisco',
    date: '2024',
    image: '/src/networking.png'
  }
];

const badges = [
  {
    name: 'Networking Basics',
    issuer: 'Cisco',
    date: '2024',
    image: '/src/cisco.png',
    link: 'https://www.credly.com/badges/0183da58-d882-4cb9-baae-8130b1e8505d'
  },
  {
    name: 'AgentBlazer Innovator',
    issuer: 'Code Terriers',
    image: '/src/inno.png',
    link: 'https://www.salesforce.com/trailblazer/rdam60br6u5aabju7i'
  },
  {
    name: '30 Days of Code',
    issuer: 'HackerRank',
    image: '/src/hackerrank.png',
    link: 'https://www.hackerrank.com/profile/archchika27'
  },
  {
    name: 'GitHub Models Starter',
    issuer: 'GitHub',
    image: '/src/models.png',
    link: 'https://github.com/nisalgunawardhana/Github-models-starter-pro/issues/60'
  },
  {
    name: 'Generative AI App Starter',
    issuer: 'GitHub',
    image: '/src/genai.png',
    link: 'https://github.com/nisalgunawardhana/GenAIStarter/issues/4'
  }
];

const activities = [
  {
    title: 'Karate (Yellow Belt Achiever)',
    organization: 'Karate Team, University of Kelaniya',
    description: 'Developed discipline, physical strength, and mental focus as an active member of the university karate team.',
    images: ['/src/karate.jpeg'],
    tags: ['Martial Arts', 'Discipline', 'Yellow Belt'],
    icon: '🥋'
  },
  {
    title: 'Second Runner Up',
    organization: 'Inter-Faculty Karate Tournament',
    description: 'Achieved 3rd place in the prestigious inter-faculty competition, showcasing competitive spirit and karate techniques.',
    images: ['/src/award1.jpeg', '/src/award2.jpeg'],
    tags: ['Tournament', 'Achievement', 'Karate'],
    icon: '🏆'
  },
  {
    title: 'Outbound Training Program',
    organization: 'University of Kelaniya',
    description: 'Participated in a high-intensity leadership development program focusing on team building, problem-solving, and international standards of leadership.',
    images: ['/src/outbound.jpeg'],
    tags: ['Leadership', 'Team Building', 'Soft Skills'],
    icon: '🏔️'
  }
];

// Rendering Logic
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = skillCategories.map(cat => `
    <div class="card skill-card">
      <div class="skill-category-header">
        <span class="category-icon">${cat.icon}</span>
        <h3>${cat.title}</h3>
      </div>
      <div class="skill-tags">
        ${cat.items.map(skill => `
          <span class="skill-tag" style="${skill.custom ? `--skill-color: ${skill.custom.color}` : ''}">
            ${skill.custom ? skill.custom.svg : `<i class="${skill.logo}"></i>`}
            ${skill.name}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = projects.map((project, index) => `
    <div class="card project-card ${index === 0 ? 'featured' : ''}" onmousemove="this.style.setProperty('--mouse-x', event.offsetX + 'px'); this.style.setProperty('--mouse-y', event.offsetY + 'px')">
      <div class="spotlight"></div>
      <div class="border-tracers">
        <span class="tracer tracer-top"></span>
        <span class="tracer tracer-right"></span>
        <span class="tracer tracer-bottom"></span>
        <span class="tracer tracer-left"></span>
      </div>
      <div class="project-content">
        <span class="project-subtitle">${project.subtitle}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tech.map(t => `
            <span class="tag" style="${t.custom ? `--skill-color: ${t.custom.color}` : ''}">
              ${t.custom ? t.custom.svg : `<i class="${t.logo}"></i>`}
              ${t.name}
            </span>
          `).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" class="github-link">
            <i class="devicon-github-original"></i>
            Code
          </a>
          <a href="${project.link}" target="_blank" class="demo-link">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  grid.innerHTML = achievements.map(ach => `
    <div class="card achievement-card">
      <div class="achievement-aura"></div>
      <div class="achievement-badge">${ach.status}</div>
      <div class="achievement-year">${ach.year}</div>
      
      <div class="achievement-images">
        ${ach.images.map(img => `<img src="${img}" alt="Achievement moment" class="achievement-img">`).join('')}
      </div>
      
      <div class="achievement-content">
        <h3 class="achievement-title">${ach.title}</h3>
        <span class="achievement-org">${ach.organization}</span>
        <p class="achievement-desc">${ach.description}</p>
        <div class="achievement-team">
          <strong>Team Members:</strong> ${ach.team}
        </div>
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const grid = document.getElementById('certifications-grid');

  const certsHtml = certifications.map(cert => `
    <div class="card cert-card">
      <div class="cert-image-container">
        <img src="${cert.image}" alt="${cert.name}" class="cert-img">
        <div class="creative-verified-tag">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          Verified
        </div>
      </div>
      <div class="cert-info">
        <h3>${cert.name}</h3>
        <p class="issuer">${cert.issuer}</p>
        <div class="cert-footer">
          ${cert.date ? `<span class="cert-date-pill">${cert.date}</span>` : ''}
          ${cert.link ? `<a href="${cert.link}" target="_blank" class="cert-link">Check Credential</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  const badgesHtml = badges.map(badge => `
    <div class="card badge-card">
      <div class="creative-verified-tag">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        Verified
      </div>
      <div class="badge-aura-glow"></div>
      <div class="badge-icon-wrapper">
        <img src="${badge.image}" alt="${badge.name}" class="badge-img">
      </div>
      <div class="badge-info">
        <h3>${badge.name}</h3>
        <p>${badge.issuer}</p>
        ${badge.link ? `<a href="${badge.link}" target="_blank" class="badge-link">Check Credential</a>` : ''}
      </div>
    </div>
  `).join('');

  grid.innerHTML = certsHtml + badgesHtml;
}

function renderActivities() {
  const grid = document.getElementById('activities-grid');
  grid.innerHTML = activities.map(act => `
    <div class="card activity-card">
      <div class="activity-images">
        ${act.images.map(img => `<img src="${img}" alt="Activity" class="activity-img">`).join('')}
      </div>
      <div class="activity-content">
        <div class="activity-icon-floating">${act.icon}</div>
        <h3 class="activity-title">${act.title}</h3>
        <h4 class="activity-org">${act.organization}</h4>
        <p class="activity-desc">${act.description}</p>
        <div class="activity-tags">
          ${act.tags.map(tag => `<span class="activity-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Animations
function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('#skills-grid .card').forEach(card => {
    observer.observe(card);
  });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionTitle = section.querySelector('.section-title');

      if (scrollPos >= (sectionTop - 200) && scrollPos < (sectionTop + sectionHeight - 200)) {
        current = section.getAttribute('id');
        if (sectionTitle) sectionTitle.classList.add('active');
      } else {
        if (sectionTitle) sectionTitle.classList.remove('active');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const popup = document.getElementById('success-popup');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;

    // Real Submission Logic
    submitBtn.innerText = 'Sending...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        popup.classList.add('active');
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        alert(data.errors ? data.errors.map(err => err.message).join(', ') : 'Form Error: Please check your Formspree ID.');
      }
    } catch (error) {
      alert('Submission Error: Make sure your internet is working and the Formspree ID is correct.');
    } finally {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderAchievements();
  renderCertifications();
  renderActivities();
  setupAnimations();
  setupScrollSpy();
  setupContactForm();
});
