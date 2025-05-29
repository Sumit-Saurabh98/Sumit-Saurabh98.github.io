// Projects Data - Updated with multiple images for carousel
const projects = [
  {
    title: "RecoredFree",
    description: "A user-friendly platform designed to simplify video sharing and screen recording.",
    images: ["./images/recordfree/rf1.jpeg", "./images/recordfree/rf2.jpeg", "./images/recordfree/rf3.jpeg", "./images/recordfree/rf4.jpeg"],
    github: "https://github.com/Sumit-Saurabh98/recordfree",
    demo: "https://recordfree.kalvium.in/",
  },
  {
    title: "Swipe",
    description: "A full-featured Dating web application with real time chat.",
    images: ["./images/swipe/swi1.png", "./images/swipe/swi2.png", "./images/swipe/swi3.png", "./images/swipe/swi4.png"],
    github: "https://github.com/Sumit-Saurabh98/swipe",
    demo: "https://swipe.kalvium.in/",
  },
  {
    title: "Shopsy",
    description: "A fully-featured E-commerce web application.",
    images: ["./images/shopsy/shop1.png", "./images/shopsy/shop2.png", "./images/shopsy/shop3.png", "./images/shopsy/shop4.png"],
    github: "https://github.com/Sumit-Saurabh98/Shopsy",
    demo: "https://shopsy.kalvium.in/",
  },
  {
    title: "FOMO",
    description: "A full-featured social media web application.",
    images: ["./images/fomo/fo1.png", "./images/fomo/fo2.png", "./images/fomo/fo3.png", "./images/fomo/fo4.png"],
    github: "https://github.com/Sumit-Saurabh98/fomo",
    demo: "https://fomo.kalvium.in/",
  },
  {
    title: "Stupid Code Editor",
    description: "A code editor with syntax highlighting and live preview with multiple language support.",
    images: ["./images//stupid/stup1.png", "./images/stupid/stup2.png", "./images/stupid/stup3.png", "./images/stupid/stup4.png"],
    github: "https://github.com/Sumit-Saurabh98/stupid",
    demo: "https://stupid.kalvium.in/",
  },
  {
    title: "Reflex",
    description: "A modern website for gaming enthusiasts.",
    images: ["./images/reflex/ref1.png", "./images/reflex/ref2.png", "./images/reflex/ref3.png", "./images/reflex/ref4.png"],
    github: "https://github.com/Sumit-Saurabh98/reflex",
    demo: "https://reflex-client.vercel.app/",
  },
  {
    title: "MR Chef",
    description: "A full-featured food delivery web application.",
    images: ["./images/mrchef/chef1.png", "./images/mrchef/chef2.png", "./images/mrchef/chef3.png", "./images/mrchef/chef4.png"],
    github: "https://github.com/Sunil-JJ/mrchefproject",
    demo: "https://mrchef-r4.netlify.app/",
  },
  {
    title: "Flipkart-Clone",
    description: "A full-featured E-commerce web application.",
    images: ["./images/flipkart/flip1.png", "./images/flipkart/flip2.png", "./images/flipkart/flip3.png", "./images/flipkart/flip4.png"],
    github: "https://github.com/hasbealam/flipkart-clone",
    demo: "https://soft-rolypoly-d1ba4d.netlify.app/",
  },
  {
    title: "Stack Overflow",
    description: "It is a clone of Stack Overflow.",
    images: ["./images/stackoverflow/so1.png", "./images/stackoverflow/so2.png", "./images/stackoverflow/so3.png", "./images/stackoverflow/so4.png"],
    github: "https://github.com/Sumit-Saurabh98/stackoverflow",
    demo: "https://stackoverflow-me.netlify.app/",
  },
  {
    title: "Switchy",
    description: "Switchy is website which display data in the form of Charts.",
    images: ["./images/switchy/switchy1.png", "./images/switchy/switchy2.png", "./images/switchy/switchy3.png", "./images/switchy/switchy4.png"],
    github: "https://github.com/Sumit-Saurabh98/switchy",
    demo: "https://switchy-me.netlify.app/",
  },
  {
    title: "Pop Store",
    description: "A clothing website where users can buy cloths for any sizes.",
    images: ["./images/popstore/pstore1.png", "./images/popstore/pstore2.png", "./images/popstore/pstore3.png", "./images/popstore/pstore4.png"],
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

// LinkedIn Posts Data (Add your actual LinkedIn post URLs)
const linkedinPosts = [
  {
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7327572646005526528"
  },
  {
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7325052615401111552"
  },
  {
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7298995334876184576"
  },
  {
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7323718097746460672"
  }
];

// Initialize EmailJS
(function () {
  emailjs.init("DFOMar_u6gOUc6KiR"); // Replace with your EmailJS public key
})();

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close menu when clicking on nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
}

// Project Carousel functionality
class ProjectCarousel {
  constructor(element, images) {
    this.carousel = element;
    this.images = images;
    this.currentSlide = 0;
    this.intervalId = null;
    this.init();
  }

  init() {
    this.createSlides();
    this.createDots();
    this.startAutoSlide();
    this.setupEventListeners();
  }

  createSlides() {
    const container = this.carousel.querySelector('.carousel-container');
    container.innerHTML = '';
    
    this.images.forEach((image, index) => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.innerHTML = `<img src="${image}" alt="Project Screenshot ${index + 1}" class="project-image">`;
      container.appendChild(slide);
    });
  }

  createDots() {
    const dotsContainer = this.carousel.querySelector('.carousel-dots');
    dotsContainer.innerHTML = '';
    
    this.images.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => this.goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  goToSlide(index) {
    this.currentSlide = index;
    const container = this.carousel.querySelector('.carousel-container');
    const translateX = -index * 100;
    container.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    this.carousel.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.goToSlide(this.currentSlide);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  setupEventListeners() {
    // Pause on hover
    this.carousel.addEventListener('mouseenter', () => {
      this.stopAutoSlide();
    });

    // Resume on mouse leave
    this.carousel.addEventListener('mouseleave', () => {
      this.startAutoSlide();
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Populate Projects with Show More/Less functionality
  const projectsContainer = document.getElementById("projects-container");
  const showMoreBtn = document.getElementById("show-more-btn");
  const PROJECTS_PER_PAGE = 6;
  let currentlyShown = PROJECTS_PER_PAGE;
  let projectCarousels = [];

  function renderProjects(count) {
    projectsContainer.innerHTML = "";
    // Clear existing carousels
    projectCarousels.forEach(carousel => carousel.stopAutoSlide());
    projectCarousels = [];
    
    const projectsToShow = projects.slice(0, count);

    projectsToShow.forEach((project, index) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      
      projectCard.innerHTML = `
        <div class="project-carousel" data-project-index="${index}">
          <div class="carousel-container"></div>
          <div class="carousel-dots"></div>
        </div>
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a href="${project.github}" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="${project.demo}" target="_blank">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>
      `;
      
      projectsContainer.appendChild(projectCard);

      // Initialize carousel for this project
      const carouselElement = projectCard.querySelector('.project-carousel');
      const carousel = new ProjectCarousel(carouselElement, project.images);
      projectCarousels.push(carousel);
    });

    // Update show more/less button
    if (showMoreBtn) {
      if (count >= projects.length) {
        showMoreBtn.textContent = "Show Less Projects";
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less Projects';
      } else {
        showMoreBtn.textContent = "Show More Projects";
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Show More Projects';
      }

      // Update button visibility
      showMoreBtn.style.display = projects.length <= PROJECTS_PER_PAGE ? "none" : "block";
    }
  }

  // Event listener for show more/less button
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", function () {
      if (currentlyShown < projects.length) {
        currentlyShown = projects.length;
      } else {
        currentlyShown = PROJECTS_PER_PAGE;
      }
      renderProjects(currentlyShown);
      
      // Scroll to projects section when showing more
      if (currentlyShown === projects.length) {
        document.getElementById('projects').scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    });
  }

  // Initialize projects
  renderProjects(PROJECTS_PER_PAGE);

  // Populate Skills
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer) {
    skills.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.className = "skill-item";
      skillItem.textContent = skill;
      skillsContainer.appendChild(skillItem);
    });
  }

  // Populate LinkedIn Posts
  const postsContainer = document.getElementById("posts-container");
  if (postsContainer && linkedinPosts.length > 0) {
    linkedinPosts.forEach((post) => {
      const postItem = document.createElement("div");
      postItem.className = "post-item";
      postItem.innerHTML = `
        <iframe 
          src="${post.embedUrl}" 
          class="post-iframe"
          height="965"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        </iframe>
      `;
      postsContainer.appendChild(postItem);
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
      ).finally(() => {
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
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
    
    lastScrollY = currentScrollY;
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);

  // Observe sections for animations
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });

  // Observe project cards and skill items for staggered animations
  document.querySelectorAll('.project-card, .skill-item, .stat-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  // Add active nav link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNavLink = () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNavLink);

  // Initialize active nav link on page load
  highlightNavLink();

  // Lazy loading for project images
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  // Apply lazy loading to images that will be created
  setTimeout(() => {
    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }, 100);
});