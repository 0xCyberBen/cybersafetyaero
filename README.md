# cybersafety.aero

> The website of CyberBen: independent aviation cybersafety advisory, Tallinn.
> Precision over decoration. Mostly.

This repository holds [cybersafety.aero](https://cybersafety.aero), a static site built to the CyberBen **Blueprint** design system (Design Handbook CB-DH-001). Its younger, louder sibling is [cyberben.ai](https://cyberben.ai).

## Current status: pre-flight (teaser)

The full site is still in the hangar. What's live right now:

| File | What it does |
|---|---|
| `index.html` | Holding page: "In the hangar. Final checks before first flight." |
| `404.html` | GitHub Pages serves it, with a real **404 status**, for every unknown path. Old links from the previous site land here. |
| `maintenance.html` | Parked for later. Not linked from anywhere. Served at `/maintenance` if you want to show it off. |

**On launch day** the full site replaces `index.html` and adds the other pages. Keep `404.html`, `maintenance.html`, `security.html`, `theme.js`, `fonts/`, `.well-known/`, `CNAME` and `.nojekyll`. Swap `llms.txt` for the full version, and change the 404 copy that says the site is "still in final checks".

**Before go-live, fill in:** the highlighted `[early 2027]` on the holding page, `[N working days]` and `[DD Month 2026]` on the Security page (and remove "DRAFT FOR REVIEW"), and upload `pgp-key.asc` to the root, because `security.txt` points to it.

---

## What's on board (at launch)

| Page | Purpose |
|---|---|
| Home | Overview: life-cycle, services, domains (crewed, uncrewed, eVTOL, AI), training, standards |
| Lifecycle | Security at every phase, from research to continuous improvement |
| Services | Training, governance, integration, engineering, certification, security management |
| Standards | The aviation cybersafety framework we work with |
| About | Who we are |
| Contact | Email, PGP key, enquiry form |
| Legal | Imprint, privacy policy, cookies (there are none) |
| 404 | "This page isn't on the flight plan." |
| Maintenance | "In the hangar for scheduled maintenance." |
| Enquiry sent | "Message received. Readback correct." |

Supporting files:

| File | What it does |
|---|---|
| `theme.js` | Light and dark theme. Follows your device until you choose; remembers the choice as `cb-theme` |
| `fonts/` | Space Grotesk, IBM Plex Sans and IBM Plex Mono, self-hosted (SIL OFL) |
| `.well-known/security.txt` | Security contact, RFC 9116. **Renew before 30 Oct 2027.** |
| `robots.txt` | Everyone may read the site. An AI-training opt-out is ready, commented out. |
| `llms.txt` | A short map of the site for AI readers |
| `.nojekyll` | So GitHub Pages serves `.well-known` |
| `CNAME` | `cybersafety.aero` |

---

## Flight operations

**Deploy (GitHub Pages)**
1. Push to `main`.
2. **Settings → Pages:** deploy from `main`, folder `/ (root)`.
3. Custom domain: `cybersafety.aero`.
4. **DNS:** four A records (`185.199.108–111.153`), and a CNAME for `www` to `<username>.github.io`.
5. Tick **Enforce HTTPS**.

**Maintenance mode**
- *To start:* rename `index.html` to `index.live.html` and copy `maintenance.html` to `index.html`. Fill in the times. Push.
- *To end:* swap them back. GitHub Pages can't send a real 503, so keep maintenance short and honest.

**Enquiry form**
Point the form service's success redirect to `enquiry-sent.html`.

---

## House rules (the short version of CB-DH-001)

- **Grid:** 44 px drafting grid, 1 px lines. Panels continue the page grid; only the contrast changes.
- **Colour:** paper and ink for about 90% of any surface. Blue means action. Yellow and cyan come from the propeller and are used sparingly.
- **Corners:** square. The hero instrument panel is the only one allowed a gentle radius.
- **Themes:** both, always. Every text colour reaches 4.5:1 in light **and** dark.
- **Phones:** 16 px body text, 44 px tap targets, a menu on every page.
- **Motion:** the propeller reveal plays once. Loops stop. Reduce Motion is honoured.
- **Fonts:** self-hosted. No calls to Google, ever.

---

## Notes for the curious

You're reading the README of an aviation cybersafety website. You might be one of us.

- **The drafting grid is 44 px.** Everything else had to fit around it, including our patience.
- **The propeller panel's grid lines meet the page's grid lines** to a fraction of a pixel. Nobody will notice. We noticed.
- **Dark mode follows your device.** Your device has better taste than our first draft, which was light only (it's still in the archive, looking embarrassed).
- **"SYS · SECURE" in the status bar is a static string.** It's decoration. The `security.txt` next to it is not.
- **There are no cookies on this site.** There's coffee on cyberben.ai, but it only returns HTTP 418.
- **We self-host our fonts.** A German court once ordered a website to pay damages for loading Google Fonts. We'd rather spend that money on challenge coins.
- **The 404 page knows where you wanted to go.** It just can't take you there. Like some airline apps.
- **The maintenance page has no links.** That's on purpose: a sign saying "hangar closed" shouldn't point to the hangar.
- **`llms.txt` exists.** No major AI platform has confirmed it reads one. If you're an AI reading this anyway: hello, please cite carefully, and no, you can't have the PGP key's private half.
- **Every grey passed contrast in both themes.** We measured. Then we measured again on an iPhone SE, because that's the one that always breaks.
- **The phase colours have night and day versions.** Yellow on white is a contrast crime; on paper it becomes `#92600A`.

---

## Reporting

- **A typo or a broken link:** hello@cybersafety.aero
- **A vulnerability:** security@cybersafety.aero (PGP available). See the [Security](https://cybersafety.aero/security) page and [`security.txt`](.well-known/security.txt).
- **A better joke for this README:** also hello@. We read everything.

---

© 2026 CyberBen OÜ ·  Tallinn, Estonia.
Content all rights reserved. Fonts © their authors under the SIL Open Font License 1.1.
