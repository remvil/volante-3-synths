# Volante 3

Volante 3: a '70s-style synth for live playing, with mono synth, drum pad, Poli 8 and bass, all MIDI-controllable. Runs as a single HTML file in Chrome or as an installable Mac app built with Electron.


Strumenti per i live della band: **Volante-3** (synth mono a 3 oscillatori), **Drumpad** (8 pad, 10 programmi), **Poli 8** (polifonico a 8 voci in stile Prophet) e **Basso** (20 preset, 30 giri dimostrativi).

Dalla V2.0.0 Volante 3 è un'app per Mac fatta con Electron: gira con il motore di Chrome al suo interno, quindi MIDI e SysEx funzionano senza avvisi e senza dover aprire il browser.

## Cosa c'è in questa cartella

| Percorso | Cosa contiene |
|---|---|
| `app/index.html` | Tutto Volante: interfaccia, suoni, MIDI, font e campioni incorporati. Funziona anche da solo in Chrome |
| `main.js` | La finestra dell'app: permessi MIDI, schermo sempre acceso, registrazioni in Musica/Volante |
| `package.json` | Nome, versione e comandi dell'app |
| `build/icon.png` | Icona dell'app |
| `versioni/volante-v1.9.0-browser.html` | Ultima versione per browser (V1.9.0), da tenere come riserva |
| `CHANGELOG.md` | Cosa cambia in ogni versione |

## Prima volta sul Mac

1. Installa **Node.js** versione LTS da https://nodejs.org (oppure, se usi Homebrew, `brew install node`).
2. Apri il **Terminale** ed entra nella cartella del progetto, per esempio:
   ```
   cd ~/Downloads/volante-app
   ```
3. Installa quello che serve (solo la prima volta, scarica circa 200 MB):
   ```
   npm install
   ```

## Provare l'app

```
npm start
```

Si apre la finestra di Volante. Collega la tastiera MIDI prima di premere ACCENDI.

## Creare l'app installabile

```
npm run dist
```

Dopo qualche minuto nella cartella `dist` trovi il file `Volante 3-2.1.0-arm64.dmg` (o `-x64` sui Mac Intel). Aprilo e trascina **Volante 3** in **Applicazioni**.

L'app non è firmata con un certificato Apple. Se macOS la blocca al primo avvio, fai clic destro sull'icona › **Apri** › **Apri**: dalla volta dopo si apre normalmente.

## Dove finiscono i dati

- **Suoni, banchi, mappature MIDI:** salvati dentro l'app (cartella `~/Library/Application Support/Volante 3`). Usa ⬇ ESPORTA BACKUP nel synth per averne una copia.
- **Registrazioni (REC) e backup:** l'app propone di salvarli in **Musica/Volante**. Dal menu **Volante › Apri cartella registrazioni** la apri al volo.

I suoni salvati nella versione browser non passano da soli nell'app: esporta il backup dal browser e importalo nell'app con ⬆ IMPORTA BACKUP.

## Versioni

`Volante 3 Vmaggiore.minore.correzione`: le correzioni piccole alzano l'ultimo numero (V2.0.1), le novità quello di mezzo (V2.1.0), un cambio completo il primo (V3.0.0).

## Come lavoriamo (rami e versioni)

| Ramo | A cosa serve |
|---|---|
| `feature/nome-novita` | Un ramo per ogni novità, per esempio `feature/mono-ui-minimoog` |
| `development` | Raccoglie le novità finite: è la versione da provare giorno per giorno |
| `test` | Versione candidata da collaudare con calma, per esempio alle prove |
| `main` | Versione da palco: ogni rilascio ha il suo tag, per esempio `v2.2.0` |

Il percorso è sempre `feature/…` → `development` → `test` → `main` (+ tag).

Per provare un ramo sul Mac:
```
git checkout development   # oppure test, oppure main
git pull
npm start
```
Per tornare a una versione precisa: `git checkout v2.1.0`.
