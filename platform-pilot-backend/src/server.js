const express = require('express');
const cors = require('cors');
const db = require('./database');


const app = express();
const PORT = 5000;

// Enable CORS so frontend can call this backend
app.use(cors());

// Parse JSON in request bodies
app.use(express.json());

// Test route - just to verify server is running
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Get all deployments
app.get('/api/deployments', (req, res) => {
  db.all('SELECT * FROM deployments', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
