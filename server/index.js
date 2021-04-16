const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const db = require("./config/db");

// Connect to DB
db.connect();

const StickerModel = require("./app/models/Sticker");

app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
  const stickerName = req.body.stickerName;
  const quantity = req.body.quantity;

  const sticker = new StickerModel({ stickerName, quantity });

  try {
    await sticker.save();
    res.send("inserted data");
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/products", (req, res, next) => {
  StickerModel.find({})
    .then((result) => res.send(result))
    .catch(next);
});

app.put("/edit", async (req, res) => {
  const newStickerName = req.body.newStickerName;
  const id = req.body.id;

  try {
    await StickerModel.findById(id, (err, updatedSticker) => {
      updatedSticker.stickerName = newStickerName;
      updatedSticker.save();
      res.send("updated");
    });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await StickerModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
