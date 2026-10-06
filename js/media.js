/* ==========================================================================
   MEDIA HELPERS
   - watchImage(): shows a labeled placeholder if an image file is missing
   - openDialog(): opens a <dialog> with scroll lock and backdrop/close handling
   - openLightbox(): shows a project screenshot full size
   ========================================================================== */

/* If an image fails to load (for example the file was deleted or renamed),
   mark its frame so CSS shows a "Add <path>" placeholder instead of a broken icon. */
function watchImage(img) {
  const frame = img.closest("[data-image-frame]");
  if (!frame) return;

  img.addEventListener("error", function () {
    frame.classList.add("is-missing");
  });
  img.addEventListener("load", function () {
    frame.classList.remove("is-missing");
  });

  // The error may have already happened before this script ran
  if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) {
    frame.classList.add("is-missing");
  }
}

/* ---------- Dialogs ---------- */

const rootElement = document.documentElement;

function setupDialog(dialog) {
  // Close button(s)
  dialog.querySelectorAll("[data-close]").forEach(function (button) {
    button.addEventListener("click", function () {
      dialog.close();
    });
  });

  // Click on the dark backdrop closes the dialog
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog || event.target.tagName === "FIGURE") {
      dialog.close();
    }
  });

  // Always release the scroll lock, however the dialog was closed (Esc, button, backdrop)
  dialog.addEventListener("close", function () {
    rootElement.classList.remove("scroll-locked");
  });
}

function openDialog(dialog) {
  rootElement.classList.add("scroll-locked");
  dialog.showModal(); // native dialog: traps focus, closes on Esc, returns focus on close
}

/* ---------- Lightbox ---------- */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

setupDialog(lightbox);

function openLightbox(src, alt, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightboxCaption.textContent = caption;
  openDialog(lightbox);
}
