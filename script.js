// Experiences Data
const experiences = [
  {
    date: "February 2026 - Present",
    title: "Software Engineer",
    company: "Horizon Broadband",
    location: "Remote, IN",
    logo: "./images/company/horizon.jpeg",
    responsibilities: [
      "Building and maintaining scalable web applications using modern full-stack technologies including React.js, Next.js, Node.js, and cloud services.",
      "Developing robust backend APIs and microservices architecture to support high-traffic broadband management systems.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions on schedule.",
    ],
  },
  {
    date: "September 2025 - January 2026",
    title: "Software Developer",
    company: "DDReg pharma",
    location: "Gurugram, IN",
    logo: "./images/company/ddreg.jpg",
    responsibilities: [
      "Designed and developed an admin dashboard for pharma regulatory management using Next.js, Node.js, Express, and MongoDB with role-based authentication.",
      "Engineered a complete audit-logs system, tracking every user action with before/after data snapshots.",
      "Developed a Recycle Bin module with data restore and permanent delete action, implemented soft delete.",
      "Maintained and enhanced an existing pharma marketplace platform, adding multiple new modules.",
    ],
  },
  {
    date: "November 2023 - July 2025",
    title: "Full Stack Developer",
    company: "Kalvium Pvt. Ltd.",
    location: "Bangalore, IN",
    logo: "./images/company/kalvium.jpg",
    responsibilities: [
      "Built an automated assignment evaluation tool using React.js, Node.js, and Gemini API, reducing manual review time by 95% through pull request analysis and AI-generated feedback.",
      "Developed a performant Learning Management System(LMS) with React.js, Redux, Chakra UI, and RTK Query, boosting efficiency by 15% via client-side caching.",
      "Designed scalable RESTful APIs for the Management System(LMS), ensuring high reliability for 3,000+ daily users.",
      "Co-created a real-time attendance system using facial recognition, adopted by over 2,000 users across institutions.",
    ],
  },
  {
    date: "July 2023 - September 2023",
    title: "Frontend Developer Intern",
    company: "PyTech",
    location: "Remote",
    logo: "./images/company/pytech.jpeg",
    responsibilities: [
      "Maintained and enhanced the Student Management Portal using React.js to improve performance and usability.",
      "Developed a resume-verification tracking system to streamline student resume approval workflows.",
      "Designed and built an end-to-end job-application module enabling students to apply, track, and manage job applications within the portal.",
    ],
  },
];

// Projects Data - Single image per project
const projects = [
  {
    title: "Hello Chat",
    description:
      "A microservices realtime chat application with modern UI/UX with responsive design.",
    image: "./images/hellochat/chat1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/hellochat",
    demo: "https://hellochat.sumitsaurabh.dev/",
  },
  {
    title: "Readable LMS",
    description:
      "A scalable, full-featured LMS platform in Next.js 15 with secure authentication, rich analytics, video streaming, Stripe payments, and a modern, responsive UI.",
    image: "./images/readablelms/read1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/readable",
    demo: "https://readablelms.sumitsaurabh.dev/",
  },
  {
    title: "Invoice",
    description:
      "A full-featured Invoice management web application with modern UI/UX and responsive design and PDF generation.",
    image: "./images/invoice/invoice1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/invoice",
    demo: "https://invoice.sumitsaurabh.dev/",
  },
  {
    title: "RecoredFree",
    description:
      "A user-friendly platform designed to simplify video sharing and screen recording.",
    image: "./images/recordfree/rf1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/recordfree",
    demo: "https://recordfree.kalvium.in/",
  },
  {
    title: "Swipe",
    description: "A full-featured Dating web application with real time chat.",
    image: "./images/swipe/swi1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/swipe",
    demo: "https://swipe.kalvium.in/",
  },
  {
    title: "Shopsy",
    description: "A fully-featured E-commerce web application.",
    image: "./images/shopsy/shop1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/Shopsy",
    demo: "https://shopsy.sumitsaurabh.dev/",
  },
  {
    title: "FOMO",
    description: "A full-featured social media web application.",
    image: "./images/fomo/fo1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/fomo",
    demo: "https://fomo.kalvium.in/",
  },
  {
    title: "Stupid Code Editor",
    description:
      "A code editor with syntax highlighting and live preview with multiple language support.",
    image: "./images/stupid/stup1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/stupid",
    demo: "https://stupid.kalvium.in/",
  },
  {
    title: "Reflex",
    description: "A modern website for gaming enthusiasts.",
    image: "./images/reflex/ref1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/reflex",
    demo: "https://reflex-client.vercel.app/",
  },
  {
    title: "MR Chef",
    description: "A full-featured food delivery web application.",
    image: "./images/mrchef/chef1.jpeg",
    github: "https://github.com/Sunil-JJ/mrchefproject",
    demo: "https://mrchef-r4.netlify.app/",
  },
  {
    title: "Flipkart-Clone",
    description: "A full-featured E-commerce web application.",
    image: "./images/flipkart/flip1.jpeg",
    github: "https://github.com/hasbealam/flipkart-clone",
    demo: "https://soft-rolypoly-d1ba4d.netlify.app/",
  },
  {
    title: "Over Stock",
    description:
      "A full-featured E-commerce web application for buying and selling fernitures.",
    image: "./images/overstock/over1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/overstock-project-clone",
    demo: "https://overstock-project-clone.vercel.app/",
  },
  {
    title: "Stack Overflow",
    description: "It is a clone of Stack Overflow.",
    image: "./images/stackoverflow/so1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/stackoverflow",
    demo: "https://stackoverflow-me.netlify.app/",
  },
  {
    title: "Switchy",
    description: "Switchy is website which display data in the form of Charts.",
    image: "./images/switchy/switchy1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/switchy",
    demo: "https://switchy-me.netlify.app/",
  },
  {
    title: "Pop Store",
    description: "A clothing website where users can buy cloths for any sizes.",
    image: "./images/popstore/pstore1.jpeg",
    github: "https://github.com/Sumit-Saurabh98/Project-1",
    demo: "https://thriving-conkies-e382ef.netlify.app",
  },
];

// Skills Data
const skills = [
  { name: "HTML5", icon: "fab fa-html5", category: "frontend", level: 95 },
  { name: "CSS3", icon: "fab fa-css3-alt", category: "frontend", level: 90 },
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
    category: "frontend",
    level: 92,
  },
  {
    name: "TypeScript",
    icon: "fab fa-js-square",
    category: "frontend",
    level: 85,
  },
  { name: "ReactJS", icon: "fab fa-react", category: "frontend", level: 90 },
  { name: "NextJS", icon: "fab fa-react", category: "frontend", level: 88 },
  { name: "Node.js", icon: "fab fa-node-js", category: "backend", level: 85 },
  { name: "MongoDB", icon: "fas fa-database", category: "backend", level: 82 },
  { name: "Python", icon: "fab fa-python", category: "backend", level: 78 },
  {
    name: "REST API",
    icon: "fas fa-exchange-alt",
    category: "backend",
    level: 88,
  },
  { name: "MySQL", icon: "fas fa-database", category: "backend", level: 80 },
  {
    name: "PostgreSQL",
    icon: "fas fa-database",
    category: "backend",
    level: 75,
  },
  {
    name: "FastAPI",
    icon: "fas fa-rocket",
    category: "backend",
    level: 80,
  },
  { name: "Git", icon: "fab fa-git-alt", category: "tools", level: 90 },
  { name: "GitHub", icon: "fab fa-github", category: "tools", level: 88 },
  { name: "AWS", icon: "fab fa-aws", category: "tools", level: 70 },
  { name: "Docker", icon: "fab fa-docker", category: "tools", level: 75 },
  {
    name: "Kubernetes",
    icon: "fas fa-dharmachakra",
    category: "tools",
    level: 65,
  },
  { name: "Java", icon: "fab fa-java", category: "backend", level: 72 },
  { name: "C++", icon: "fas fa-code", category: "backend", level: 68 },
  { name: "Redis", icon: "fas fa-database", category: "backend", level: 70 },
  { name: "Monorepo", icon: "fas fa-cubes", category: "tools", level: 78 },
  { name: "Deployment", icon: "fas fa-rocket", category: "tools", level: 82 },
];

// Initialize EmailJS
(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init("DFOMar_u6gOUc6KiR");
  }
})();

// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenu && navMenu) {
  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });
}

// Render projects as a simple grid with single image
function renderProjects(container, projects) {
  container.innerHTML = "";

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.innerHTML = `
      <div class="project-image-wrapper">
        <img src="${project.image}" alt="${project.title} — project screenshot" class="project-image" loading="lazy" width="400" height="225">
      </div>
      <div class="project-info">
        <div class="project-header">
          <h3>${project.title}</h3>
          <div class="project-links">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View ${project.title} on GitHub">
              <i class="fab fa-github" aria-hidden="true"></i>
            </a>
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link demo-link" aria-label="View ${project.title} live demo">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <p>${project.description}</p>
      </div>
    `;

    container.appendChild(projectCard);
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Populate Projects Grid
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer) {
    renderProjects(projectsContainer, projects);
  }

  // Populate Experiences (Compact, collapsible timeline)
  const experienceContainer = document.getElementById("experience-container");
  if (experienceContainer) {
    experiences.forEach((experience) => {
      const timelineItem = document.createElement("div");
      timelineItem.className = "timeline-item";

      const responsibilitiesList = experience.responsibilities
        .map((resp) => `<li>${resp}</li>`)
        .join("");

      timelineItem.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <span class="date-badge">${experience.date}</span>
            <div class="role">
              <h3>${experience.title} <span class="at">@ ${experience.company}</span></h3>
              <p class="location">${experience.location}</p>
            </div>
            <div class="company-right">
              ${
                experience.logo
                  ? `<img class="company-logo" src="${experience.logo}" alt="${experience.company} logo" loading="lazy" width="40" height="40"/>`
                  : ""
              }
              <button class="exp-toggle" aria-label="Toggle details" aria-expanded="false" title="Show details">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
          <ul class="timeline-list collapsed">
            ${responsibilitiesList}
          </ul>
        </div>
      `;

      // Toggle expand/collapse for responsibilities
      const toggleBtn = timelineItem.querySelector(".exp-toggle");
      const listEl = timelineItem.querySelector(".timeline-list");
      const cardEl = timelineItem.querySelector(".timeline-card");

      toggleBtn.addEventListener("click", () => {
        const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
        toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
        listEl.classList.toggle("collapsed", isExpanded);
        cardEl.classList.toggle("expanded", !isExpanded);
      });

      experienceContainer.appendChild(timelineItem);
    });
  }

  // Populate Skills
  const skillsContainer = document.getElementById("skills-container");
  const skillCategories = document.querySelectorAll(".skill-category");

  function renderSkills(category) {
    category = category || "all";
    skillsContainer.innerHTML = "";

    const filteredSkills =
      category === "all"
        ? skills
        : skills.filter((skill) => skill.category === category);

    filteredSkills.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.className = "skill-item";

      skillItem.innerHTML = `
        <div class="skill-icon">
          <i class="${skill.icon}"></i>
        </div>
        <h3 class="skill-name">${skill.name}</h3>
        <div class="skill-level">
          <div class="skill-level-fill" style="width: ${skill.level}%;"></div>
        </div>
        <div class="skill-percentage">${skill.level}%</div>
      `;

      skillsContainer.appendChild(skillItem);
    });
  }

  // Skill category filtering
  if (skillCategories) {
    skillCategories.forEach((category) => {
      category.addEventListener("click", () => {
        skillCategories.forEach((cat) => cat.classList.remove("active"));
        category.classList.add("active");
        renderSkills(category.dataset.category);
      });
    });
  }

  renderSkills();

  // Handle Contact Form
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  const showMessage = (message, type) => {
    if (formMessage) {
      formMessage.textContent = message;
      formMessage.className = `form-message ${type} show`;
      setTimeout(() => {
        formMessage.className = "form-message";
      }, 5000);
    }
  };

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      emailjs
        .send("service_853w7fp", "template_o6pmx7s", templateParams)
        .then(
          function () {
            showMessage(
              "Message sent successfully! I'll get back to you soon.",
              "success",
            );
            contactForm.reset();
          },
          function () {
            showMessage("Failed to send message. Please try again.", "error");
          },
        )
        .finally(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        if (navMenu && mobileMenu) {
          navMenu.classList.remove("active");
          mobileMenu.classList.remove("active");
        }
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 100) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "none";
      }
    },
    { passive: true },
  );

  // Add active nav link highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const highlightNavLink = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", highlightNavLink, { passive: true });
  highlightNavLink();
});
