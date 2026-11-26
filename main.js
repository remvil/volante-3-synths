// Volante 3 — app per Mac (Electron)
// Apre la stessa pagina di Volante in una finestra propria, con MIDI e SysEx
// sempre permessi, schermo acceso mentre suoni e registrazioni salvate in Musica/Volante.
const { app, BrowserWindow, Menu, session, powerSaveBlocker, shell } = require('electron');
const path = require('path');
const fs = require('fs');

// L'audio parte senza dover cliccare prima (resta comunque il tasto ACCENDI).
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

// Una sola finestra di Volante alla volta: un secondo avvio riporta in primo piano quella aperta.
if (!app.requestSingleInstanceLock()) app.quit();

let win = null;
let blocker = null;

const ALLOWED = new Set(['midi', 'midiSysex', 'clipboard-sanitized-write', 'fullscreen']);

function createWindow() {
  win = new BrowserWindow({
    width: 1440,
    height: 860,
    minWidth: 1000,
    minHeight: 600,
    backgroundColor: '#080706',
    title: 'Volante 3',
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      backgroundThrottling: false // l'audio e il clock non rallentano se la finestra è dietro
    }
  });
  win.once('ready-to-show', () => win.show());
  win.loadFile(path.join(__dirname, 'app', 'index.html'));

  // I link esterni si aprono nel browser, non dentro Volante.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  win.on('closed', () => { win = null; });
}

function setupSession() {
  const ses = session.defaultSession;
  // MIDI e SysEx (display della SL) sempre concessi, senza avvisi.
  ses.setPermissionRequestHandler((_wc, permission, callback) => callback(ALLOWED.has(permission)));
  ses.setPermissionCheckHandler((_wc, permission) => ALLOWED.has(permission));

  // REC e backup: propone di salvare in Musica/Volante.
  ses.on('will-download', (_e, item) => {
    const dir = path.join(app.getPath('music'), 'Volante');
    try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
    item.setSaveDialogOptions({ defaultPath: path.join(dir, item.getFilename()) });
  });
}

function buildMenu() {
  const isMac = process.platform === 'darwin';
  const template = [
    ...(isMac ? [{ role: 'appMenu' }] : []),
    { role: 'editMenu' },
    {
      label: 'Vista',
      submenu: [
        { role: 'reload', label: 'Ricarica' },
        { role: 'togglefullscreen', label: 'Schermo intero' },
        { type: 'separator' },
        { role: 'resetZoom', label: 'Dimensione reale' },
        { role: 'zoomIn', label: 'Ingrandisci' },
        { role: 'zoomOut', label: 'Riduci' },
        { type: 'separator' },
        { role: 'toggleDevTools', label: 'Strumenti sviluppatore' }
      ]
    },
    {
      label: 'Volante',
      submenu: [
        { label: 'Apri cartella registrazioni', click: () => {
          const dir = path.join(app.getPath('music'), 'Volante');
          try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
          shell.openPath(dir);
        } }
      ]
    },
    { role: 'windowMenu' }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.on('second-instance', () => {
  if (win) { if (win.isMinimized()) win.restore(); win.focus(); }
});

app.whenReady().then(() => {
  setupSession();
  buildMenu();
  createWindow();
  // Schermo sempre acceso finché Volante è aperto.
  blocker = powerSaveBlocker.start('prevent-display-sleep');
  app.on('activate', () => { if (!win) createWindow(); });
});

app.on('window-all-closed', () => {
  if (blocker !== null && powerSaveBlocker.isStarted(blocker)) powerSaveBlocker.stop(blocker);
  app.quit();
});
