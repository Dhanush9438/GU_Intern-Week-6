import React from 'react';
import './FoodItemList.css'; 

const FoodItemList = ({ foodItems, onEdit, onDelete, onView }) => {
  return (
    <div className="food-item-list-container">
      <ul className="food-item-list">
        {foodItems.map((foodItem) => (
          <li key={foodItem._id}>
            <h3>{foodItem.name}</h3>
            <p>{foodItem.group}</p>
            <div className="button-group">
              <button onClick={() => onView(foodItem)}>View</button>
              <button onClick={() => onEdit(foodItem)}>Edit</button>
              <button onClick={() => onDelete(foodItem._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodItemList;


