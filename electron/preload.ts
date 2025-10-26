import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('snippyAPI', {
  createSnippet: () => ipcRenderer.invoke('create-snippet'),
  getSnippets: () => ipcRenderer.invoke('get-snippets'),
  getSnippetById: (id: number) => ipcRenderer.invoke('get-snippet-by-id', id)
})