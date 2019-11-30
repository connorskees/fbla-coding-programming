const {
  app,
  Menu,
  BrowserWindow,
  protocol
} = require('electron');

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(
    url.format({
      pathname:
        "index.html",
      protocol: "file",
      slashes: true
    })
  );

  mainWindow.webContents.openDevTools();

  Menu.setApplicationMenu(null);

  mainWindow.on('closed', () => mainWindow = null);
}

app.on("ready", () => {
  protocol.interceptFileProtocol(
    "file",
    (request, callback) => {
      const url = request.url.substr(7); /* all urls start with 'file://' */
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    },
    err => {
      if (err) console.error("Failed to register protocol");
    }
  );
  createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
