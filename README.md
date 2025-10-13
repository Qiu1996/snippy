# Snippy 片段程式碼管理工具 - 應用版

## 專案概述
### 概念
 本地桌面應用，幫助開發者管理自己的程式碼片段。
 支援快速搜尋、標籤分類、語法高亮，提升開發效率。

## 目標用戶
基於個人開發者，提供給需要管理各種城市語法庫的開發者。

## 核心功能

| 階段 | 第一階段 | 第二階段 |
|------|--------|---------|
|      |片段程式碼CRUD|片段關聯|
|      |搜尋|收藏/星標|
|      |標籤||
|      |語法高亮||

## 技術選型
- 純桌面應用（Electron + React）
- 本地資料庫（SQLite）
- 技術棧：Electron + React + TypeScript + SQLite

## 資料結構設計

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

### 檔案結構

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

## 使用者規劃流程
 操作流程：

  瀏覽模式（預設）：
  ```
  ┌─────────┬───────────────────────────────────┐
  │ 側邊欄   │  片段卡片網格                       │
  │         │                                   │
  │ 🔍 搜尋  │  ┌────────┐ ┌──────┐  ┌──────┐    │
  │         │  │useState│ │map   │  │JOIN  │    │
  │ 標籤     │  │const..│  │arr...│  │SELECT│    │
  │ • react │  │[📋複製] │ │[📋]   │  │[📋]  │    │
  │ • js    │  └────────┘ └──────┘  └──────┘    │
  │         │                                   │
  │ [+ 新增] │  點擊卡片 → 進入編輯模式             │
  └─────────┴───────────────────────────────────┘
  ```
  ---
  編輯模式（點擊後）：
  ```
  ┌─────────┬───────────────────────────────────┐
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