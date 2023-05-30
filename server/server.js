const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config();

const DB = process.env.DB_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: "true" });

const { Schema } = mongoose;

const tradingSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});



const Trading = mongoose.model("trading", tradingSchema);

//GetTrading

app.get("/trading", async (req, res) => {
  try {
    const getTrading = await Trading.find({});
    res.send(getTrading);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//AddTrading

app.post("/trading", async (req, res) => {
  try {
    const addTrading = req.body;
    let trading = new Trading(addTrading);

    trading.save();
    res.send(trading);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//DeleteTrading

app.delete("/trading/:id", async (req, res) => {
  try {
    const tradingId = req.params.id;
    const trading = await Trading.findByIdAndDelete(tradingId);
    res.send({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(404).json({ message: "Not exist" });
  }
});

// GetID

app.get("/trading/:id", async (req, res) => {
  try {
    const tradingId = req.params.id;
    const trading = await Trading.findById(tradingId);
    res.send(trading);
  } catch (err) {
    res.status(404).json({ message: "Not exist" });
  }
});

const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`Server is up on port ${Port} `);
});
