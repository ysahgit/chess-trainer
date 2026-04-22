# ♟ Repertoire Trainer

A single-file chess opening repertoire trainer that runs entirely in the browser. No installation, no account, no server required — just open `index.html`.

---

## Getting Started

1. Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).
2. On first load the app fetches its chess libraries from a CDN — an internet connection is required once. After that the service worker caches everything and the app works offline.
3. Click any repertoire button to start a practice session immediately.

---

## Interface

### Home Panel

Eight repertoire slots are shown in a grid. Slots 1–6 come pre-loaded with built-in repertoires. Slots 7–8 are empty by default.

- **Tap a filled slot** → starts a training session instantly.
- **Tap ⚙** on a filled slot → opens that slot's settings.
- **Tap +** on an empty slot → opens settings to configure and import a PGN.
- **⬇ Export** (top-right of the logo bar) → downloads a self-contained HTML file with all your repertoires baked in.
- **Load PGN** section at the bottom → load a PGN file or paste PGN text to start a quick practice session without assigning it to a slot.

### Settings Panel

Reached by tapping ⚙ on a slot or + on an empty slot.

| Field | Description |
|---|---|
| Name | Short label shown on the slot button (max 8 chars) |
| Description | Longer description stored with the slot |
| Play as | White or Black |
| Mode | Practice or Drill (see below) |
| Import PGN | Load a `.pgn` or `.txt` file, or paste PGN directly |

- **💾** saves settings and returns to the home grid.
- **▶** saves and starts a session immediately.

All changes are saved automatically to `localStorage` as you type.

### Active Session Panel

Shown in the sidebar while training.

- **←** exits to the home grid.
- **⚙** opens settings for the current repertoire.
- **⚡ Analyse** opens the current line in Lichess analysis in a new tab, at the current board position.
- The repertoire title (from the first `#` header line in the PGN file) is shown below the slot name.
- **Moves** section shows all moves in the current line. Click **Copy** to copy the full move sequence to the clipboard. Text is also directly selectable.

---

## Training Modes

### 📖 Practice Mode

Lines are played in order. When moving from one line to the next, shared opening moves are **auto-replayed at 300 ms per move** so you can see where lines diverge without resetting the board from scratch.

- The status bar shows the current line number and its per-line description (the `#` header directly above that line in the file).
- Move annotations in `{curly braces}` override the description in the status bar as each move is reached.
- **‹ ›** step back and forward within the current line. Stepping back marks the line as having an error.
- **⟳** flips the board.
- After completing all lines, any errored lines are replayed until you pass them cleanly.

### 🎯 Drill Mode

Lines are shuffled randomly. Opponent moves play instantly. Only the **›** forward button is shown.

- After completing the full queue a modal shows your score.
- Choose **🎯 Drill errors** to repeat only the lines you made mistakes on, or **Exit** to finish.
- A progress bar and score fraction are shown in the status bar throughout.

---

## PGN File Format

The trainer supports two formats.

### Custom `#` Format (recommended)

```
# Queen's Gambit Accepted | My Repertoire

# Main line
1. d4 d5 2. c4 dxc4 3. e3 Nf6 4. Bxc4

# Exchange variation
1. d4 d5 2. c4 dxc4 3. e3 e5 4. Bxc4 exd4
```

- The **first `#` line** with no moves is the **repertoire title**, shown in the active session panel.
- Each subsequent `#` line before a set of moves is the **line description**, shown in the status bar during training.
- Move annotations in `{curly braces}` are shown in the status bar as each move is played.

### Standard PGN

Any standard PGN file with `[Event "..."]` headers is also accepted. Each game in the file becomes one training line.

---

## Data & Storage

| What | Where |
|---|---|
| Slot settings (name, color, mode…) | `localStorage` key `chess-trainer-params` |
| Imported PGN content | `localStorage` key `chess-trainer-pgn` |
| Built-in repertoires (slots 1–6) | Hardcoded in `BUILTIN_REPS` inside `index.html` |

Because data lives in `localStorage` it is tied to the browser and device. Use **⬇ Export** to generate a portable `chess-trainer.html` with all repertoires and settings baked directly into the HTML — safe to move between devices or share.

> **Note:** Export requires the file to be served over `http://` (e.g. `python3 -m http.server 8080`). It will not work when opened as a `file://` URL.

---

## Slot IDs

All eight slots use uniform IDs `slot1` through `slot8`. There is no special-casing — any slot can hold any repertoire. Slots 1–6 ship with built-in content; slots 7–8 start empty. All behave identically.

---

## Mobile Layout

| Orientation | Layout |
|---|---|
| Portrait (≤ 700 px wide) | Sidebar at top, board below. When a session starts the sidebar hides; **← Exit** and **⚙ Settings** buttons appear above the board. |
| Landscape (≤ 900 px, wider than tall) | 160 px sidebar on the right; board fills the rest. Sidebar back button handles navigation. |
| Desktop | 250 px sidebar on the right. |

---

## Dependencies

Loaded from CDN on first use, then cached by the service worker:

| Library | Version | Purpose |
|---|---|---|
| [chess.js](https://github.com/jhlywa/chess.js) | 1.3.0 | Chess rules & move validation |
| [cm-chessboard](https://github.com/shaack/cm-chessboard) | 8.7.8 | Interactive board rendering |

---

## License

For personal use. Built-in repertoires are the author's own content.
