# Adding your images

Placeholder images are already in this folder with the **final filenames**.
To use your own, just **overwrite the file with the same name**. No code changes needed.

| Your image            | Put it here                                    | Shape / size            |
|-----------------------|------------------------------------------------|-------------------------|
| Profile photo         | `assets/images/profile.jpg`                    | Portrait 4:5, ~800×1000 |
| EcoSphere screenshot  | `assets/images/projects/ecosphere.jpg`         | Landscape 16:10, ~1600×1000 |
| eKuryente screenshot  | `assets/images/projects/ekuryente.jpg`         | Landscape 16:10, ~1600×1000 |
| Queue system screenshot | `assets/images/projects/queue-system.jpg`    | Landscape 16:10, ~1600×1000 |

Tips
- Keep the extension `.jpg`. If your file is `.png`, either convert it to `.jpg`,
  or change the path (see "Where the paths live" below).
- Other sizes still work. Images are cropped to fit (`object-fit: cover`), so
  nothing stretches or breaks the layout.
- Keep files under ~300 KB each so the page loads fast.
- After replacing a file, hard-refresh the browser (Ctrl+Shift+R) to bypass the cache.

## Where the paths live

- Profile photo: `index.html`, the `<img src="assets/images/profile.jpg">` inside `.hero-photo`
  (search for "PROFILE PHOTO").
- Project screenshots: `js/data.js`, one `image: "..."` line per project.

## Adding another project

Copy one project block in `js/data.js`, change the text, and point `image` to
a new file in `assets/images/projects/`. The card is built automatically.
