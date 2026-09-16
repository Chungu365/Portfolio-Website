# Chungu Kapambwe — Portfolio

**Evidence over Opinion**

A five page portfolio for financial and data analysis work. Home and about,
services, selected work, career experience, and contact. Static HTML with no
framework, no build step and nothing to install.

**Live site:** https://chungu365.github.io/Portfolio-Website/

> **This repository is the complete site.** Everything needed to run, edit,
> rebuild or redeploy it is committed here, including the full-resolution
> source portrait the two cropped images are cut from. Clone it and you have
> the whole thing back — there is no separate local project to lose.

---

## Pages

| Page | What it covers |
| --- | --- |
| `index.html` | **Home.** Centred introduction, positioning line, and the about section with certifications and location. |
| `services.html` | **Services.** Financial modelling and valuation, Power BI and dashboards, data analysis and reporting, decision support tools. Each names the project that proves it. |
| `work.html` | **My Work.** The featured Power BI build, six case studies, then capabilities and the toolkit. |
| `experience.html` | **Experience.** Career timeline, education, certifications. |
| `contact.html` | **Get in Touch.** Email, LinkedIn, GitHub. |

Every page carries the same header, navigation and footer. The navigation marks
the current page with `class="is-active"`, set in the markup rather than by
script. Each page ends with a link through to the next one, so the site reads
in order: Home, Services, My Work, Experience, Get in Touch.

## Case studies linked from the site

| Project | Where it goes |
| --- | --- |
| Global Electronics Retailer — Power BI Dashboard | [PowerBI-Global-Electronics-Retailer-Dashboard](https://github.com/Chungu365/PowerBI-Global-Electronics-Retailer-Dashboard) |
| Business Performance Diagnostic | [Business-Performance-Diagnostic-Report](https://github.com/Chungu365/Business-Performance-Diagnostic-Report) |
| Blu Containers — DCF Valuation | [Blu-Container-Financial-Model](https://github.com/Chungu365/Blu-Container-Financial-Model) |
| Compound Interest Calculator | [Wealth-Calculator-](https://github.com/Chungu365/Wealth-Calculator-) |
| Statistical Exploration in R | [Data-Analyst-Project-Portfolio](https://github.com/Chungu365/Data-Analyst-Project-Portfolio) |
| Tableau Visualisations | [Tableau Public](https://public.tableau.com/app/profile/chungu.kapambwe/vizzes) |

## Structure

```
.
├── index.html                      # Home and about
├── services.html
├── work.html
├── experience.html
├── contact.html
├── readme.md
├── .gitignore
├── .nojekyll                       # Serve files as-is on GitHub Pages
└── assets/
    ├── css/
    │   ├── site.css                # The whole design system, shared by all pages
    │   └── fontawesome.min.css     # Font Awesome 5 Free, woff2 only
    ├── js/
    │   └── site.js                 # Theme toggle, mobile menu, scroll reveal
    ├── fonts/
    │   ├── fa-brands-400.woff2
    │   ├── fa-regular-400.woff2
    │   └── fa-solid-900.woff2
    └── img/
        ├── avatar.jpg              # Hero portrait (circular crop)
        ├── profile-about.jpg       # About section portrait
        ├── portrait-source.jpg     # Full resolution original the crops come from
        ├── project-powerbi.jpg     # Featured case study screenshot
        ├── case-diagnostic.jpg     # Card cover, analytical report page 2
        ├── case-dcf.jpg            # Card cover, DCF model cover sheet
        ├── case-rstudio.jpg        # Card cover, RStudio
        ├── case-tableau.jpg        # Card cover, Tableau
        ├── case-fund.jpg           # Card cover, Compound Interest Calculator
        └── case-repo.jpg           # Card cover, "Portfolio"
```

Styles and behaviour live in one place each. Editing `assets/css/site.css`
changes every page at once, and the same is true of `assets/js/site.js`.

Every card cover is a 16:10 JPEG in `assets/img/`, sized 1400 by 875 and run
edge to edge in its card. Swapping one is just dropping a new image in at the
same filename. Four covers are real work (a report page, a model cover sheet,
and the two tool marks); the Compound Interest and Portfolio covers are
typographic panels built from the site's own palette and typefaces.

## How it's built

- Plain HTML and CSS custom properties. One file, no framework, no build step.
- **Fraunces** for headings and **Manrope** for body text, loaded from Google Fonts.
- **Font Awesome 5 Free** for interface icons, self-hosted in `assets/fonts/`.
- **Light by default.** Dark mode follows the operating system, and the toggle
  in the header overrides it either way. The choice is remembered between visits.
- Responsive to roughly 390px wide, keyboard-navigable, and honours
  `prefers-reduced-motion`.

### Colour tokens

Defined once in the `:root` block at the top of the stylesheet. Changing a value
there updates every component that uses it.

| Token | Light | Dark | Used for |
| --- | --- | --- | --- |
| `--brand` | `#0e6e9b` | `#0e6e9b` | Monogram and contact panel — fixed in both themes |
| `--blue` | `#0e6e9b` | `#4fb2da` | Links, icons, accents |
| `--surface` | `#ffffff` | `#0f1720` | Page background |
| `--surface-alt` | `#e2e5e9` | `#141e29` | Alternating section bands |
| `--ink` | `#12212b` | `#eef2f5` | Body text |
| `--accent-warm` | `#b8860b` | `#d8ab3a` | The single warm note in each illustration |

## Running it locally

Open `index.html` in a browser — that is the whole workflow.

To serve it over HTTP instead, which matches how GitHub Pages behaves:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploying

The site is served by GitHub Pages straight from the repository root.

1. Make sure `index.html` sits at the **root of the repository**, not inside a
   subfolder. If you upload through the GitHub web interface, drag the
   *contents* of this folder, not the folder itself.
2. Push to `main`.
3. Go to **Settings → Pages → Build and deployment**.
4. Set **Source** to *Deploy from a branch*, **Branch** to `main`, and
   **Folder** to `/ (root)`.

`.nojekyll` tells Pages to serve the files exactly as committed rather than
running them through Jekyll.

## Making changes

- **Colours, spacing, type** live in the `:root` block at the top of
  `assets/css/site.css`. Changing a token there updates every page.
- **Copy and structure** live in the page each section belongs to. Services are
  `<article class="service">` blocks, case studies are `<article class="case">`,
  and each role on the experience page is an `<article class="job">`.
- **Navigation** is the `<ul class="nav-links">` in every page header, repeated
  in `.mobile-menu`. Adding a page means adding a link to both in all five files.
- **Behaviour** is `assets/js/site.js`: theme toggle, mobile menu and the scroll
  reveal.

A note on the writing: the site copy deliberately avoids dashes and hyphens.
Keep new copy in the same voice, plain and direct.

## Credits

- Icons — [Font Awesome 5 Free](https://fontawesome.com): icons under CC BY 4.0,
  fonts under SIL OFL 1.1, code under MIT.
- Typefaces — [Fraunces](https://fonts.google.com/specimen/Fraunces) and
  [Manrope](https://fonts.google.com/specimen/Manrope), both SIL OFL 1.1.
- Layout, illustrations, and copy are my own.

## Contact

- **Email** — Chungukapambwe.ck@gmail.com
- **LinkedIn** — [chungu-kapambwe](https://www.linkedin.com/in/chungu-kapambwe-214877257/)
- **GitHub** — [@Chungu365](https://github.com/Chungu365)
