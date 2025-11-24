"use strict";
const dane = require("./dane.js");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

// define endpoint for exercise 1 here
app.get("/jokebook/categories", (req, res) => {
  res.json(dane.categories);
});

app.get("/jokebook/joke/:category", (req, res) => {
  const cat = req.params.category;

  const jokes = dane[cat];

  if (!jokes) {
    return res.json({ error: `no jokes for category ${cat}` });
  }

  const losowy = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(losowy);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
