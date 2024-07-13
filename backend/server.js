const express = require('express');
const fetchData = require('./fetchData');
const cors = require('cors');

const app = express();
require('dotenv').config(); // Load environment variables from .env file

const PORT = process.env.PORT;

app.use(cors());

app.get('/api/data', async (req, res) => {
  const data = await fetchData();
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Listen on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
