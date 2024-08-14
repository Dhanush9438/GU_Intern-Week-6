import React from 'react';
import './FoodItemDetail.css'; // Style as needed

const FoodItemDetail = ({ foodItem, onClose }) => {
  if (!foodItem) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{foodItem.name}</h2>
        <p><strong>Group:</strong> {foodItem.group}</p>
        <p><strong>Description:</strong> {foodItem.description}</p>
        <p><strong>Calories:</strong> {foodItem.nutritionalInfo.calories}</p>
        <p><strong>Protein:</strong> {foodItem.nutritionalInfo.protein}g</p>
        <p><strong>Fats:</strong> {foodItem.nutritionalInfo.fats}g</p>
        <p><strong>Carbohydrates:</strong> {foodItem.nutritionalInfo.carbohydrates}g</p>
        <p><strong>Vitamins:</strong> {foodItem.nutritionalInfo.vitamins.join(', ')}</p>
        <p><strong>Minerals:</strong> {foodItem.nutritionalInfo.minerals.join(', ')}</p>
        <p><strong>Allergens:</strong> {foodItem.allergens.join(', ')}</p>
        <p><strong>Ingredients:</strong> {foodItem.ingredients.join(', ')}</p>
        <p><strong>Preparation Methods:</strong> {foodItem.preparationMethods.join(', ')}</p>
        <p><strong>Certifications:</strong> {foodItem.certifications.join(', ')}</p>
        <p><strong>Country of Origin:</strong> {foodItem.countryOfOrigin}</p>
        <p><strong>Brand:</strong> {foodItem.brand}</p>
        <p><strong>Dietary Restrictions:</strong> {foodItem.dietaryRestrictions.join(', ')}</p>
        <p><strong>Health Benefits:</strong> {foodItem.healthBenefits.join(', ')}</p>
        <p><strong>Best Practices:</strong> {foodItem.bestPractices.join(', ')}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FoodItemDetail;

