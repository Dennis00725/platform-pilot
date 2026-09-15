const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create/open database file
const db = new sqlite3.Database(
  path.join(__dirname, '../deployments.db'),
  (err) => {
    if (err) console.error('Database error:', err);
    else console.log('Connected to SQLite database');
  }
);

// Create deployments table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS deployments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    serviceName TEXT NOT NULL,
    status TEXT NOT NULL,
    lastUpdated TEXT NOT NULL
  )
`);

// Insert sample data if table is empty
db.all('SELECT COUNT(*) as count FROM deployments', (err, rows) => {
  if (rows[0].count === 0) {
    db.run("INSERT INTO deployments (serviceName, status, lastUpdated) VALUES ('Payment Service', 'running', '2 mins ago')");
    db.run("INSERT INTO deployments (serviceName, status, lastUpdated) VALUES ('Chat Service', 'failed', '30 mins ago')");
    db.run("INSERT INTO deployments (serviceName, status, lastUpdated) VALUES ('Analytics Service', 'pending', 'Just now')");
  }
});

module.exports = db;
