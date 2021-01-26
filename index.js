const electron = require('electron');
const url = require('url');
const path = require('path');

require('electron-reload')(__dirname);

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let addWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 840,
    minWidth: 1080,
    minHeight: 800,
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true,

  }));
  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);

  document.createElement('button');
});

// Handle create add window
function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 300,
    height: 300,
    title: 'add smthn',
  });

  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'addWindow.html'),
    protocol: 'file:',
    slashes: true,
  }));
}

// Create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Add Item',
        click() {
          createAddWindow();
        },
      },
      {
        label: 'Clear Items',
      },
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q'
          : 'Ctrl+Q',
        click() {
          app.quit();
        },
      },
    ],
  },
];
