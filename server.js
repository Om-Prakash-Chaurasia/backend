const express = require("express"); // importing express ~ importing http and events modules
const mongoose = require("mongoose"); // importing mongoose

const app = express(); // http.createServer()
// app.use(express.json()); // Middleware

// Static apis :-
// GET api
app.get("/", (req, res) => {
  const person = [
    {
      name: "Om",
      age: 25,
      id: 123,
    },
    {
      name: "Prakash",
      age: 52,
      id: 987,
    },
  ];
  // res.send(person);
  res.json(person); // This is same as res.send but it sends json data.
});

app.get("/todos", (req, res) => {
  const todos = [
    {
      id: 1,
      task: "push code to github.",
    },
    {
      id: 2,
      task: "Go for a break at 11 am.",
    },
    {
      id: 3,
      task: "ask for the js project today.",
    },
  ];

  const todosString = JSON.stringify(todos);

  // res.json(todos);
  // res.send(todos);
  // res.json(todosString);
  res.send(todosString);
});

// POST api
app.post("/", (req, res) => {
  res.json({ msg: "You can enter details here" });
});

app.post("/todos", (req, res) => {
  res.json({
    msg: "You can insert your todos here",
    success: true,
  });
});

// PUT api
app.put("/todos", (req, res) => {
  res.json({
    msg: "You can edit your todos from here",
    success: true,
  });
});

// DELETE api
app.delete("/todos", (req, res) => {
  let responseJson = {
    msg: "You can delete the data from here",
    success: true,
  };

  res.json(responseJson);
});

// Dynamic apis :-
app.get("/users/:id", (req, res) => {
  const users = [
    {
      name: "Om",
      age: 25,
      id: 123,
    },
    {
      name: "Prakash",
      age: 52,
      id: 987,
    },
  ];

  const user = { id: req.params.id };

  // console.log(req.params.id);

  res.json(user);
});

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 45000,
    quantity: 50,
  },
  {
    id: 2,
    name: "Mobile Phone",
    price: 30000,
    quantity: 74,
  },
  {
    id: 3,
    name: "Diary",
    price: 120,
    quantity: 120,
  },
];

app.get("/productId/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = products.find((product) => product.id == productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).res.json({ msg: "Product not available." });
  }
});

app.get("/productQty/:productQty", (req, res) => {
  const productQty = req.params.productQty;
  const product = products.find((product) => product.quantity == productQty);

  if (product) {
    res.json(product);
  } else {
    res.status(403).json({ msg: "Product not found." });
  }
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

// MVC Pattern / MVC Layer
