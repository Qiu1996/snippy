"use strict";
const { app, BrowserWindow } = require('electron');
const log = require('electron-log');
log.info('electron start success');
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
    });
    win.loadFile('dist/index.html');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
