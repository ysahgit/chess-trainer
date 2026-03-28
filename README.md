# ♟ Chess Repertoire Trainer

A lightweight, single-file Progressive Web App for drilling chess opening repertoires. No account, no server, no install required — just open and play.

---

## How It Works

Select a built-in repertoire (or load your own PGN) and the app immediately starts a **drill session** — lines are shuffled randomly and you play through each one against the book. Wrong moves snap back instantly so you can try again. Once every line is completed the drill resets automatically.

---

## Features

### Drill Mode
- Lines are randomly shuffled on every new session
- Opponent book moves play instantly — no artificial delays
- Wrong moves snap back with no interruption to flow
- Only the **first mistake per line** counts as an error
- Status bar shows a live **clean / total** fraction (e.g. `4 / 6`)
- ↺ **Reset** reshuffles all lines, resets the board and all counters

### Sidebar — Active Session
Once a repertoire is loaded the sidebar switches to a focused training view:
- **← Back** returns to the repertoire list
- **Play as** toggle (White / Black) — board flips instantly
- **Clean / Errors / Accuracy** counters update live as you drill
- **Move list** tracks your position in the current line
- **Progress bar** shows lines completed out of total lines in the drill
- **✏️ Edit** button opens the PGN editor for the active repertoire

### Built-in Repertoires
Six opening repertoires load instantly with one click:

| Name | Description |
|------|-------------|
| JBV | Jobava main lines |
| JSL | Jobava sidelines |
| Scam | Modern Scandinavian |
| QGA | Queen's Gambit Accepted |
| QGD | Queen's Gambit Declined |
| Caro | Caro-Kann Defence |

### Editing Built-in Repertoires
Every built-in repertoire can be customised directly in the app:
- Click **✏️** in the active sidebar to open the PGN editor
- Edit the PGN in the resizable modal and click **💾 Save & Load**
- Changes are stored in your browser (`localStorage`) and persist across sessions
- **↺ Reset to default** restores the original lines at any time
- Customised repertoires are highlighted in gold

### Loading Your Own PGN
- **📂 Open file** — load any `.pgn` or `.txt` file from your device
- **Paste text** — paste raw PGN into the built-in textarea
- Supports two formats:
  - Standard PGN with `[Event]` headers (one game per line)
  - Custom `#`-prefixed heading format used by the built-in repertoires

### Board & Interaction
- Interactive drag-and-drop board powered by [cm-chessboard v8](https://github.com/shaack/cm-chessboard)
- Legal move dots shown on piece selection
- Promotion dialog for pawn promotions
- Illegal moves (dragging to a non-legal square) are silently ignored — no penalty
- Annotations from PGN `{comments}` shown as coaching notes during the line

### Sound Effects
Four audio cues (`.ogg`): `move`, `capture`, `done`, `wrong`

### Progressive Web App (PWA)
- Installable on desktop and mobile
- Full offline support via Service Worker (network-first for HTML, cache-first for assets)
- Responsive layout — bottom drawer on mobile for settings

---

## Getting Started

### Option 1 — Open directly in a browser
```
open index.html
```
An internet connection is needed on first load to fetch CDN assets. The Service Worker then caches everything for offline use.

### Option 2 — Serve locally (recommended for PWA install)
```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .
```
Then visit `http://localhost:8080`.

### Option 3 — Deploy to a static host
Upload to GitHub Pages, Netlify, Vercel, or any static host. No build step needed.

---

## File Structure

```
chess-trainer-main/
├── index.html        # Entire app — HTML, CSS, and JavaScript in one file
├── manifest.json     # PWA manifest
├── sw.js             # Service Worker for offline caching
└── sounds/
    ├── capture.ogg
    ├── done.ogg
    ├── move.ogg
    └── wrong.ogg
```

---

## Adding Your Own Repertoire

### Standard PGN
Export from Lichess Studies, ChessBase, etc. Each `[Event]` game becomes one drill line.

### Custom `#` format
```
# My Repertoire

#1 Line Name
1. e4 e5 2. Nf3 Nc6 3. Bb5

#2 Another Line {This comment appears as a coaching note}
1. e4 c5 2. Nf3 d6
```

---

## Dependencies

All loaded via CDN — no `npm install` required.

| Library | Version | Purpose |
|---------|---------|---------|
| [chess.js](https://github.com/jhlywa/chess.js) | 1.3.0 | Chess rules, move validation, FEN/PGN parsing |
| [cm-chessboard](https://github.com/shaack/cm-chessboard) | 8.7.8 | Interactive SVG board UI |

---

## Browser Support

Requires ES Modules and `importmap` support: Chrome 89+, Firefox 108+, Safari 16.4+. Service Worker requires HTTPS or `localhost`.

---

## License

*(Add your license here)*
