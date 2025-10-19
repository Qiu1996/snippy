const { app, BrowserWindow } = require('electron');

console.log('electron start success');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true
    }
  });
  
  win.loadURL('http://localhost:5173/');
}
