const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
  allergens: {
    type: [String],
    default: ["None"],
  },
  food_group: {
    type: String,
  },
  description: {
    type: String,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  serving_size: {
    type: String,
  },
  certifications: {
    type: [String],
    default: [],
  },
  food_item_name: {
    type: String,
  },
  health_benefits: {
    type: [String],
    default: [],
  },
  country_of_origin: {
    type: String,
  },
  preparation_methods: {
    type: [String],
    default: [],
  },
  dietary_restrictions: {
    type: [String],
    default: [],
  },
  brand_or_manufacturer: {
    type: String,
  },
  nutritional_information: [
    {
      fat: {
        type: Number,
      },
      fiber: {
        type: Number,
      },
      protein: {
        type: Number,
      },
      calories: {
        type: Number,
      },
      carbohydrates: {
        type: Number,
      },
    },
  ],
});

const FoodItem = mongoose.model("FoodItem", FoodItemSchema);

module.exports = FoodItem;
