const express = require('express');
const app = express();

// GET API route
app.get('/api2', (req, res) => {
  res.json({ message: 'Hello, world from 2!' });
});

// Start the server
const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// added a comment from feature branch DEV002
