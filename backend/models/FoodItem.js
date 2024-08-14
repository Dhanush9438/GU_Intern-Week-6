// models/FoodItem.js

const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  description: String,
  nutritionalInfo: {
    calories: Number,
    protein: Number,
    fats: Number,
    carbohydrates: Number,
    vitamins: [String],
    minerals: [String],
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: [String],
  certifications: [String],
  countryOfOrigin: String,
  brand: String,
  dietaryRestrictions: [String],
  healthBenefits: [String],
  bestPractices: [String],
});

module.exports = mongoose.model('FoodItem', FoodItemSchema);
