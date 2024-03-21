const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const foodController = require("./foodController");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/food")
.then(() => {
  console.log("Connected to MongoDB");
}).catch((e) => {
  console.log("Error: ", e);
});
app.post("/food", foodController.createFoodItem);
app.get("/food", foodController.getAllFoodItems);
app.get("/food/:id", foodController.getFoodItemById);
app.put("/food/:id", foodController.updateFoodItem);
app.delete("/food/:id", foodController.deleteFoodItem);
app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
