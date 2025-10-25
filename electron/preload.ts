import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('snippyAPI', {
  desktop: true,
  createSnippet: () => ipcRenderer.invoke('create-snippet')
})