# Snippy 片段程式碼管理工具

## 專案概述
本地桌面應用，幫助開發者管理自己的程式碼片段。
支援快速搜尋、標籤分類、語法高亮，提升開發效率。

## 技術選型
- 純桌面應用（Electron + Vue）
- 本地資料庫（SQLite）
- 技術棧：Electron + Vue + TypeScript + SQLite


## 資料結構設計（僅參考，隨時會變動）

**架構：混合模式（SQLite 索引 + 實際檔案）**

### Snip（片段 - SQLite）

| 欄位名稱 | 資料型態 | 主鍵 | 說明 | 限制 |
|---------|---------|------|------|------|
| id | INTEGER | ✓ | 片段ID | `PRIMARY KEY AUTOINCREMENT` |
| file_path | TEXT | - | 檔案路徑 | `NOT NULL` `UNIQUE` |
| title | TEXT | - | 片段標題 | `NOT NULL` |
| description | TEXT | - | 片段說明 | `NULL` |
| language | TEXT | - | 程式語言 | `NOT NULL` |
| tags | TEXT | - | 標籤（JSON 字串） | `NULL` |
| created_at | TEXT | - | 建立時間（ISO 8601） | `DEFAULT CURRENT_TIMESTAMP` |
| updated_at | TEXT | - | 更新時間（ISO 8601） | `DEFAULT CURRENT_TIMESTAMP` |

**備註：**
- SQLite 使用 `TEXT` 儲存日期時間（ISO 8601 格式）
- `tags` 以 JSON 字串格式儲存（如：`["react", "hooks"]`）
- **程式碼內容儲存在實際檔案中**（由 `file_path` 指向）

---

### 本地檔案結構

```
~/Snippy/
  ├─ .snippy/
  │   └─ index.db              ← SQLite 索引資料庫
  └─ snippets/
      ├─ 1-react-usestate.js   ← 實際程式碼檔案
      ├─ 2-python-sort.py
      └─ 3-sql-join.sql
```

**檔案命名規則：** `{id}-{title-slug}.{extension}`

## 使用者規劃流程（僅參考，隨時會變動）
 操作流程：

  瀏覽模式（預設）：
  ```
  ┌─────────┬───────────────────────────────────┐
  ├─────────┴───────────────────────────────────|
  │ 側邊欄   │  片段卡片網格                       │
  │         │                                   │
  │ 🔍 搜尋  │  ┌────────┐ ┌──────┐  ┌──────┐    │
  │         │  │useState│ │map   │  │JOIN  │    │
  │ 標籤     │  │const..│  │arr...│  │SELECT│    │
  │ • react │  │[複製]  │  │      │  │      │
  │ • js    │  └────────┘ └──────┘  └──────┘    │
  │         │                                   │
  │ [+ 新增] │  點擊卡片 → 進入編輯模式             │
  └─────────┴───────────────────────────────────┘
  ```
  ---
  編輯模式（點擊後）：
  ```
  ┌─────────┬───────────────────────────────────┐
  ├─────────┴───────────────────────────────────|  
  │ 側邊欄   │  編輯/詳細檢視區                     │
  │         │                                   │
  │ 🔍 搜尋  │ Title: React useState Hook        │
  │         │ Language: JavaScript              │
  │ 標籤     │ Tags: [react] [hooks]             │
  │ • react │                                   │
  │ • js    │ ┌───────────────────────────────┐ │
  │         │ │ const [count, setCount] =     │ │
  │ [+ 新增] │ │   useState(0);                │ │
  │         │ └───────────────────────────────┘ │
  │ [← 返回] │                                   │
  │         │ [💾 儲存] [🗑️ 刪除] [📋 複製]        │
  └─────────┴───────────────────────────────────┘
  ```



---

## 開發進度

### 基礎架構
- [x] Electron + Vite 開發環境建置
- [x] 配置 SQLite 本地資料庫環境
- [x] 整合 Tailwind CSS v4
- [x] 使用 vite 統一編譯 Electron 跟 Vue
- [x] TypeScript 行別檢查配置

### 目前功能
- [x] 建立基本介面（SideBar, EditArea）
- [x] 整合 CodeMirror 編輯器（程式碼 + Markdown）

### 近期計畫
<!-- 重點：先以前端為主，資料儲存以瀏覽器暫存輔助，不接後端資料庫 -->
- [ ] 分頁系統 -> 進度：完成點擊新增按鈕產生新分頁
- [ ] 新增/開啟/切換/關閉分頁
- [ ] 自動儲存
- [ ] SideBar 顯示檔案清單
- [ ] CodeEditor 語言選擇器

### 未來規劃
- [ ] 片段程式碼 CRUD
- [ ] 語法高亮
- [ ] 搜尋功能
- [ ] 標籤分類
- [ ] 資料庫整合
- [ ] 目錄樹結構
- [ ] 自動儲存機制


### 目前開發方向：
- **資料儲存策略**：目前階段以前端為主，使用 localStorage/sessionStorage 暫存資料
- **不接後端資料庫**：SQLite 整合延後至未來規劃階段
- **CRUD 功能**：不是現階段的事情

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