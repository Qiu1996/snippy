# Snippy 片段程式碼管理工具

## 專案概述
本地桌面應用，幫助開發者管理自己的程式碼片段。
支援快速搜尋、標籤分類、語法高亮，提升開發效率。

## 技術選型
- 純桌面應用（Electron + Vue）
- 本地資料庫（SQLite）
- 技術棧：Electron + Vue + TypeScript + SQLite

## 開發進度

### 基礎架構
- [x] Electron + Vite 開發環境建置
- [x] 配置 SQLite 本地資料庫環境
- [x] 整合 Tailwind CSS v4
- [x] 使用 vite 統一編譯 Electron 跟 Vue
- [x] TypeScript 行別檢查配置
- [x] Electron 前後端通訊管道 基礎建置完成
- [x] 建立初始化 SQLite 資料庫功能

### 目前功能
- [x] 建立基本介面（SideBar, EditArea）
- [x] 整合 CodeMirror 編輯器（程式碼）
- [x] 片段程式碼 新增功能

### 近期計畫
- [ ] 片段程式碼 RUD


### 未來規劃
- [ ] SideBar 顯示檔案清單
- [ ] CodeEditor 語言選擇器
- [ ] 語法高亮
- [ ] 搜尋功能
- [ ] 標籤分類
- [ ] 目錄樹結構
- [ ] 自動儲存機制


### 給 Claude Code 的指令：
- 回覆簡短
- 不主動生成範例程式碼
- 除非你說「程式碼範例」，否則不提供
- 除非你說「幫我修改程式碼」，否則不動檔案
- 提議必須務實且謹慎，避免過度設計

### 程式碼風格指引：
**一致性原則（P則Q，非Q則非P）**
- 相同寫法代表相同目的，不同目的使用不同寫法
- 命名與用途一一對應
- 例：`use` 開頭僅用於 composable，`handle` 開頭僅用於事件處理