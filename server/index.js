const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const db = require("./config/db");
const route = require("./routes");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const AppError = require("./utils/appError");
const globalErrorHandler = require("./app/controllers/errorController");

// Connect to DB
db.connect();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

route(app);

if (process.env.NODE_ENV !== "development") {
  app.get("/api/wakeup-heroku", (req, res) => res.send("ok"));
  const timer = 25 * 60 * 1000; // 25 minutes
  setInterval(() => {
    https.get(`https://ecommerce-shop-api.herokuapp.com/api/wakeup-heroku`);
  }, timer);
}

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
