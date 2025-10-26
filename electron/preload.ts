import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('snippyAPI', {
  desktop: true,
  createSnippet: () => ipcRenderer.invoke('create-snippet'),
  getSnippetsList: () => ipcRenderer.invoke('get-snippets-list'),
  getSnippetById: (id: number) => ipcRenderer.invoke('get-snippet-by-id', id)
})