# ♟ Chess Repertoire Trainer

A lightweight, single-file Progressive Web App for drilling and practising chess opening repertoires. No account, no server, no install required — just open and play.

---

## Features

### Two Training Modes
- **📖 Practice** — Work through repertoire lines one at a time, with feedback after each move. Ideal for learning new openings.
- **🎯 Drill** — Randomly shuffles and cycles through all lines until every one is completed without errors. Tracks a live streak counter for motivation.

### PGN Loading
- **Open file** — Load any `.pgn` or `.txt` file directly from your device.
- **Paste text** — Paste raw PGN into the built-in textarea.
- Supports two PGN formats:
  - Standard PGN with `[Event]` headers
  - Custom `#`-prefixed heading format (used by the built-in repertoires)

### Built-in Repertoires
Six opening repertoires are included out of the box and load instantly:

| Name | Description |
|------|-------------|
| JBV | Jobava main lines |
| JSL | Jobava sidelines |
| Scam | Modern Scandinavian |
| QGA | Queen's Gambit Accepted |
| QGD | Queen's Gambit Declined |
| Caro | Caro-Kann Defence |

### Board & Interaction
- Interactive drag-and-drop board powered by [cm-chessboard v8](https://github.com/shaack/cm-chessboard)
- Visual move markers highlight legal squares on piece selection
- Promotion dialog for pawn promotions
- Play as **White** or **Black** — the board flips accordingly
- Opponent moves are played automatically after a short delay

### Feedback & Scoring
- ✅ Correct move: green flash + sound
- ❌ Wrong move: red flash + sound, piece snaps back
- Sidebar shows **Lines completed**, **Errors**, and **Accuracy %**
- Drill mode shows a 🔥 **streak** counter (current and best)
- Move list panel highlights the current position in the line
- Progress bar shows how far through the current line you are
- **Annotations** — PGN comments in `{braces}` are displayed as coaching notes

### Sound Effects
Four audio cues (`.ogg` format):
- `move` — normal move
- `capture` — piece taken
- `done` — line completed
- `wrong` — incorrect move

### Progressive Web App (PWA)
- Installable on desktop and mobile via the browser's "Add to Home Screen" / install prompt
- Full offline support via a Service Worker (cache-first for assets, network-first for HTML)
- Landscape orientation hint for mobile; responsive layout with a bottom drawer for settings on small screens

---

## Getting Started

### Option 1 — Open directly in a browser
Because everything is in `index.html`, you can open it straight from the filesystem:

```
open index.html
```

All dependencies are loaded from jsDelivr CDN, so an internet connection is needed on first load (or to update the app). Once loaded, the Service Worker caches everything for offline use.

### Option 2 — Serve locally (recommended for PWA install)

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080` in your browser.

### Option 3 — Deploy to any static host
Upload the repository files to GitHub Pages, Netlify, Vercel, or any static hosting provider. No build step needed.

---

## File Structure

```
chess-trainer-main/
├── index.html        # Entire app — HTML, CSS, and JavaScript in one file
├── manifest.json     # PWA manifest (name, icons, display mode)
├── sw.js             # Service Worker for offline caching
└── sounds/
    ├── capture.ogg
    ├── done.ogg
    ├── move.ogg
    └── wrong.ogg
```

---

## Adding Your Own Repertoire

### Using a PGN file
Export your repertoire from any chess tool (Lichess Studies, ChessBase, etc.) as a `.pgn` file, then use the **📂 Open file** button to load it. Each game in the file becomes one training line, named after its `[Event]` tag.

### Using the custom `#` format
You can also write lines in a plain-text format:

```
# My Repertoire Title

#1 Line Name
1. e4 e5 2. Nf3 Nc6 3. Bb5

#2 Another Line
1. e4 c5 2. Nf3 d6
```

Use `{comment text}` inside a line to add an annotation that appears on screen when that move is reached.

---

## Dependencies

All loaded via CDN — no `npm install` required.

| Library | Version | Purpose |
|---------|---------|---------|
| [chess.js](https://github.com/jhlywa/chess.js) | 1.3.0 | Chess rules engine, move validation, FEN/PGN parsing |
| [cm-chessboard](https://github.com/shaack/cm-chessboard) | 8.7.8 | Interactive SVG chessboard UI |

---

## Browser Support

Works in any modern browser that supports ES Modules and `importmap` (Chrome 89+, Firefox 108+, Safari 16.4+). The Service Worker requires HTTPS or `localhost`.

---

## License

*(Add your license here)*
