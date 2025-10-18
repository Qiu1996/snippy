const { app, BrowserWindow } = require('electron');

console.log('electron start success');

  function createWindow() {
    const win = new BrowserWindow({
      width: 1200,
      height: 800,
    });
    
    win.loadURL('http://localhost:5173/');
  }


const Database = require('better-sqlite3');
const db = new Database('snippets.db');

// 建立測試表
db.exec(`
  CREATE TABLE IF NOT EXISTS snippets (
    id INTEGER PRIMARY KEY,
    title TEXT,
    code TEXT
  )
`);

// 測試插入
const insert = db.prepare('INSERT INTO snippets (title, code) VALUES (?, ?)');
insert.run('測試', 'console.log("hello")');

console.log('資料庫初始化完成');