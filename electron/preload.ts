import { contextBridge } from "electron";

contextBridge.exposeInMainWorld('myAPI', {
  desktop: true
})