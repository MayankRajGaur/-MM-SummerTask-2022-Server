const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: String,
  Title: String,
  Article_No: Number,
  Content: String,
  Author: String,
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Article", articleSchema);