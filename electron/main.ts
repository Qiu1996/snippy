import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import {
  initDatabase,
  createSnippet,
  getSnippets,
  getSnippetById,
  updateSnippet,
  deleteSnippet,
} from "./database";

const isDev = !app.isPackaged;

const BASE_WINDOW_CONFIG = {
  titleBarStyle: "hiddenInset" as const,
  webPreferences: {
    preload: path.join(__dirname, "preload.js"),
  },
};

const WINDOW_CONFIG = isDev
  ? {
      ...BASE_WINDOW_CONFIG,
      width: 750,
      height: 400,
      x: 730,
      y: 700,
      webPreferences: {
        ...BASE_WINDOW_CONFIG.webPreferences,
        devTools: true,
      },
    }
  : {
      ...BASE_WINDOW_CONFIG,
      width: 750,
      height: 400,
      webPreferences: {
        ...BASE_WINDOW_CONFIG.webPreferences,
        devTools: false,
      },
    };

const APP_URL = () => {
  if (isDev) {
    return "http://localhost:5173/";
  } else {
    return `file://${path.join(__dirname, "../index.html")}`;
  }
};

function createWindow() {
  const win = new BrowserWindow(WINDOW_CONFIG);
  win.loadURL(APP_URL());
}

app.whenReady().then(() => {
  initDatabase();
  createWindow();

  ipcMain.handle("create-snippet", () => createSnippet());
  ipcMain.handle("get-snippets", () => getSnippets());
  ipcMain.handle("get-snippet-by-id", (event, id) => getSnippetById(id));
  ipcMain.handle("update-snippet", (event, id, content) =>
    updateSnippet(id, content),
  );
  ipcMain.handle("delete-snippet", (event, id) => deleteSnippet(id));
});

app.on("window-all-closed", () => app.quit());
