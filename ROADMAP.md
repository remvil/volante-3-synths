# Volante 3 · Roadmap

Cose decise o proposte, non ancora fatte. Quando una voce viene fatta passa nel CHANGELOG.

## Prossime

- **Mappatura libera delle tastiere** (bozzetto da mostrare prima): clic su una manopola o un pad nel disegno della tastiera → lista di tutti i comandi di Volante, strumento per strumento → Volante resta in ascolto → giri il controllo vero e resta associato. La mappa guidata di oggi resta come scorciatoia di partenza.
- **Terza tastiera libera**: scheda "TASTIERA 3" nella schermata ? con nome, porta MIDI, numero di tasti, posti per manopole, pad e fader, learn al clic. Compare anche in SUONA DA. Bozzetto sulla canvas.
- **Menu tastiere comuni**: scegli il modello dal menu (MIDI controller diffusi a 25–61 tasti), Volante prepara disegno e mappa di fabbrica, poi si corregge col learn. Riconoscimento automatico dal nome della porta USB.

## Dopo

- **Volante nelle DAW (Ableton, Pro Tools)**
  - Passo 1, veloce: Volante resta un'app separata. Audio verso la DAW con BlackHole (cavo audio virtuale), note dalla DAW col bus MIDI del Mac (IAC), sincronizzazione al tempo della DAW (MIDI clock).
  - Passo 2: plugin VST3 e AU per Ableton (Mac). I motori audio vanno riscritti in C++ (es. JUCE); il pannello può restare in HTML. Build gratis su GitHub con runner macOS, installatore .pkg. Si parte dal Mono, poi Basso, Poli 8, Drumpad.
  - Passo 3: plugin AAX per Pro Tools. Serve account sviluppatore Avid e firma PACE/iLok a nome del gruppo.
- STILE 800: blocco ARP/SEQ nello spazio vuoto in alto a destra.
- STILE 800: tastierino 0–9 (4 banchi × 10) o tenere 5 × 8 — da decidere.
- Modalità scaletta (setlist) per il live.
- SL MkIII: sistemare i display.
- Verificare CC79 per il BASSO.
- Rinominare la manopola LFO "Rumore" in "LFO/Rumore".
