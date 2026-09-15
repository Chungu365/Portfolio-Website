# Chungu Kapambwe — Portfolio

**Evidence over Opinion**

A single-page portfolio for financial and data analysis work: the services I
deliver, the case studies that prove them, and links through to every
repository behind them. Static HTML — no framework, no build step, nothing to
install.

**Live site:** https://chungu365.github.io/Portfolio-Website/

> **This repository is the complete site.** Everything needed to run, edit,
> rebuild or redeploy it is committed here, including the full-resolution
> source portrait the two cropped images are cut from. Clone it and you have
> the whole thing back — there is no separate local project to lose.

---

## What's on the page

| Section | What it covers |
| --- | --- |
| **Hero** | Positioning, credentials, and the two calls to action |
| **Services** | Financial modelling and valuation, Power BI and dashboards, data analysis and reporting, decision-support tools — each naming the project that proves it |
| **Case studies** | The Global Electronics Retailer dashboard as the featured build, plus six projects linking out to their repositories |
| **About** | Background, certifications, and where I work from |
| **Capabilities** | The three disciplines and the toolkit behind them |
| **Contact** | Email, LinkedIn, GitHub |

## Case studies linked from the site

| Project | Where it goes |
| --- | --- |
| Global Electronics Retailer — Power BI Dashboard | [PowerBI-Global-Electronics-Retailer-Dashboard](https://github.com/Chungu365/PowerBI-Global-Electronics-Retailer-Dashboard) |
| Business Performance Diagnostic | [Business-Performance-Diagnostic-Report](https://github.com/Chungu365/Business-Performance-Diagnostic-Report) |
| Blu Containers — DCF Valuation | [Blu-Container-Financial-Model](https://github.com/Chungu365/Blu-Container-Financial-Model) |
| Fund Growth Illustrator | [Wealth-Calculator-](https://github.com/Chungu365/Wealth-Calculator-) |
| Statistical Exploration in R | [Data-Analyst-Project-Portfolio](https://github.com/Chungu365/Data-Analyst-Project-Portfolio) |
| Tableau Visualisations | [Tableau Public](https://public.tableau.com/app/profile/chungu.kapambwe/vizzes) |

## Structure

```
.
├── index.html                      # The whole site: markup, styles, script
├── readme.md
├── .gitignore
├── .nojekyll                       # Serve files as-is on GitHub Pages
└── assets/
    ├── css/
    │   └── fontawesome.min.css     # Font Awesome 5 Free, woff2 only
    ├── fonts/
    │   ├── fa-brands-400.woff2
    │   ├── fa-regular-400.woff2
    │   └── fa-solid-900.woff2
    └── img/
        ├── avatar.jpg              # Hero portrait (circular crop)
        ├── profile-about.jpg       # About section portrait
        ├── project-powerbi.jpg     # Featured case study screenshot
        └── portrait-source.jpg     # Full-resolution original the crops come from
```

Eleven files. Roughly 1 MB.

## How it's built

- Plain HTML and CSS custom properties. One file, no framework, no build step.
- **Fraunces** for headings and **Manrope** for body text, loaded from Google Fonts.
- **Font Awesome 5 Free** for interface icons, self-hosted in `assets/fonts/`.
- Project cover art is drawn as **inline SVG**, so it stays sharp at any size
  and recolours itself with the theme instead of shipping as fixed images.
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

Everything lives in `index.html`, in numbered and labelled sections:

- **Design tokens** — the `:root` block at the top of `<style>`. Colours,
  radii, and the header height are all set here.
- **Services** — `<section id="services">`. Each offering is one `<article class="service">`.
- **Case studies** — `<section id="work">`. The featured build is
  `.case-featured`; every other project is one `<article class="case">` with its
  illustration inline as SVG directly above the copy.
- **About, capabilities, contact** — their own `id`-labelled sections.
- **Behaviour** — the single `<script>` at the bottom: theme toggle, mobile
  menu, scroll-spy, and the scroll reveal.

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
