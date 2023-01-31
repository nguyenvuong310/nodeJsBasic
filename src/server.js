import express from "express";
import viewEngine from "./configs/viewEngine";
const app = express();
const port = 3001;

viewEngine(app);
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
