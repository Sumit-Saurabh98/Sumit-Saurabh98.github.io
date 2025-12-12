// Experiences Data
const experiences = [
  {
    date: "September 2025 - Present",
    title: "Software Developer",
    company: "DDReg pharma",
    location: "Gurugram, IN",
    logo: "./images/company/ddreg.jpg",
    responsibilities: [
      "Designed and developed an admin dashboard for pharma regulatory management using Next.js, Node.js, Express,and MongoDB with role-based authentication.",
      "Engineered a complete audit-logs system, tracking every user action with before/after data snapshots.",
      "Developed a Recycle Bin module with data restore and permanent delete action, implemented soft delete.",
      "Maintained and enhanced an existing pharma marketplace platform, adding multiple new modules.",
    ],
  },
  {
    date: "November 2023 - July 2025",
    title: "Technical Mentor",
    company: "Kalvium Pvt. Ltd.",
    location: "Bangalore, IN",
    logo: "./images/company/kalvium.jpg",
    responsibilities: [
      "Built an automated assignment evaluation tool using React.js, Node.js, and Gemini API, reducing manual review time by 95% through pull request analysis and AI-generated feedback.",
      "Developed a performant Learning Management System(LMS) with React.js, Redux, Chakra UI, and RTK Query, boosting efficiency by 15% via client-side caching.",
      "Designed scalable RESTful APIs for the Management System(LMS), ensuring high reliability for 3,000+ daily users.",
      "Co-created a real-time attendance system using facial recognition, adopted by over 2,000 users across institutions.",
      "Mentored 50+ junior developers, guiding them through real-world projects and code reviews.",
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

// Projects Data - Updated with multiple images for carousel
const projects = [
  {
    title: "Hello Chat",
    description:
      "A microservices realtime chat application with modern UI/UX with responsive design.",
    images: [
      "./images/hellochat/chat1.jpeg",
      "./images/hellochat/chat2.jpeg",
      "./images/hellochat/chat3.jpeg",
      "./images/hellochat/chat4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/hellochat",
    demo: "https://hellochat.sumitsaurabh.dev/",
  },
  {
    title: "Readable LMS",
    description:
      "A scalable, full-featured LMS platform in Next.js 15 with secure authentication, rich analytics, video streaming, Stripe payments, and a modern, responsive UI.",
    images: [
      "./images/readablelms/read1.jpeg",
      "./images/readablelms/read2.jpeg",
      "./images/readablelms/read3.jpeg",
      "./images/readablelms/read4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/readable",
    demo: "https://readablelms.sumitsaurabh.dev/",
  },
  {
    title: "Invoice",
    description:
      "A full-featured Invoice management web application with modern UI/UX and responsive design and PDF generation.",
    images: [
      "./images/invoice/invoice1.jpeg",
      "./images/invoice/invoice2.jpeg",
      "./images/invoice/invoice3.jpeg",
      "./images/invoice/invoice4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/invoice",
    demo: "https://invoice.sumitsaurabh.dev/",
  },
  {
    title: "RecoredFree",
    description:
      "A user-friendly platform designed to simplify video sharing and screen recording.",
    images: [
      "./images/recordfree/rf1.jpeg",
      "./images/recordfree/rf2.jpeg",
      "./images/recordfree/rf3.jpeg",
      "./images/recordfree/rf4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/recordfree",
    demo: "https://recordfree.kalvium.in/",
  },
  {
    title: "Swipe",
    description: "A full-featured Dating web application with real time chat.",
    images: [
      "./images/swipe/swi1.jpeg",
      "./images/swipe/swi2.jpeg",
      "./images/swipe/swi3.jpeg",
      "./images/swipe/swi4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/swipe",
    demo: "https://swipe.kalvium.in/",
  },
  {
    title: "Shopsy",
    description: "A fully-featured E-commerce web application.",
    images: [
      "./images/shopsy/shop1.jpeg",
      "./images/shopsy/shop2.jpeg",
      "./images/shopsy/shop3.jpeg",
      "./images/shopsy/shop4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/Shopsy",
    demo: "https://shopsy.sumitsaurabh.dev/",
  },
  {
    title: "FOMO",
    description: "A full-featured social media web application.",
    images: [
      "./images/fomo/fo1.jpeg",
      "./images/fomo/fo2.jpeg",
      "./images/fomo/fo3.jpeg",
      "./images/fomo/fo4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/fomo",
    demo: "https://fomo.kalvium.in/",
  },
  {
    title: "Stupid Code Editor",
    description:
      "A code editor with syntax highlighting and live preview with multiple language support.",
    images: [
      "./images/stupid/stup1.jpeg",
      "./images/stupid/stup2.jpeg",
      "./images/stupid/stup3.jpeg",
      "./images/stupid/stup4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/stupid",
    demo: "https://stupid.kalvium.in/",
  },
  {
    title: "Reflex",
    description: "A modern website for gaming enthusiasts.",
    images: [
      "./images/reflex/ref1.jpeg",
      "./images/reflex/ref2.jpeg",
      "./images/reflex/ref3.jpeg",
      "./images/reflex/ref4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/reflex",
    demo: "https://reflex-client.vercel.app/",
  },
  {
    title: "MR Chef",
    description: "A full-featured food delivery web application.",
    images: [
      "./images/mrchef/chef1.jpeg",
      "./images/mrchef/chef2.jpeg",
      "./images/mrchef/chef3.jpeg",
      "./images/mrchef/chef4.jpeg",
    ],
    github: "https://github.com/Sunil-JJ/mrchefproject",
    demo: "https://mrchef-r4.netlify.app/",
  },
  {
    title: "Flipkart-Clone",
    description: "A full-featured E-commerce web application.",
    images: [
      "./images/flipkart/flip1.jpeg",
      "./images/flipkart/flip2.jpeg",
      "./images/flipkart/flip3.jpeg",
      "./images/flipkart/flip4.jpeg",
    ],
    github: "https://github.com/hasbealam/flipkart-clone",
    demo: "https://soft-rolypoly-d1ba4d.netlify.app/",
  },
  {
    title: "Over Stock",
    description:
      "A full-featured E-commerce web application for buying and selling fernitures.",
    images: [
      "./images/overstock/over1.jpeg",
      "./images/overstock/over2.jpeg",
      "./images/overstock/over3.jpeg",
      "./images/overstock/over4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/overstock-project-clone",
    demo: "https://overstock-project-clone.vercel.app/",
  },
  {
    title: "Stack Overflow",
    description: "It is a clone of Stack Overflow.",
    images: [
      "./images/stackoverflow/so1.jpeg",
      "./images/stackoverflow/so2.jpeg",
      "./images/stackoverflow/so3.jpeg",
      "./images/stackoverflow/so4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/stackoverflow",
    demo: "https://stackoverflow-me.netlify.app/",
  },
  {
    title: "Switchy",
    description: "Switchy is website which display data in the form of Charts.",
    images: [
      "./images/switchy/switchy1.jpeg",
      "./images/switchy/switchy2.jpeg",
      "./images/switchy/switchy3.jpeg",
      "./images/switchy/switchy4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/switchy",
    demo: "https://switchy-me.netlify.app/",
  },
  {
    title: "Pop Store",
    description: "A clothing website where users can buy cloths for any sizes.",
    images: [
      "./images/popstore/pstore1.jpeg",
      "./images/popstore/pstore2.jpeg",
      "./images/popstore/pstore3.jpeg",
      "./images/popstore/pstore4.jpeg",
    ],
    github: "https://github.com/Sumit-Saurabh98/Project-1",
    demo: "https://thriving-conkies-e382ef.netlify.app",
  },
];

// Skills Data with enhanced information
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

// LinkedIn Testimonials Data
const testimonials = [
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7327572646005526528",
  },
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7325052615401111552",
  },
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7298995334876184576",
  },
  {
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7323718097746460672",
  },
];

// Initialize EmailJS
(function () {
  emailjs.init("DFOMar_u6gOUc6KiR"); // Replace with your EmailJS public key
})();

// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenu && navMenu) {
  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Close menu when clicking on nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });
}

// Project Grid functionality - Show all projects by default with auto-carousel
function renderProjects(container, projects) {
  container.innerHTML = "";

  projects.forEach((project, projectIndex) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    // Create carousel slides for all images
    const slidesHtml = project.images.map((imageUrl, imageIndex) => {
      const placeholder = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      return `
        <div class="carousel-slide ${imageIndex === 0 ? 'active' : ''}">
          <img data-src="${imageUrl}" src="${placeholder}" alt="${project.title} Screenshot ${imageIndex + 1}" class="project-image" loading="lazy">
        </div>
      `;
    }).join('');

    // Create carousel indicators
    const indicatorsHtml = project.images.map((_, imageIndex) => {
      return `<div class="carousel-indicator ${imageIndex === 0 ? 'active' : ''}" data-slide="${imageIndex}"></div>`;
    }).join('');

    projectCard.innerHTML = `
      <div class="project-content">
        <div class="project-carousel" data-project="${projectIndex}">
          <div class="carousel-container">
            ${slidesHtml}
          </div>
          <div class="carousel-indicators">
            ${indicatorsHtml}
          </div>
          <div class="carousel-progress">
            <div class="progress-bar"></div>
          </div>
        </div>
        <div class="project-info">
          <div class="project-header">
            <h3>${project.title}</h3>
            <a href="${project.github}" target="_blank" class="github-link" title="View on GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <p>${project.description}</p>
        </div>
      </div>
    `;

    container.appendChild(projectCard);
  });

  // Initialize carousels after rendering
  initializeProjectCarousels();

  // If an IntersectionObserver for images exists on window, observe newly added images
  try {
    const imgs = container.querySelectorAll("img[data-src]");
    if (window.imageObserver && imgs.length) {
      imgs.forEach((img) => window.imageObserver.observe(img));
    }
  } catch (e) {
    // ignore
  }
}

// Initialize auto-carousel functionality for project images
function initializeProjectCarousels() {
  const carousels = document.querySelectorAll('.project-carousel');

  carousels.forEach((carousel) => {
    const container = carousel.querySelector('.carousel-container');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const progressBar = carousel.querySelector('.progress-bar');
    const projectIndex = parseInt(carousel.dataset.project);

    let currentSlide = 0;
    let autoPlayInterval;
    let progressInterval;
    const slideDuration = 3000; // 3 seconds per slide
    const progressDuration = 50; // Update progress every 50ms

    // Function to show specific slide
    function showSlide(slideIndex) {
      // Remove active class from all slides and indicators
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(indicator => indicator.classList.remove('active'));

      // Add active class to current slide and indicator
      slides[slideIndex].classList.add('active');
      indicators[slideIndex].classList.add('active');

      // Reset progress bar
      if (progressBar) {
        progressBar.style.width = '0%';
      }
    }

    // Function to go to next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // Function to go to specific slide
    function goToSlide(slideIndex) {
      currentSlide = slideIndex;
      showSlide(currentSlide);
      resetAutoPlay();
    }

    // Reset and restart auto-play
    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      clearInterval(progressInterval);

      // Reset progress bar
      if (progressBar) {
        progressBar.style.width = '0%';
      }

      // Start auto-play
      autoPlayInterval = setInterval(() => {
        nextSlide();
      }, slideDuration);

      // Start progress animation
      if (progressBar) {
        let progress = 0;
        progressInterval = setInterval(() => {
          progress += (progressDuration / slideDuration) * 100;
          if (progress >= 100) {
            progress = 0;
          }
          progressBar.style.width = progress + '%';
        }, progressDuration);
      }
    }

    // Add click event listeners to indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        goToSlide(index);
      });
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
      clearInterval(autoPlayInterval);
      clearInterval(progressInterval);
    });

    // Resume on mouse leave
    carousel.addEventListener('mouseleave', () => {
      resetAutoPlay();
    });

    // Start auto-play initially
    resetAutoPlay();
  });
}

// Projects navigation functionality
function initializeProjectNavigation() {
  const projectsPrevBtn = document.getElementById('projects-prev');
  const projectsNextBtn = document.getElementById('projects-next');
  const projectsGrid = document.getElementById('projects-container');

  if (projectsPrevBtn && projectsNextBtn && projectsGrid) {
    const scrollAmount = 750; // Card width + gap for new single card view (700px + 50px gap)

    projectsPrevBtn.addEventListener('click', () => {
      projectsGrid.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    projectsNextBtn.addEventListener('click', () => {
      projectsGrid.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    // Update button states based on scroll position
    function updateNavigationButtons() {
      const isAtStart = projectsGrid.scrollLeft <= 0;
      const isAtEnd = projectsGrid.scrollLeft >= projectsGrid.scrollWidth - projectsGrid.clientWidth - 1;

      projectsPrevBtn.style.opacity = isAtStart ? '0.5' : '1';
      projectsPrevBtn.style.cursor = isAtStart ? 'not-allowed' : 'pointer';
      projectsPrevBtn.disabled = isAtStart;

      projectsNextBtn.style.opacity = isAtEnd ? '0.5' : '1';
      projectsNextBtn.style.cursor = isAtEnd ? 'not-allowed' : 'pointer';
      projectsNextBtn.disabled = isAtEnd;
    }

    // Listen for scroll events
    projectsGrid.addEventListener('scroll', updateNavigationButtons);

    // Initial state
    updateNavigationButtons();
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Populate Projects Grid - Show all projects by default
  const projectsContainer = document.getElementById("projects-container");

  // Render all projects
  if (projectsContainer) {
    renderProjects(projectsContainer, projects);
  }

  // Initialize project navigation buttons
  initializeProjectNavigation();

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
              <h3>${experience.title} <span class="at">@ ${
        experience.company
      }</span></h3>
              <p class="location">${experience.location}</p>
            </div>
            <div class="company-right">
              ${
                experience.logo
                  ? `<img class="company-logo" src="${experience.logo}" alt="${experience.company} logo" loading="lazy"/>`
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

  // Populate Skills with enhanced design
  const skillsContainer = document.getElementById("skills-container");
  const skillCategories = document.querySelectorAll(".skill-category");

  function renderSkills(category = "all") {
    skillsContainer.innerHTML = "";

    const filteredSkills =
      category === "all"
        ? skills
        : skills.filter((skill) => skill.category === category);

    filteredSkills.forEach((skill, index) => {
      const skillItem = document.createElement("div");
      skillItem.className = "skill-item";
      skillItem.style.animationDelay = `${index * 0.1}s`;

      skillItem.innerHTML = `
        <div class="skill-icon">
          <i class="${skill.icon}"></i>
        </div>
        <h3 class="skill-name">${skill.name}</h3>
        <div class="skill-level">
          <div class="skill-level-fill" style="width: 0%;"></div>
        </div>
        <div class="skill-percentage">${skill.level}%</div>
      `;

      skillsContainer.appendChild(skillItem);

      // Animate progress bar after a delay
      setTimeout(() => {
        const progressBar = skillItem.querySelector(".skill-level-fill");
        if (progressBar) {
          progressBar.style.width = `${skill.level}%`;
        }
      }, 100 + index * 100);
    });
  }

  // Skill category filtering
  if (skillCategories) {
    skillCategories.forEach((category) => {
      category.addEventListener("click", () => {
        // Update active category
        skillCategories.forEach((cat) => cat.classList.remove("active"));
        category.classList.add("active");

        // Filter skills
        const categoryType = category.dataset.category;
        renderSkills(categoryType);
      });
    });
  }

  // Initial render
  renderSkills();

  // Populate LinkedIn Testimonials
  const postsContainer = document.getElementById("posts-container");
  if (postsContainer && testimonials.length > 0) {
    testimonials.forEach((testimonial) => {
      const linkedinCard = document.createElement("div");
      linkedinCard.className = "linkedin-card";

      linkedinCard.innerHTML = `
        <iframe
          src="${testimonial.embedUrl}"
          class="linkedin-iframe"
          height="500"
          width="100%"
          frameborder="0"
          allowfullscreen=""
          title="Embedded LinkedIn testimonial"
        ></iframe>
      `;

      postsContainer.appendChild(linkedinCard);
    });
  }

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

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      emailjs
        .send("service_853w7fp", "template_o6pmx7s", templateParams)
        .then(
          function (response) {
            showMessage(
              "Message sent successfully! I'll get back to you soon.",
              "success"
            );
            contactForm.reset();
          },
          function (error) {
            showMessage("Failed to send message. Please try again.", "error");
          }
        )
        .finally(() => {
          // Restore button state
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
        // Close mobile menu after clicking
        if (navMenu && mobileMenu) {
          navMenu.classList.remove("active");
          mobileMenu.classList.remove("active");
        }
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "none";
    }

    lastScrollY = currentScrollY;
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe sections for animations
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Observe project cards, skill items, timeline items, and linkedin cards for staggered animations
  document
    .querySelectorAll(
      ".project-card, .skill-item, .stat-item, .timeline-item, .linkedin-card"
    )
    .forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
      observer.observe(item);
    });

  // Add active nav link highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const highlightNavLink = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
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

  window.addEventListener("scroll", highlightNavLink);

  // Initialize active nav link on page load
  highlightNavLink();

  // Lazy loading for project images
  window.imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          window.imageObserver.unobserve(img);
        }
      }
    });
  });

  // Apply lazy loading to images that will be created
  setTimeout(() => {
    document.querySelectorAll("img[data-src]").forEach((img) => {
      if (window.imageObserver) window.imageObserver.observe(img);
    });
  }, 100);
});
