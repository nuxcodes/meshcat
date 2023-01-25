const express = require("express");
const app = express();
const PORT = 3001;

let notes = [{ itema: "Welcome to MeshCat - an Earth production" }];

app.get("/", (req, res) => {
  res.send("<h1>Welcome to MeshCat - an Earth production</h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
