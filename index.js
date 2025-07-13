require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const gitData = {
  login: "tejaswaroop-368",
  id: 196463929,
  avatar_url: "https://avatars.githubusercontent.com/u/196463929?v=4",
  html_url: "https://github.com/tejaswaroop-368",
  public_repos: 5,
  followers: 0,
  following: 0,
  created_at: "2025-01-25T16:54:02Z",
  updated_at: "2025-07-13T13:39:45Z"
};

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!');
});

app.get('/git', (req, res) => {
  res.json(gitData);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
