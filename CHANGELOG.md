# Novità di Volante 3

## V2.2.0 — 26/11/2026
- Volante-3 mono, vista Mac: pannello nero in stile synth anni '70, con le sezioni da sinistra a destra e il nome sotto (Controlli, Oscillatori, Mixer, Modificatori, Uscita, Ritmo), pannello leggermente inclinato.
- Mixer come sugli strumenti originali: interruttori colorati e livelli dei tre oscillatori spostati nel mixer (solo vista Mac).
- Fila dei passi del sequencer sempre visibile sopra la tastiera: tocca un passo per accenderlo o spegnerlo, il LED segue il passo che suona, ▶ SEQ avvia il sequencer.
- Banchi del mono: 5 banchi da 8 suoni (Sirene e allarmi, Inseguimenti, Solisti, Bassi, Rumori e FX) con SALVA, SALVA IN… e FABBRICA. Gli 8 suoni di prima sono nei banchi, più 32 suoni nuovi.
- Nuovo suono "Corsa nel tunnel" (banco Inseguimenti): sequenza originale a 8 passi a 165 BPM, filtro risonante che si apre e si chiude, eco.
- I tasti ◀ ▶ del programma sulla tastiera MIDI scorrono anche i suoni del mono.

## V2.1.0 — 26/11/2026
- Scelta della lingua sotto ACCENDI: italiano (predefinito) o inglese. Volante ricorda la scelta.
- In inglese si traducono tasti, manopole, sezioni e messaggi; i nomi dei suoni, dei banchi e dei giri restano in italiano.
- Tolto `app/poly-worklet.js`: il motore del Poli 8 è già dentro `index.html`.

## V2.0.0 — 26/11/2026
- Volante diventa un'app per Mac (Electron): finestra propria, icona nel Dock.
- MIDI e SysEx sempre permessi, senza avvisi del browser.
- Schermo sempre acceso mentre Volante è aperto.
- REC e backup propongono di salvare in Musica/Volante; menu "Apri cartella registrazioni".
- Audio e clock non rallentano quando la finestra è in secondo piano.

## V1.9.0 — 26/11/2026 (ultima versione per browser)
- Vista Mac: pannello completo senza schede e senza scorrere, che si adatta alla finestra.
- Fila live: 8 manopole grandi uguali alle manopole 1–8 della tastiera, su mono e Poli 8; girano da sole quando cambi suono.
- Poli 8: nuovo nome del polifonico, tasto BANCHI.
- Basso: corde disegnate con la nota suonata, manopole numerate, menu GIRO con 30 giri e tasto PLAY.
- Tastiera a 4 ottave sul computer (3 con finestra stretta).
- Z/X cambiano l'ottava della tastiera del computer su tutti gli strumenti.
- Sul telefono resta la vista a schede.

## Prima della V1.9.0
- Synth mono a 3 oscillatori, filtro 24 dB, arpeggiatore e sequencer.
- Drumpad a 8 pad e 10 programmi, effetti e scene, campione TRIVELLA.
- Poli 8 a 8 voci con 40 suoni in 5 banchi.
- Basso con 20 preset.
- MIDI learn, controlli condivisi, display della SL MkIII, REC in WAV, backup.
