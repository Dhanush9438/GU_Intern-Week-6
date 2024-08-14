import React, { useState, useEffect } from 'react';
import axios from './api/axios';
import FoodItemForm from './components/FoodItem/FoodItemForm';
import FoodItemList from './components/FoodList/FoodItemList';
import FoodItemDetail from './components/FoodDetails/FoodItemDetail';
import './App.css';

const App = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get('/food-items');
      setFoodItems(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (foodItem) => {
    setSelectedFoodItem(foodItem);
    setIsDetailVisible(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/food-items/${id}`);
      window.alert("Deleted Successfully");
      fetchFoodItems();
    } catch (err) {
      console.error(err);
    }
  };

  const handleView = (foodItem) => {
    setSelectedFoodItem(foodItem);
    setIsDetailVisible(true);
  };

  const handleClose = () => {
    setSelectedFoodItem(null);
    setIsDetailVisible(false);
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  return (
    <div className="app-container">
      <h1>Food and Nutrition Database</h1>
      <FoodItemForm fetchFoodItems={fetchFoodItems} foodItem={selectedFoodItem} />
      <FoodItemList 
        foodItems={foodItems} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        onView={handleView} 
      />
      {isDetailVisible && <FoodItemDetail foodItem={selectedFoodItem} onClose={handleClose} />}
    </div>
  );
};

export default App;

