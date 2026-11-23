# Hannah Robin — Mechanical Engineering Portfolio (Version 3)

A light, modern, responsive, static engineering portfolio built from Hannah's project descriptions and supplied images.

## How to open

1. Unzip this archive.
2. Open `hannah-engineering-portfolio/index.html` in Chrome, Safari, or Firefox.
3. Use the navigation to open project case studies and the dedicated Leadership & Service page.

No installation, account, or coding tools are required to view it. The website uses HTML/CSS/JavaScript, with no third-party dependencies.

## What's included

- Responsive homepage with headshot and eight project cards
- Eight technical case studies: roll cage FEA, steering-arm machining, fiber testing, PID robot, line-following robot, microstructured cube, Hill-model literature review, nerve-guidance scaffold
- Separate Leadership & Service page covering dynaMIT, Camp Kesem, teaching, martial arts, Salvation Army volunteering and solar car media/safety work
- Uploaded project photographs, actual CAD/FEA figures, microscopy/results plots, and browser-ready balancing-robot video
- Resume PDF (as supplied by user), downloadable from every page

## How to edit

- `index.html` — homepage, introduction, project summaries, filters and contact
- `leadership.html` — service and leadership descriptions and images
- `projects/*.html` — individual case studies, captions and technical descriptions
- `assets/styles.css` — colors, typography, spacing, responsive styles
- `assets/photos/` — image files used on the website
- `assets/video/pid-stabilizing-robot.mp4` — short PID demo
- `Hannah_Robin_Resume.pdf` — replace with a newly exported resume with the same filename

Open the folder in VS Code, edit a file, save, and refresh `index.html` in your browser.

## Before publishing publicly

- Replace/update the resume if desired. The provided PDF may still include the spelling `Chasiss` and contains a personal phone number, so review it before sharing publicly.
- Add your LinkedIn URL once provided, if you would like it linked from the site.
- Confirm any required attribution for MIT solar-car race photographs selected by you but taken by another photographer. The website identifies them as team photographs, not photographs you took.
- Add original source references/credits for anatomical and research illustrations used in the biomechatronics section, and for collaborator-created proposed titin-model diagrams. Your role is clearly separated from the collaborator's work.
- Your latest message confirms photo permissions/waivers for the Camp Kesem and outreach photographs; maintain any required organizational privacy practices when publishing.
- Only publicly share unpublished research/CAD and team-developed engineering figures if your labs and teams allow public distribution. A visual in this working draft does not establish disclosure permission.
- Optional: connect a domain. This package is compatible with static hosting such as GitHub Pages or Netlify.

## Technical claims and project status

- Roll cage: ongoing mesh refinement and convergence; current results are described as preliminary, not a certified or final safety assessment.
- Nerve scaffold: conceptual academic design from a four-person team; Hannah's own contribution centers on the hexagonal channels/honeycomb scaffold architecture. No fabrication or validation is claimed.
- Biomechatronics: Hannah's contribution is a Hill-model literature review and recommended baseline configuration, not building the collaborator's titin-based model.
- Materials testing: approximate improvement in test validity and reported comparisons are based on Hannah's provided description.

## Deployment

### GitHub Pages
1. Create a new GitHub repository.
2. Upload all the **contents** inside the `hannah-engineering-portfolio` folder (with `index.html` at the repository root).
3. In repository Settings → Pages, configure deployment from the branch's root directory.
4. Visit the published URL, verify all photos and the video, and review the site on mobile.

### Netlify
Drag the folder containing `index.html` into Netlify's manual deployment interface, or deploy the GitHub repository to Netlify. Make sure `index.html` is at the site root.

## Help

The site is a static website, not a visual drag-and-drop builder. It is straightforward to edit with VS Code or with ChatGPT's assistance. No hosting has been configured or launched by this package.


## Version 4 credits and privacy

- Contact: [Hannah Robin on LinkedIn](https://www.linkedin.com/in/hannah-robin-8270a3395/).
- The PDF in this release was replaced with the November 23, 2026 résumé provided by Hannah, with the phone number omitted.
- Solar car event photos (`assets/photos/car-side.webp` and `assets/photos/car-track.webp`): photography by **Cora Kenedy**, American Solar Challenge.
- Titin-model screenshot (`assets/photos/titin-control-proposal.webp`): figure by **John McCullough**.
- Hill-type SEE/SDE/PEE/CE model schematic (`assets/photos/hill-schematic.webp`): diagram by **Hannah Robin**.
- Other research reference images have existing attribution notes, including source-credit-pending captions. Confirm those original sources before public publication.
- **Not published online:** this ZIP is a local-site package until uploaded to a hosting service.
