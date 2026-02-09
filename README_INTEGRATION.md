
# Integrating Your Real Content (Paul Lewis — Cybersecurity Portfolio)

This pack adds a **Projects** page that loads items from `projects.json` and renders them as cards with filters and search.

## 1) Add these files to your repo
Copy the following into the root of **paullewis.github.io**:

- `projects.html`
- `projects.js`
- `projects.json`
- `style_addon.css`
- `images/` (folder with screenshots)

(Optional) Update your `index.html` navigation to add:
```html
<a href="projects.html">Projects</a>
```

## 2) Populate `projects.json`
Each project supports the following fields:
```json
{
  "title": "string",
  "type": "CTF | Incident Response | SIEM | Vulnerability | GRC | Scripting | Cloud | Blog",
  "tags": ["array","of","tags"],
  "date": "YYYY-MM-DD",
  "description": "short summary",
  "view": "https://link-to-a-live-view-or-html",
  "repo": "https://github.com/paul-.../repo",
  "pdf":  "assets/pdf/your-file.pdf",
  "blog": "https://link-to-blog-post",
  "cover": "images/screenshot.png"
}
```

### Tips
- Put screenshots in `/images` and set `cover` to the file path.
- Upload PDFs (e.g., IR reports) to `/assets/pdf/` and set `pdf` path.
- Use `view` for an HTML report page inside this site (you can create a new `*.html` per project if you want full write‑ups).

## 3) Quick wins — plug in your existing content
- **CTF:** Paste your TryHackMe/HackTheBox write‑up links in `view` or `repo`.
- **IR report:** Export your incident markdown to HTML, save as `ir_case1.html`, and set the `view` link.
- **SIEM:** Link to screenshots in `/images` and add a short explanation.
- **GRC:** Upload a redacted PDF (`/assets/pdf/m365_risk_assessment.pdf`) and set `pdf`.
- **Scripts:** Link to your GitHub repo (`repo` field) and add a short demo note.

## 4) Screenshots
Add PNG/JPG to `/images` and reference them in `cover`. Use 1200×700 or similar.

## 5) Publishing
Commit the changes to `main`. Ensure GitHub Pages is enabled in **Settings → Pages**.

## 6) Need help?
Tell me which projects you want listed and share the links; I can generate an updated `projects.json` for you.
