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

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const PORT = proccess.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
