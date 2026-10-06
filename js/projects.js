/* ==========================================================================
   PROJECTS
   Builds the project showcase from portfolioData.projects (js/data.js)
   and handles the "View details" dialog.
   ========================================================================== */

const projectGrid = document.getElementById("projectGrid");
const projectDialog = document.getElementById("projectDialog");

setupDialog(projectDialog);

function tagsHTML(tags, className) {
  return tags
    .map(function (tag) {
      return '<li class="' + className + '">' + tag + "</li>";
    })
    .join("");
}

function openProjectDetails(project) {
  document.getElementById("modalCategory").textContent = project.category;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalFullTitle").textContent = project.fullTitle;
  document.getElementById("modalDescription").textContent = project.short;
  document.getElementById("modalProblem").textContent = project.problem;
  document.getElementById("modalSolution").textContent = project.solution;
  document.getElementById("modalTags").innerHTML = tagsHTML(project.tags, "tag");
  openDialog(projectDialog);
}

portfolioData.projects.forEach(function (project) {
  const card = document.createElement("article");
  card.className = "project reveal";

  const visitButton = project.url
    ? '<a class="button" href="' + project.url + '" target="_blank" rel="noopener noreferrer">Visit project</a>'
    : "";

  card.innerHTML =
    '<div class="project-media">' +
      '<button type="button" class="image-frame project-image" data-image-frame ' +
        'data-placeholder="' + project.image + '" ' +
        'aria-label="View larger screenshot of ' + project.title + '">' +
        '<img src="' + project.image + '" alt="Screenshot of ' + project.title + '" ' +
          'width="1600" height="1000" loading="lazy" decoding="async">' +
        '<span class="zoom-hint" aria-hidden="true">View larger</span>' +
      "</button>" +
    "</div>" +
    '<div class="project-info">' +
      '<p class="project-category">' + project.category + "</p>" +
      "<h3>" + project.title + "</h3>" +
      '<p class="project-desc">' + project.short + "</p>" +
      '<ul class="tags">' + tagsHTML(project.tags, "tag") + "</ul>" +
      '<div class="project-actions">' +
        '<button type="button" class="button primary" data-details>View details</button>' +
        visitButton +
      "</div>" +
    "</div>";

  const image = card.querySelector("img");
  const imageButton = card.querySelector(".project-image");

  watchImage(image);

  imageButton.addEventListener("click", function () {
    openLightbox(project.image, "Screenshot of " + project.title, project.fullTitle);
  });

  card.querySelector("[data-details]").addEventListener("click", function () {
    openProjectDetails(project);
  });

  projectGrid.appendChild(card);
});
