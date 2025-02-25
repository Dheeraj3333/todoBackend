const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

// accessing environmental variable
const PORT = process.env.PORT;
const ORIGINS = process.env.ORIGINS;
const MONGOURL = process.env.mongoUrl_atlas;

const { connectToDB } = require("./connection");

connectToDB(MONGOURL);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allowedOrigins = ORIGINS?.split(",") || [];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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
