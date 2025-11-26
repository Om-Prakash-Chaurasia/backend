const express = require("express");

const app = express();
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is my first express api");
});

app.post("/", (req, res) => {
  res.json({ msg: "You can enter details here" });
});

app.listen(1010, () => {
  console.log("Server is up and running on port 3000");
});
