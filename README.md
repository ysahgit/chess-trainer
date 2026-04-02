# ♟ Chess Repertoire Trainer

A lightweight, single-file Progressive Web App for drilling chess opening repertoires. No account, no server, no install required — just open and play.

---

## How It Works

Select a built-in repertoire and the app immediately starts a session based on the repertoire's parameters.
Or load your own PGN file or paste it

---

## Features

### Built-in Repertoires
Eight repertoires load instantly with one click
Each repertoire has 4 internal parameters (Label, Decription, black/white toggle, Drill mode)
The label is at most 4 alphanumeric characters that shows on its button
Repertoire lines are imported from a custom `#`-prefixed heading format
The first # header has the description of the repertoire, after that each line has a preceding # header that describes the line
The eight repertoires buttons background are set according to the black/white toggle.

### Practice mode (Drill Mode off)
- Lines are trained in order
- Opponent book moves play instantly — no artificial delays
- When going to the next line, we autoplay the moves that are similar to the previous line with a 200ms delay
- Wrong moves snap back with no interruption to flow
- Only the **first mistake per line** counts as an error
- Status bar left side should always print the line number and the description/annotation from the imported file
- Status bar right side should show the score (good/total), a progress bar, a forward button, a backward button, a flip button
- When all lines are practiced, automatically restart practicing only the errored lines until all lines are done correctly then exit the mode

### Drill Mode on
- Lines are randomly shuffled on every new session
- Opponent book moves play instantly — no artificial delays
- Wrong moves snap back with no interruption to flow
- Only the **first mistake per line** counts as an error
- Status bar left side should always print the line number and the description/annotation from the imported file
- Status bar right side should show the score (good/total), a progress bar and a forward button
- When all lines are drilled, offer a pop-up asking whether to drill the errored lines or exit drill mode

### Sidebar — Active Session
Once a repertoire is loaded the sidebar switches to a session mode.
- **Clean / Errors / Accuracy** counters update live as you drill
- The current 4 parameters which are saved immediately if change by the user
- **Move list** tracks your position in the current line
- **Progress bar** shows lines completed out of total lines in the drill
- **✏️ Import** 4-digits code protected button to select a file for the repertoire
- Also set the 4 parameters during import
- **← Exit** returns to the repertoire list

### Sidebar — Inactive Session
-Shows the 8 buttons for the repertoires

### Loading Your Own PGN
- **📂 Open file** — load any `.pgn` or `.txt` file from your device
- **Paste text** — paste raw PGN into the built-in textarea

### Board & Interaction
- Interactive drag-and-drop board powered by [cm-chessboard v8](https://github.com/shaack/cm-chessboard)
- Legal move dots shown on piece selection
- Promotion dialog for pawn promotions
- Illegal moves (dragging to a non-legal square) are silently ignored — no penalty
- The # header of the custom file  or annotation from PGN `{comments}` shown in the status bar for each line

### Sound Effects
Four audio cues (`.ogg`): `move`, `capture`, `done`, `wrong`

### Progressive Web App (PWA)
- Installable on desktop and mobile
- Full offline support via Service Worker (network-first for HTML, cache-first for assets)
- Responsive layout — bottom drawer on mobile for settings
