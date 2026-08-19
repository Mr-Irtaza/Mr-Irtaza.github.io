const PROJECTS_PER_ROW = 3;
const CERTS_PER_ROW    = 3;
const OS_PER_ROW        = 2;

const DATA = {
  profile: {
    name:         "Muhammad Irtaza",
    title:        "WordPress Developer & Front-End Engineer",
    status:       "Open to full-time roles",
    location:     "Rawalpindi, Punjab, Pakistan",
    phone:        "+92 337-6122005",
    email:        "Mr.Irtaza.2005@gmail.com",
    portfolioUrl: "https://mr-irtaza.github.io",
    githubUrl:    "https://github.com/Mr-Irtaza",
    linkedinUrl:  "https://linkedin.com/in/mr-irtaza",
    avatar:       "./assets/Irtaza.JPG",
    bio1: "WordPress and front-end developer with about a year of commercial experience — building membership sites, WooCommerce flows, and Oxygen Builder components for agency and healthcare clients, mostly for the US market.",
    bio2: "Alongside client work I'm building MedHub.pk from scratch — design system, product catalog and front end. Currently picking up React and the MERN stack for projects that outgrow what WordPress can comfortably do."
  },

  skills: [
    { name: "WordPress",              icon: "fa-brands fa-wordpress" },
    { name: "Oxygen Builder",         icon: "fa-solid fa-layer-group" },
    { name: "Elementor",              icon: "fa-solid fa-pencil-ruler" },
    { name: "WooCommerce",            icon: "fa-solid fa-cart-shopping" },
    { name: "ACF (Advanced Custom Fields)", icon: "fa-solid fa-sliders" },
    { name: "HTML5 & CSS3",           icon: "fa-brands fa-html5" },
    { name: "JavaScript (ES6+)",      icon: "fa-brands fa-js" },
    { name: "React.js",               icon: "fa-brands fa-react" },
    { name: "Node.js & Express",      icon: "fa-brands fa-node-js" },
    { name: "MongoDB",                icon: "fa-solid fa-database" },
    { name: "REST API",               icon: "fa-solid fa-plug" },
    { name: "JSON",                   icon: "fa-solid fa-code" },
    { name: "Tailwind CSS",           icon: "fa-brands fa-css3" },
    { name: "Bootstrap",              icon: "fa-brands fa-bootstrap" },
    { name: "jQuery",                 icon: "fa-solid fa-code-branch" },
    { name: "Git & GitHub",           icon: "fa-brands fa-git-alt" },
    { name: "Figma",                  icon: "fa-brands fa-figma" },
    { name: "Lighthouse & SEO",       icon: "fa-solid fa-bolt" },
    { name: "Vanilla JS Handlers",    icon: "fa-solid fa-terminal" },
    { name: "Performance Optimisation", icon: "fa-solid fa-gauge-high" }
  ],


  projects: [
    {
      id: 1, slug: "closemindedphilosophy",
      title: "Close Minded Philosophy", url: "https://closemindedphilosophy.com",
      desc: "Membership site with conditional access rules — content gated by WooCommerce tier, enforced server-side rather than just hiding DOM elements.",
      tags: ["WordPress","Oxygen Builder","WooCommerce","ACF"],
      image: "./Gallery/CMP - 1.png"
    },
    {
      id: 2, slug: "medhub",
      title: "MedHub", url: "https://medhub.pk",
      desc: "Front end and design system for a specialty medicine sourcing platform. Built component library, product catalog structure and page templates from scratch.",
      tags: ["WordPress","Oxygen Builder","WooCommerce","SEO"],
      image: "./Gallery/Medhub - 1.png"
    },
    {
      id: 3, slug: "yourcompanygo",
      title: "Company Go", url: "https://yourcompanygo.com",
      desc: "Ongoing maintenance and component work for the agency's own site — decoupling reusable Oxygen blocks and trimming page weight for faster loads.",
      tags: ["WordPress","Oxygen Builder","Optimization","JS"],
      image: "./Gallery/YCG - 1.png"
    },
    {
      id: 4, slug: "cgbusinesssolutions",
      title: "CG Business Solutions", url: "https://cgbusinesssolutions.com",
      desc: "Corporate site for a digital media agency — portfolio-first layout designed to move visitors toward a contact form quickly.",
      tags: ["WordPress","Oxygen Builder","Custom UI","Responsive"],
      image: "./Gallery/CBS - 1.png"
    },
    {
      id: 5, slug: "yourealifesaver",
      title: "Your Real Life Saver", url: "https://yourealifesaver.org",
      desc: "US non-profit site honouring first responders, with hero profiles and a donation flow built on WooCommerce.",
      tags: ["WordPress","Oxygen Builder","WooCommerce","Non-profit"],
      image: "./Gallery/YRLS - 1.png"
    }
  ],

  openSource: [
    { title: "React-Streaming-App", desc: "Movie discovery and streaming interface built with React, TMDB API, and an Appwrite backend.", url: "https://github.com/Mr-Irtaza/React-Streaming-App" },
    { title: "React-Calculator-App", desc: "Dark-themed calculator built with React — modular component state, keyboard support.", url: "https://github.com/Mr-Irtaza/React-Calculator-App" },
    { title: "School-Management-System", desc: "Cross-platform mobile app for school administration built with Flutter and Firebase auth.", url: "https://github.com/Mr-Irtaza/School-Management-System-Flutter-App" }
  ],

  
  experience: [
    {
      title: "WordPress & Front-End Developer", company: "YourCompanyGo",
      location: "Remote, United States", dates: "09/2025 – Present",
      summary: "Build and maintain WordPress sites with Oxygen Builder and WooCommerce for US agency clients, tuning pages to consistent 90+ Lighthouse scores."
    },
    {
      title: "Field Network Engineer (Intern)", company: "Netkom Communications Technology LLC",
      location: "Rawalpindi, Pakistan", dates: "05/2025 – 08/2025",
      summary: "Installed Huawei rack servers and deployed ATN/QC terminal hardware across a Tier-3 data centre and active regional telecom tower sites."
    }
  ],

  
  certificates: [
    { name: "CS50 — Scratch", issuer: "Harvard University / edX", icon: "fa-solid fa-certificate", done: true, customImage: "./Gallery/1 - CS50S.png" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp", icon: "fa-solid fa-mobile-screen-button", done: false, customImage: "" }, 
    { name: "CS50: Introduction to Computer Science", issuer: "Harvard University / edX", icon: "fa-solid fa-graduation-cap", done: false, customImage: "" },
    { name: "3-Year Software Engineering Diploma", issuer: "Aptech Educational Institute", icon: "fa-solid fa-award", done: false, customImage: "" }
  ]
};

const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const profile      = ref(DATA.profile);
    const skills        = ref(DATA.skills);
    const projects       = ref(DATA.projects);
    const openSource     = ref(DATA.openSource);
    const experience     = ref(DATA.experience);
    const certificates   = ref(DATA.certificates);

    const theme       = ref("light");
    const isScrolled  = ref(false);
    const copyBtnText = ref("Copy email");
    const year        = new Date().getFullYear();
    const lbOverlay   = ref(null);

    const lightbox = ref({ open: false, src: "", alt: "" });

    function openLightbox(src, alt) {
      lightbox.value = { open: true, src, alt };
      document.body.style.overflow = "hidden";
      Vue.nextTick(() => { if (lbOverlay.value) lbOverlay.value.focus(); });
    }
    function closeLightbox() {
      lightbox.value.open = false;
      document.body.style.overflow = "";
    }

    /* Load-more reveal state — one row at a time */
    const visibleProjects   = ref(PROJECTS_PER_ROW);
    const visibleCerts      = ref(CERTS_PER_ROW);
    const visibleOpenSource = ref(OS_PER_ROW);

    function loadMoreProjects()   { visibleProjects.value   = Math.min(visibleProjects.value + PROJECTS_PER_ROW, projects.value.length); }
    function loadMoreCerts()      { visibleCerts.value      = Math.min(visibleCerts.value + CERTS_PER_ROW, certificates.value.length); }
    function loadMoreOpenSource() { visibleOpenSource.value = Math.min(visibleOpenSource.value + OS_PER_ROW, openSource.value.length); }

    function toggleTheme() {
      theme.value = theme.value === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", theme.value);
      localStorage.setItem("theme", theme.value);
    }

    function copyEmail() {
      navigator.clipboard.writeText(profile.value.email).then(() => {
        copyBtnText.value = "Copied ✓";
        setTimeout(() => { copyBtnText.value = "Copy email"; }, 2200);
      });
    }

    onMounted(() => {
      const t = localStorage.getItem("theme");
      if (t) { theme.value = t; document.documentElement.setAttribute("data-theme", t); }
      window.addEventListener("scroll", () => { isScrolled.value = window.scrollY > 30; }, { passive: true });

      setTimeout(() => {
        const splash = document.getElementById("splash-screen");
        if (splash) splash.classList.add("splash-hide");
      }, 450);
    });

    return {
      profile, skills, projects, openSource, experience, certificates,
      theme, isScrolled, copyBtnText, year,
      visibleProjects, visibleCerts, visibleOpenSource,
      loadMoreProjects, loadMoreCerts, loadMoreOpenSource,
      toggleTheme, copyEmail,
      lightbox, lbOverlay, openLightbox, closeLightbox
    };
  }
}).mount("#app");
