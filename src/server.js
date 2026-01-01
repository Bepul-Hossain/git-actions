const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// __dirname works in CommonJS, no need for import.meta
// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello World changes' });
});

// Start server if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
