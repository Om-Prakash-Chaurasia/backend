const express = require("express"); // importing express ~ importing http and events modules
const mongoose = require("mongoose"); // importing mongoose

const app = express(); // http.createServer()
// app.use(express.json()); // Middleware

// GET api
app.get("/", (req, res) => {
  res.send("This is my first express api");
});

// POST api
app.post("/", (req, res) => {
  res.json({ msg: "You can enter details here" });
});

// URI :-
const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/augBatch");
};

connectDB()
  .then(() => {
    console.log("✅ Connection with Database established.");
  })
  .catch((err) => {
    console.log("❌ Unable to connect, please try again later.", err);
  });

// server.listen();
const PORT = 1010;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
