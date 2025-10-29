import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("snippyAPI", {
  createSnippet: () => ipcRenderer.invoke("create-snippet"),
  getSnippets: () => ipcRenderer.invoke("get-snippets"),
  getSnippetById: (id: number) => ipcRenderer.invoke("get-snippet-by-id", id),
  updateSnippet: (id: number, content: string) =>
    ipcRenderer.invoke("update-snippet", id, content),
  deleteSnippet: (id: number) => ipcRenderer.invoke("delete-snippet", id),
});
