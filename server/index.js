const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const db = require("./config/db");
const route = require("./routes");

// Connect to DB
db.connect();

app.use(express.json());
app.use(cors());

route(app);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
