const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Connect to MongoDB
const mongoURI = 'mongodb+srv://dhanushcse12:dhanushcse12@cluster0.vnpi1.mongodb.net/food';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Schema and Model
const foodItemSchema = new mongoose.Schema({
  name: String,
  group: String,
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

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

// Routes
app.get('/api/food-items', async (req, res) => {
  console.log('GET request to /api/food-items');
  try {
    const foodItems = await FoodItem.find();
    console.log('Fetched food items:', foodItems);
    res.json(foodItems);
  } catch (err) {
    console.error('Error fetching food items:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/api/food-items/:id', async (req, res) => {
  console.log(`GET request to /api/food-items/${req.params.id}`);
  try {
    const foodItem = await FoodItem.findById(req.params.id);
    if (foodItem) {
      console.log('Found food item:', foodItem);
      res.json(foodItem);
    } else {
      console.log('Food item not found');
      res.status(404).json({ message: 'Food Item not found' });
    }
  } catch (err) {
    console.error('Error fetching food item:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/api/food-items', async (req, res) => {
  console.log('POST request to /api/food-items with data:', req.body);
  try {
    const newFoodItem = new FoodItem(req.body);
    await newFoodItem.save();
    console.log('New food item created:', newFoodItem);
    res.status(201).json(newFoodItem);
  } catch (err) {
    console.error('Error creating food item:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/api/food-items/:id', async (req, res) => {
  console.log(`PUT request to /api/food-items/${req.params.id} with data:`, req.body);
  try {
    const updatedFoodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedFoodItem) {
      console.log('Updated food item:', updatedFoodItem);
      res.json(updatedFoodItem);
    } else {
      console.log('Food item not found for update');
      res.status(404).json({ message: 'Food Item not found' });
    }
  } catch (err) {
    console.error('Error updating food item:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.delete('/api/food-items/:id', async (req, res) => {
  console.log(`DELETE request to /api/food-items/${req.params.id}`);
  try {
    const deletedFoodItem = await FoodItem.findByIdAndDelete(req.params.id);
    if (deletedFoodItem) {
      console.log('Deleted food item:', deletedFoodItem);
      res.json({ message: 'Food Item deleted successfully' });
    } else {
      console.log('Food item not found for deletion');
      res.status(404).json({ message: 'Food Item not found' });
    }
  } catch (err) {
    console.error('Error deleting food item:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


