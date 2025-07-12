const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello CI/CD World!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = app;

// Start server only when not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
