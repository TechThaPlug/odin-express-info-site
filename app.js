const express = require("express");
const path = require("node:path");

const app = express();

const PAGES = path.join(__dirname, "pages");

app.get("/", (req, res) => res.sendFile(path.join(PAGES, "index.html")));
app.get("/about", (req, res) => res.sendFile(path.join(PAGES, "about.html")));
app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(PAGES, "contact-me.html")),
);

// Last on purpose: it only runs when no route above matched
app.use((req, res) => {
  res.status(404).sendFile(path.join(PAGES, "404.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Info site - listening on port ${PORT}!`);
});
