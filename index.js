require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const { db } = require("./db/db");
db();

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/userRoute");
const routes = require("./routes/ToDoRoute");

app.use("/api/users/", userRoute);
app.use("/api/todo/", routes);

app.get("/", (req, res) => {
  res.send("Welcome to our Todo Master Application!");
});

const PORT = process.env.PORT || 25001;

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
