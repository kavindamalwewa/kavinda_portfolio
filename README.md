# Kavinda Malwewa — Portfolio

Personal portfolio site for **Kavinda Malwewa**, an IT undergraduate at Rajarata
University of Sri Lanka working in AI/ML, software engineering and QA.

Built with React 19 and Vite 8. No UI framework, no component library and no icon
package — the styling is hand-written CSS and every icon is inline SVG, which keeps
the runtime dependencies down to `react` and `react-dom`.

## Sections

| Section | What it holds |
| --- | --- |
| **Hero** | Intro, rotating role line, links to work and contact |
| **About** | Editorial headline, bio, quick facts, stat tiles |
| **Skills** | Seven grouped cards — languages, AI/ML, frontend & mobile, backend & databases, cloud, QA, tooling |
| **Projects** | Seven projects, six shown by default with the rest behind a toggle; each opens a details dialog |
| **Education** | Degrees and schooling alongside achievements and certifications |
| **Contact** | Copy-to-clipboard details and a working message form |

## Tech

- **React 19** with hooks only — no state library
- **Vite 8** for dev server and build
- **Plain CSS**, one stylesheet per component, with design tokens in `src/index.css`
- **Inline SVG icons** in `src/components/icons/BrandIcons.jsx`
- **Web3Forms** for contact form delivery
- **ESLint 10** with the React Hooks and React Refresh plugins

## Running it

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build into dist/
npm run preview  # serve the build locally
npm run lint     # eslint across the project
```

## Structure

```
public/
  Kavinda-Malwewa-CV.pdf   downloadable CV, served at the site root
src/
  components/              one .jsx + .css pair per section
    icons/BrandIcons.jsx   every icon used in the site
    ProjectArt.jsx         generated SVG cover art for project cards
  data/socials.js          profile links, shared by hero and contact
  hooks/useInView.js       IntersectionObserver hook for scroll reveals
  index.css                design tokens, resets, global utilities
  App.jsx                  section order
```

## Notes

- **Contact form** — `WEB3FORMS_KEY` in `src/components/Contact.jsx` must hold a
  [Web3Forms](https://web3forms.com) access key for the form to deliver. The key is
  public by design; it only routes mail to the registered address.
- **CV** — replace `public/Kavinda-Malwewa-CV.pdf` to update the download. The link
  is built from `import.meta.env.BASE_URL`, so it survives a subpath deploy.
- **Project cover art** is generated SVG. Set `cover` on a project in
  `Projects.jsx` to use a real screenshot instead; it falls back to the art if the
  image fails to load.
