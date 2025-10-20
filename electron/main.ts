import { app, BrowserWindow } from 'electron';

const isDev = true;

const WINDOW_CONFIG = {
  width: 750,
  height: 400,
  x: 730,
  y: 700,

  webPreferences: {
    devTools: true
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

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());