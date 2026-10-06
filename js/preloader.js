/*
============================================================
ANGELA ANDAL DALANGIN — PORTFOLIO PRELOADER
============================================================
*/

(function () {
  "use strict";

  var preloader = document.getElementById("portfolio-preloader");

  if (!preloader) {
    return;
  }

  var startTime = Date.now();
  var minimumDisplayTime = 900;
  var hidden = false;

  function hidePreloader() {
    if (hidden) {
      return;
    }

    hidden = true;

    var elapsed = Date.now() - startTime;
    var remaining = Math.max(0, minimumDisplayTime - elapsed);

    window.setTimeout(function () {
      preloader.classList.add("is-loaded");
      document.body.classList.add("page-loaded");

      window.setTimeout(function () {
        preloader.setAttribute("aria-hidden", "true");
        preloader.style.display = "none";
      }, 700);
    }, remaining);
  }

  if (document.readyState === "complete") {
    hidePreloader();
  } else {
    window.addEventListener("load", hidePreloader, {
      once: true
    });
  }

  /*
    Safety fallback:
    If something takes too long to load, the preloader
    will automatically disappear after 5 seconds.
  */
  window.setTimeout(hidePreloader, 5000);

})();