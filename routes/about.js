const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
  <h1>About Page</h1>
  <p>This is the about page</p>
  <p><a href="/about/me">Learn about me</a></p>
  `);
});

router.get("/me", (req, res) => {
  res.send(`
  <h1>About me</h1>
  <p>information about me...</p>
  <p><a href="/about">Go back to about</a></p>
  `);
});

module.exports = router;