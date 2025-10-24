import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { app } from 'electron';

// 檔案 跟 資料庫的路徑
const SNIPPY_ROOT = path.join(app.getPath('desktop'), 'SNIPPT');
const SNIPPETS_FILE_DIR = path.join(SNIPPY_ROOT, 'snippets');
const DB_PATH = path.join(SNIPPY_ROOT, 'snippets.db');

let db: Database.Database;

// 初始化資料庫的函式
export function initDatabase() {
  if (!fs.existsSync(SNIPPY_ROOT)) {
    fs.mkdirSync(SNIPPY_ROOT, { recursive: true });
  }
  if (!fs.existsSync(SNIPPETS_FILE_DIR)) {
    fs.mkdirSync(SNIPPETS_FILE_DIR, { recursive: true });
  }

  db = new Database(DB_PATH);

  db.exec(`
    CREATE TABLE IF NOT EXISTS snippets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      file_path TEXT NOT NULL UNIQUE,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export function getDatabase() {
  return db;
}

export function getSnippetsDir() {
  return SNIPPETS_FILE_DIR;
}
