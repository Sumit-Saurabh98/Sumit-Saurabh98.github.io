// Projects Data
const projects = [
  {
    title: "Swipe",
    description: "A full-featured Dating web application with real time chat.",
    image: "./images/swipe.png",
    github: "https://github.com/Sumit-Saurabh98/swipe",
    demo: "https://swipe-production-0dfb.up.railway.app/",
  },
  {
    title: "Shopsy",
    description: "A fully-featured E-commerce web application.",
    image: "./images/shopsy.png",
    github: "https://github.com/Sumit-Saurabh98/Shopsy",
    demo: "https://shopsy-production.up.railway.app/",
  },
  {
    title: "FOMO",
    description: "A full-featured social media web application.",
    image: "./images/fomo.png",
    github: "https://github.com/Sumit-Saurabh98/fomo",
    demo: "https://fomo-lilac.vercel.app/",
  },
  {
    title: "Stupid Code Editor",
    description:
      "A code editor with syntax highlighting and live preview with multiple language support.",
    image: "./images/stupid.png",
    github: "https://github.com/Sumit-Saurabh98/stupid",
    demo: "https://stupid-production.up.railway.app/editor",
  },
  {
    title: "Reflex",
    description: "A modern website for gaming enthusiasts.",
    image: "./images/reflex.png",
    github: "https://github.com/Sumit-Saurabh98/reflex",
    demo: "https://reflex-client.vercel.app/",
  },
  {
    title: "MR Chef",
    description: "A full-featured food delivery web application.",
    image: "./images/mrchef.png",
    github: "https://github.com/Sunil-JJ/mrchefproject",
    demo: "https://mrchef-r4.netlify.app/",
  },
  {
    title: "Flipkart-Clone",
    description: "A full-featured E-commerce web application.",
    image: "./images/flipkart.png",
    github: "https://github.com/hasbealam/flipkart-clone",
    demo: "https://flipkart-clone-eight-pi.vercel.app/",
  },
  {
    title: "Stack Overflow",
    description: "It is a clone of Stack Overflow.",
    image: "./images/stackoverflow.png",
    github: "https://github.com/Sumit-Saurabh98/stackoverflow",
    demo: "https://stackoverflow-me.netlify.app/",
  },
  {
    title: "Switchy",
    description: "Switchy is website which display data in the form of Charts.",
    image: "./images/switchy.png",
    github: "https://github.com/Sumit-Saurabh98/switchy",
    demo: "https://switchy-me.netlify.app/",
  },
  {
    title: "Pop Store",
    description: "A clothing website where users can buy cloths for any sizes.",
    image: "./images/redstore.png",
    github: "https://github.com/Sumit-Saurabh98/Project-1",
    demo: "https://thriving-conkies-e382ef.netlify.app",
  },
];

// Skills Data
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "Node.js",
  "MongoDB",
  "Python",
  "REST API",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "AWS",
  "Java",
  "C++",
  "Docker",
  "Kubernetes",
  "Redis",
  "Monorepo",
  "Deployment",
];

// Initialize EmailJS
(function () {
  emailjs.init("DFOMar_u6gOUc6KiR"); // Replace with your EmailJS public key
})();

// Custom Cursor
const cursorDot = document.querySelector(".cursor-dot");
const maxTrails = 25; // Increased number of trails
const trails = [];
let currentTrailIndex = 0;
let lastX = 0;
let lastY = 0;
let isMoving = false;
let moveTimer;

// Create trail elements
function createTrails() {
  for (let i = 0; i < maxTrails; i++) {
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    document.body.appendChild(trail);
    trails.push(trail);
  }
}

// Initialize trails
createTrails();

// Main cursor movement
window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  // Calculate distance moved
  const distance = Math.hypot(posX - lastX, posY - lastY);

  // Only create trail if mouse moved enough
  if (distance > 5) {
    // Reduced distance threshold
    const trail = trails[currentTrailIndex];
    trail.style.left = `${lastX}px`;
    trail.style.top = `${lastY}px`;

    // Apply animations
    trail.style.animation = `trailFadeOut 0.5s ease forwards, trailColor 0.5s ease infinite`;

    // Clear previous animations after they complete
    setTimeout(() => {
      trail.style.animation = "";
      trail.style.opacity = "0";
    }, 500);

    currentTrailIndex = (currentTrailIndex + 1) % maxTrails;
    lastX = posX;
    lastY = posY;
  }

  if (!isMoving) {
    isMoving = true;
  }

  // Clear previous timer
  clearTimeout(moveTimer);

  // Set new timer
  moveTimer = setTimeout(() => {
    isMoving = false;
  }, 100);
});

// Hide trails when leaving window
document.addEventListener("mouseleave", () => {
  trails.forEach((trail) => {
    trail.style.opacity = "0";
    trail.style.animation = "";
  });
});

document.addEventListener("mouseenter", () => {
  const pos = { x: event.clientX, y: event.clientY };
  lastX = pos.x;
  lastY = pos.y;
});

// Cursor hover effect on interactive elements
const interactiveElements = document.querySelectorAll(
  "a, button, .menu-btn, .project-card, input, textarea"
);

interactiveElements.forEach((el) => {
  el.addEventListener("mouseover", () => {
    cursorDot.classList.add("active");
  });

  el.addEventListener("mouseleave", () => {
    if (!isMoving) {
      cursorDot.classList.remove("active");
    }
  });
});

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    menuBtn.innerHTML = navLinks.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-content")) {
      navLinks.classList.remove("active");
      menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  // Populate Projects with Show More/Less functionality
  const projectsContainer = document.getElementById("projects-container");
  const PROJECTS_PER_PAGE = 6;
  let currentlyShown = PROJECTS_PER_PAGE;

  function renderProjects(count) {
    projectsContainer.innerHTML = "";
    const projectsToShow = projects.slice(0, count);

    projectsToShow.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a href="${project.github}" target="_blank">GitHub</a>
            <a href="${project.demo}" target="_blank">Live Demo</a>
          </div>
        </div>
      `;
      projectsContainer.appendChild(projectCard);
    });

    // Update or create show more/less button
    let showMoreBtn = document.getElementById("show-more-btn");
    if (!showMoreBtn) {
      showMoreBtn = document.createElement("button");
      showMoreBtn.id = "show-more-btn";
      showMoreBtn.className = "btn primary show-more-btn";
      document.querySelector(".projects").appendChild(showMoreBtn);
    }

    if (count >= projects.length) {
      showMoreBtn.textContent = "Show Less";
    } else {
      showMoreBtn.textContent = "Show More";
    }

    // Update button visibility
    showMoreBtn.style.display =
      projects.length <= PROJECTS_PER_PAGE ? "none" : "block";
  }

  // Event listener for show more/less button
  document.addEventListener("click", function (e) {
    if (e.target.id === "show-more-btn") {
      if (currentlyShown < projects.length) {
        currentlyShown = projects.length;
      } else {
        currentlyShown = PROJECTS_PER_PAGE;
      }
      renderProjects(currentlyShown);
    }
  });

  // Initialize projects
  renderProjects(PROJECTS_PER_PAGE);

  // Populate Skills
  const skillsGrid = document.querySelector(".skills-grid");
  skills.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.className = "skill-item";
    skillItem.textContent = skill;
    skillsGrid.appendChild(skillItem);
  });

  // Handle Contact Form
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  const showMessage = (message, type) => {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type} show`;
    setTimeout(() => {
      formMessage.className = "form-message";
    }, 5000);
  };

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_853w7fp", "template_o6pmx7s", templateParams).then(
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
    );
  });

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
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // Intersection Observer for Animations
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    observer.observe(section);
  });
});
