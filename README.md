# Personal Website

This repository contains the code for my personal website. The source code is hosted in the `gh-pages` branch.

## Projects

- **Data**: All projects live in `data.js` in the `PROJECTS` array. Each project has: `id`, `title`, `dateRange`, `org`, `role`, `impactStatement`, `blurb`, `summary`, `tech`, `highlights`, `links` (e.g. `{ devpost, github }`), `categories`, `featured`, and detail fields: `description`, `problem`, `approach`, `results`, `outcomes`, `learnedNextSteps`, `media`, `sortDate`.
- **Adding a project**: Add a new object to the `PROJECTS` array in `data.js` with the fields above. Use a unique `id` (e.g. `my-new-project`). Set `categories` to one or more of: `Research`, `Hackathons`, `Robotics`, `ML/AI`, `Computer Vision`, `AR/VR`, `Mobile`, `Data`. It will appear on the All Projects page and in the binary Project Lab (index maps 0–15 to projects via modulo).
- **Featured projects**: Set `featured: true` on up to ~4 projects in `data.js`. Those appear in the "Featured Projects" strip on the homepage. To change which are featured, edit the `featured` property on each project in `data.js`.
