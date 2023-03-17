const express = require("express");
const router = express.Router();
const ToDoModel = require("../models/ToDoModel");

router.post("/", async (req, res) => {
  try {
    const todo = await ToDoModel.find({ userid: req.body.userid });
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/save", async (req, res) => {
  try {
    const newTodo = new ToDoModel(req.body);
    await newTodo.save();
    res.send("Todo Added Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/update", async (req, res) => {
  try {
    const { _id, text } = req.body;
    await ToDoModel.findByIdAndUpdate(_id, { text });
    return res.send("Updated Successfully...");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/delete", async (req, res) => {
  try {
    await ToDoModel.findByIdAndDelete(req.body._id);
    return res.status(200).send({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
