const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ToDo", todoSchema);
