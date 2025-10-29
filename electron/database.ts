import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import { app } from "electron";
import type { SnippetTab } from "../src/types/snippet";

// 檔案 跟 資料庫的路徑
const SNIPPY_ROOT = path.join(app.getPath("desktop"), "SNIPPT");
const SNIPPETS_FILE_DIR = path.join(SNIPPY_ROOT, "snippets");
const DB_PATH = path.join(SNIPPY_ROOT, "snippets.db");

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

export function createSnippet(): SnippetTab {
  const result = db
    .prepare("SELECT seq FROM sqlite_sequence WHERE name = ?")
    .get("snippets") as { seq: number } | undefined;
  const nextId = result ? result.seq + 1 : 1;

  const title = `未命名_${nextId}`;
  const fileName = `${title}.js`;
  const filePath = path.join(SNIPPETS_FILE_DIR, fileName);

  fs.writeFileSync(filePath, "");

  const insert = db.prepare(
    "INSERT INTO snippets (title, file_path) VALUES (?, ?)",
  );
  const info = insert.run(title, filePath);

  const newSnippet = db
    .prepare("SELECT * FROM snippets WHERE id = ?")
    .get(Number(info.lastInsertRowid)) as SnippetTab;

  return newSnippet;
}

export function getSnippets(): SnippetTab[] {
  const result = db.prepare("SELECT * FROM snippets").all() as SnippetTab[];
  return result;
}

export function getSnippetById(id: number): SnippetTab & { content: string } {
  const snippet = db.prepare("SELECT * FROM snippets WHERE id = ?").get(id) as
    | SnippetTab
    | undefined;
  if (!snippet) {
    throw new Error(`Snippet with id ${id} not found`);
  }
  const content = fs.readFileSync(snippet.file_path, "utf-8");

  return {
    ...snippet,
    content,
  };
}

export function updateSnippet(id: number, content: string): void {
  const snippet = db
    .prepare("SELECT file_path FROM snippets WHERE id = ?")
    .get(id) as { file_path: string } | undefined;

  if (!snippet) throw new Error(`Snippet ${id} not found`);
  fs.writeFileSync(snippet.file_path, content);

  db.prepare(
    "UPDATE snippets SET updated_at = CURRENT_TIMESTAMP WHERE id = ?",
  ).run(id);

  return;
}

export function deleteSnippet(id: number) {
  const snippet = db
    .prepare("SELECT file_path FROM snippets WHERE id = ?")
    .get(id) as { file_path: string } | undefined;

  if (!snippet) {
    throw new Error(`Snippet with id ${id} not found`);
  }

  fs.rmSync(snippet.file_path);

  db.prepare("DELETE FROM snippets WHERE id = ?").run(id);

  return;
}
