# Angela Dalangin — Portfolio

A static portfolio site (HTML, CSS, vanilla JavaScript). No build step, no dependencies.

## Run
Open `index.html` in a browser. For best results use a local server
(for example the VS Code "Live Server" extension).

## Files
- `index.html`: page structure (hero, about, journey, skills, projects, contact)
- `css/style.css`: design tokens, components, animations
- `css/responsive.css`: tablet and mobile layout
- `js/data.js`: **all editable content** (journey, skills, projects, image paths)
- `js/media.js`: image placeholder fallback, dialogs, screenshot lightbox
- `js/navigation.js`: mobile menu and active-section indicator
- `js/projects.js`: builds the project showcase and the details dialog
- `js/main.js`: builds Journey and Skills, scroll reveal
- `assets/images/`: profile photo and project screenshots (see `assets/images/README.md`)

## Things to edit
1. **Images**: replace the placeholder files in `assets/images/` (same filenames).
2. **Contact links**: `index.html`, Contact section (email, GitHub, LinkedIn).
3. **Project links** (optional): set `url` in `js/data.js` to show a "Visit project" button.
4. **Colors**: change the variables at the top of `css/style.css`.

## Projects
1. EcoSphere
2. eKuryente
3. RedSpartan Queue (Student Service Appointment and Queue Management System)


### CV
A starter CV PDF is included at `assets/Angela_Andal_Dalangin_CV.pdf` and is linked from the hero's **Download CV** button. Replace that file with your final CV PDF when ready.
