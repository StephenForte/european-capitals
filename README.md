# European Capitals Quiz

An interactive browser quiz that tests knowledge of European countries and their capital cities. Built with plain HTML, CSS, and ES modules — no build step required to play.

## Features

- **25 European countries** with flags and population figures
- **10-question quiz** with a final score and per-question summary
- **Practice mode** — infinite questions, or an optional limit (1–25)
- **Multiple choice** with immediate correct/incorrect feedback
- **Score and progress** tracking (gated “Next” until you answer)
- **Responsive layout** for desktop and mobile
- **Client-side hardening** — CSP, sanitized player names, DOM-safe results rendering

## How to play

1. Open `index.html` in a modern browser (or serve the folder locally).
2. Enter your name (optional).
3. Choose **Start 10-Question Quiz**, or **Practice Mode** (defaults to a question limit; optional no-limit mode).
4. Pick the capital from four options, then continue to the next question.
5. Review your summary at the end. In no-limit practice, use **End practice** when you want to stop.

## Getting started

```bash
git clone https://github.com/StephenForte/european-capitals.git
cd european-capitals
open index.html
```

No install is required to play. Use a local static server if your browser restricts ES modules from `file://`:

```bash
npx serve .
```

## Tests

Unit tests cover quiz helpers (shuffle, options, scoring, modes) and country data.

```bash
npm install
npm test
```

Watch mode:

```bash
npm run test:watch
```

## Project structure

| File | Role |
|------|------|
| `index.html` | Markup and CSP |
| `styles.css` | Atlas-inspired UI |
| `countries.js` | Country dataset |
| `quiz.js` | Pure quiz engine (testable) |
| `script.js` | DOM / UI wiring |
| `tests/` | Vitest unit tests |

## Technologies

- HTML5, CSS3, JavaScript (ES modules)
- [FlagCDN](https://flagcdn.com/) for flag images
- [Vitest](https://vitest.dev/) for unit tests (dev only)

## Browser support

Chrome, Firefox, Safari, Edge, and other evergreen browsers with ES module support.

## License

MIT — see repository license if present.

## Author

**Stephen Forte** — [GitHub](https://github.com/StephenForte)
