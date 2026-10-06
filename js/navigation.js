/* ==========================================================================
   NAVIGATION
   - mobile menu (open/close, Esc, click outside)
   - active section indicator
   - navbar style once the page is scrolled
   ========================================================================== */

const navbar = document.getElementById("navbar");
const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelectorAll("#siteNav a");

function setMenu(open) {
  navbar.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuButton.addEventListener("click", function () {
  setMenu(!navbar.classList.contains("menu-open"));
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    setMenu(false);
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && navbar.classList.contains("menu-open")) {
    setMenu(false);
    menuButton.focus();
  }
});

document.addEventListener("click", function (event) {
  if (!navbar.contains(event.target)) {
    setMenu(false);
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 820) {
    setMenu(false);
  }
});

/* ---------- Active section ---------- */

function setActiveLink(id) {
  navLinks.forEach(function (link) {
    const isActive = link.getAttribute("href") === "#" + id;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

// A section becomes "active" when it crosses the middle of the screen
const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

document.querySelectorAll("main section[id]").forEach(function (section) {
  sectionObserver.observe(section);
});

/* ---------- Scroll state ---------- */

function onScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 8);

  // The Contact section is short, so highlight it when the page reaches the bottom
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) {
    setActiveLink("contact");
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
