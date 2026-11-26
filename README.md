# Volante 3

Synth per il live in stile anni '70: quattro strumenti in una sola app, tutti suonabili da tastiere MIDI.

- **Volante-3**: synth monofonico a 3 oscillatori, con banchi di suoni e fila di controlli live
- **Drumpad**: 8 pad, 10 programmi, con vista EDIT per costruire i suoni
- **Poli 8**: polifonico a 8 voci, con due pannelli a scelta (STILE V e STILE 800)
- **Basso**: 20 preset e 30 giri dimostrativi

Funziona come app per Mac oppure come semplice pagina HTML aperta in Chrome.

## Autore

Ideato e sviluppato da **remvil** ([github.com/remvil](https://github.com/remvil)) per i live della sua band, con l'aiuto di Claude (Anthropic) per il codice.

## Come è fatto

| Parte | Tecnologia |
|---|---|
| Interfaccia e suoni | Un unico file `app/index.html`: HTML, CSS e JavaScript senza librerie esterne |
| Motore audio | Web Audio API; il Poli 8 usa un AudioWorklet dedicato a 8 voci |
| Tastiere | Web MIDI con SysEx: più tastiere insieme, ognuna assegnata a uno strumento, mappatura col learn |
| Memoria | Suoni, banchi e mappature salvati in locale (localStorage e IndexedDB), con backup esportabile |
| App per Mac | Electron: permessi MIDI automatici, schermo sempre acceso, registrazioni in Musica/Volante |
| Lingue | Italiano e inglese |

## Struttura

| Percorso | Cosa contiene |
|---|---|
| `app/index.html` | Tutto Volante: interfaccia, suoni, MIDI, font e campioni incorporati |
| `main.js` | La finestra dell'app Electron |
| `package.json` | Nome, versione e comandi |
| `build/icon.png` | Icona dell'app |
| `CHANGELOG.md` | Cosa cambia in ogni versione |

## Installazione

### Nel browser (senza installare niente)

Apri `app/index.html` con **Google Chrome**, consenti l'accesso ai dispositivi MIDI e premi **ACCENDI**.

### App per Mac

Serve **Node.js** LTS (da https://nodejs.org oppure `brew install node`).

```
git clone https://github.com/remvil/volante-3-synths.git
cd volante-3-synths
npm install
```

Per provarla:
```
npm start
```

Per creare l'app installabile:
```
npm run dist
```

Nella cartella `dist` trovi il file `.dmg` (`-arm64` per Mac Apple Silicon, `-x64` per Mac Intel). Aprilo e trascina **Volante 3** in **Applicazioni**.

L'app non è firmata con un certificato Apple: al primo avvio fai clic destro sull'icona › **Apri** › **Apri**.

## Uso veloce

1. Collega le tastiere MIDI e apri Volante 3, poi premi **ACCENDI**.
2. In **SUONA DA** scegli quale strumento suona ogni tastiera.
3. Il tasto **?** mostra la mappa delle tastiere: clicca una manopola o un pad per rimapparlo.
4. Dalla tastiera del computer: **Z** e **X** cambiano ottava.

## Dove finiscono i dati

- **Suoni, banchi, mappature:** dentro l'app (`~/Library/Application Support/Volante 3`) o nel browser. Usa **⬇ ESPORTA BACKUP** per averne una copia e **⬆ IMPORTA BACKUP** per ripristinarla.
- **Registrazioni (REC):** in **Musica/Volante**.

## Versioni

`Vmaggiore.minore.correzione`: le correzioni alzano l'ultimo numero, le novità quello di mezzo, un cambio completo il primo. Ogni rilascio ha il suo tag (es. `v2.4.0`); per tornare a una versione: `git checkout v2.4.0`. Le novità sono in [CHANGELOG.md](CHANGELOG.md).

## Licenza

GNU GPL v3, vedi [LICENSE](LICENSE).
