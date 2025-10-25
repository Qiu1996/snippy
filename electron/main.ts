import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { initDatabase, createSnippet } from './database';

const isDev = true;

const WINDOW_CONFIG = {
  width: 750,
  height: 400,
  x: 730,
  y: 700,
  
  titleBarStyle: 'hiddenInset' as const, 

  webPreferences: {
    devTools: true,
    preload: path.join(__dirname, 'preload.js')
  }
}

const APP_URL = () => {
  if(isDev){
    return 'http://localhost:5173/';
  }else{
    throw new Error('生產環境路徑未設定');
  }
}

function createWindow() {
  const win = new BrowserWindow(WINDOW_CONFIG);
  win.loadURL(APP_URL());
}

app.whenReady().then(() => {
  initDatabase();
  createWindow();

  // IPC handlers
  ipcMain.handle('create-snippet', () => {
    return createSnippet();
  });
});

app.on('window-all-closed', () => app.quit());
