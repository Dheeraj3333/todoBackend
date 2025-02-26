const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

// accessing environmental variable
const PORT = process.env.port;
const ORIGINS = process.env.origins;
const MONGOURL = process.env.mongoUrl_atlas;

const { connectToDB } = require("./connection");

connectToDB(MONGOURL);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const allowedOrigins = ORIGINS?.split(",") || [];
app.use(
  cors({
    origin: ORIGINS,
    credentials: true, // Allows cookies and authentication headers
  })
);

// routing
const homeRouter = require("./routes/index");
app.use("/", homeRouter);

const todoRouter = require("./routes/todo");
app.use("/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT} Port`);
});
