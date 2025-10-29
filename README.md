# Snippy 片段程式碼管理工具

## 專案概述
本地桌面應用，幫助開發者管理自己的程式碼片段。

**目前功能：**
- 建立、讀取、更新、刪除程式碼片段（CRUD）
- 整合 CodeMirror 編輯器
- 檔案列表顯示與自動刷新

**這是早期版本**，其他功能尚在規劃中。

**！！！目前僅支援使用這應用來操作檔案，如果從本地資料夾開始操作，應用程式會出現不可預期的錯誤！！！**

**！！！有很多 BUG 沒有解！！！**

## 技術選型
- 純桌面應用（Electron + Vue）
- 本地資料庫（SQLite）
- 技術棧：Electron + Vue 3 + TypeScript + Vite + better-sqlite3

## 環境需求
- **Node.js**：作者使用 Node.js v23（其他版本未測試）
- **作業系統**：macOS（目前僅支援 arm64/Apple Silicon）
- **套件管理工具**：npm

## 安裝與運行

### 1. 取得原始碼
```bash
git clone <repository-url>
cd snippy
```

### 2. 安裝依賴
```bash
npm install
```

### 3. 開發模式運行
```bash
npm run dev
```
這個指令會自動：
- 啟動 Vite 開發伺服器
- 編譯 Electron 主進程
- 啟動 Electron 應用程式視窗

## 打包應用程式

### 建置與打包
```bash
npm run dist
```
打包後的檔案會輸出到 `dist/` 資料夾：
- `Snippy-1.0.0-arm64.dmg` - macOS 安裝程式
- `mac-arm64/Snippy.app` - 應用程式包

### 安裝應用程式
雙擊 `.dmg` 檔案，將 Snippy 拖曳到 Applications 資料夾即可。

## 資料儲存位置
所有程式碼片段和資料庫檔案儲存在：
```
~/Desktop/SNIPPT/
├── snippets.db        # SQLite 資料庫
└── snippets/          # 程式碼片段檔案
    ├── 未命名_1.js
    ├── 未命名_2.js
    └── ...
```

## 注意事項
- **安全性警告**：此應用程式未經 Apple 程式碼簽章，首次開啟時 macOS 會顯示「來自未識別的開發者」警告
  - 解決方法：前往「系統偏好設定 → 安全性與隱私 → 一般」，點擊「強制打開」。
- **架構限制**：目前僅支援 Apple Silicon (arm64)，Intel Mac 使用者需自行修改 `package.json` 打包配置。
- **開源建置**：建議使用者從原始碼自行建置，以確保應用程式安全。

## 開發進度

### 基礎架構
- [x] Electron + Vite 開發環境建置
- [x] 配置 SQLite 本地資料庫環境
- [x] 整合 Tailwind CSS v4
- [x] 使用 vite 統一編譯 Electron 跟 Vue
- [x] TypeScript 型別檢查配置
- [x] Electron 前後端通訊管道基礎建置完成
- [x] 建立初始化 SQLite 資料庫功能

### 目前功能
- [x] 建立基本介面（SideBar, EditArea）
- [x] 整合 CodeMirror 編輯器
- [x] 片段程式碼新增功能（Create）
- [x] 片段讀取功能與列表自動刷新（Read）
- [x] SideBar 顯示檔案清單
- [x] 片段程式碼編輯功能（Update）
- [x] 片段程式碼刪除功能（Delete）
- [x] 打包成桌面應用程式（electron-builder）
- [x] 環境配置自動切換（開發/生產）

### 未來規劃
- [ ] CodeEditor 語言選擇器
- [ ] 語法高亮
- [ ] 搜尋功能
- [ ] 標籤分類
- [ ] 目錄樹結構（自引用表 + CTE 遞迴查詢）
- [ ] 自動儲存機制
- [ ] isDirty 狀態管理與切換限制
- [ ] 儲存成功/失敗提示
- [ ] Intel Mac 支援

## 授權
待定

## 作者
Qiu YaQi
