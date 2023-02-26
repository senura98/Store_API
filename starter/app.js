require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connect = require("./db/connect");
const productRouter = require("./routes/products");

//middleware
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h2><a href='/api/v1/products'>Products route</a>");
});

app.use("/api/v1/products", productRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, console.log("Server is up and running in " + port));
  } catch (err) {
    console.log(err);
  }
};

start();
