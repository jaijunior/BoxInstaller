import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// 📌 APIs personalizadas para chamar o IPC de instalação
const api = {
  installDotNet5: () => ipcRenderer.invoke('install-dotnet5'),
  installDotNet8: () => ipcRenderer.invoke('install-dotnet8'),
  installCristal32: () => ipcRenderer.invoke('install-cristal32'),
  installCristal64: () => ipcRenderer.invoke('install-cristal64')
}

// Mantém a compatibilidade com o electronAPI padrão
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
