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
- [x] 片段程式碼 新增功能（CRUD）
- [x] 片段讀取功能與列表自動刷新（CRUD）
- [x] SideBar 顯示檔案清單（CRUD）
- [ ] 片段程式碼 編輯功能（CRUD）

### 近期計畫
- [ ] 片段程式碼 刪除功能（CRUD）


### 未來規劃
- [ ] CodeEditor 語言選擇器
- [ ] 語法高亮
- [ ] 搜尋功能
- [ ] 標籤分類
- [ ] 目錄樹結構（自引用表 + CTE 遞迴查詢）
- [ ] 自動儲存機制
