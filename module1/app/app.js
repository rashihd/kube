const express = require('express');
const app = express();

// GET API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
