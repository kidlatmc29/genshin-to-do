const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define the path to your SQLite database file
const dbPath = path.join(__dirname, 'genshin_to_do.db');

// Create a new SQLite database connection
const db = new sqlite3.Database(dbPath);

module.exports = db;
