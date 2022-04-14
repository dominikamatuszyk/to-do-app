const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8080;

mongoose.connect(
  "mongodb+srv://matuszyk:Haslo1234@tododatabase.gi9h8.mongodb.net/ToDoDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const tasksRoutes = require("./controllers/task.controller");
const userRoutes = require("./controllers/user.controller");

app.use("/tasks", tasksRoutes);
app.use("/login", userRoutes);
