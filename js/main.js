/* ==========================================================================
   MAIN
   Builds the Journey and Skills sections, watches the profile photo,
   and reveals sections as they scroll into view.
   ========================================================================== */

const timeline = document.getElementById("timeline");
const skillsGrid = document.getElementById("skillsGrid");

/* ---------- Journey ---------- */

portfolioData.timeline.forEach(function (item) {
  const element = document.createElement("li");
  element.className = "timeline-item reveal";

  const hoverItems = (item.hoverItems || [])
    .map(function (detail) {
      return (
        '<div class="journey-pop-item">' +
          '<span class="journey-pop-label">' + detail.label + '</span>' +
          '<h4>' + detail.title + '</h4>' +
          '<p>' + detail.text + '</p>' +
        '</div>'
      );
    })
    .join("");

  element.innerHTML =
    '<div class="timeline-content">' +
      '<p class="timeline-label">' + item.label + "</p>" +
      "<h3>" + item.title + "</h3>" +
      "<p>" + item.text + "</p>" +
      (item.hoverItems ? '<span class="journey-hover-hint">Hover for details <span>↗</span></span>' : '') +
    '</div>' +
    (item.hoverItems ?
      '<aside class="journey-popover" aria-hidden="true">' +
        '<div class="journey-pop-head">' +
          '<span>' + item.hoverTitle + '</span>' +
          '<span class="journey-pop-dot"></span>' +
        '</div>' +
        '<div class="journey-pop-body">' + hoverItems + '</div>' +
      '</aside>' : '');

  timeline.appendChild(element);
});

/* ---------- Skills ---------- */

const skillIconUrls = {
  html5: "assets/images/skills/html5.svg",
  css3: "assets/images/skills/css3.svg",
  javascript: "assets/images/skills/javascript.svg",
  python: "assets/images/skills/python.svg",
  flask: "assets/images/skills/flask.svg",
  sqlalchemy: "assets/images/skills/sqlalchemy.svg",
  sqlite: "assets/images/skills/sqlite.svg",
  github: "assets/images/skills/github.svg",
  vscode: "assets/images/skills/vscode.svg",
  figma: "assets/images/skills/figma.svg",
  cisco: "assets/images/skills/cisco.svg",
  canva: "assets/images/skills/canva.svg",
  responsive: "assets/images/skills/responsive.svg",
  sql: "assets/images/skills/sql.svg",
  database: "assets/images/skills/database.svg",
  system: "assets/images/skills/system.svg",
  design: "assets/images/skills/design.svg"
};

const fallbackSkillMarks = {};

portfolioData.skills.forEach(function (group) {
  const row = document.createElement("div");
  row.className = "skill-row skill-stack-row reveal";

  const cards = group.items
    .map(function (item) {
      const icon = skillIconUrls[item.icon]
        ? '<img src="' + skillIconUrls[item.icon] + '" alt="" loading="lazy">'
        : '<span class="skill-icon-fallback">' + (fallbackSkillMarks[item.icon] || "IT") + '</span>';

      return (
        '<article class="skill-card" tabindex="0">' +
          '<div class="skill-card-icon ' + item.tone + '">' + icon + '</div>' +
          '<h4>' + item.name + '</h4>' +
          '<span class="skill-card-arrow">↗</span>' +
        '</article>'
      );
    })
    .join("");

  row.innerHTML =
    '<div class="skill-category-copy">' +
      '<h3>' + group.category + '</h3>' +
      '<p>' + group.description + '</p>' +
    '</div>' +
    '<div class="skill-card-grid">' + cards + '</div>';

  skillsGrid.appendChild(row);
});

/* ---------- Profile photo fallback ---------- */

document.querySelectorAll(".hero-photo img").forEach(watchImage);

/* ---------- Footer year ---------- */

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Scroll reveal ---------- */

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(function (element) {
  revealObserver.observe(element);
});


/* ---------- Hero typewriter ---------- */

const typingRole = document.getElementById("typingRole");

if (typingRole) {
  const roles = [
    "Information Technology Student / Aspiring IT Professional",
    "Web Developer in Progress",
    "System Analysis & UI/UX Enthusiast"
  ];

  let roleIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  function typeRole() {
    const currentRole = roles[roleIndex];

    if (deleting) {
      characterIndex -= 1;
    } else {
      characterIndex += 1;
    }

    typingRole.textContent = currentRole.slice(0, characterIndex);

    let delay = deleting ? 38 : 72;

    if (!deleting && characterIndex === currentRole.length) {
      delay = 1700;
      deleting = true;
    } else if (deleting && characterIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 450;
    }

    window.setTimeout(typeRole, delay);
  }

  typeRole();
}

/* ---------- Light / dark theme ---------- */

const themeButton = document.getElementById("themeButton");
const themeIcon = document.querySelector(".theme-icon");

function applyTheme(light) {
  document.documentElement.classList.toggle("light-theme", light);

  if (themeButton) {
    themeButton.setAttribute("aria-pressed", String(light));
  }

  if (themeIcon) {
    themeIcon.textContent = light ? "☀" : "☾";
  }
}

if (themeButton) {
  const savedTheme = localStorage.getItem("angela-portfolio-theme");
  applyTheme(savedTheme === "light");

  themeButton.addEventListener("click", function () {
    const light = !document.documentElement.classList.contains("light-theme");
    applyTheme(light);
    localStorage.setItem("angela-portfolio-theme", light ? "light" : "dark");
  });
}
