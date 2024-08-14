import React, { useState, useEffect } from 'react';
import './FoodItemForm.css'

const FoodItemForm = ({ fetchFoodItems, foodItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    group: '',
    description: '',
    calories: '',
    protein: '',
    fats: '',
    carbohydrates: '',
    vitamins: '',
    minerals: '',
    servingSize: '',
    allergens: '',
    ingredients: '',
    preparationMethods: '',
    certifications: '',
    countryOfOrigin: '',
    brand: '',
    dietaryRestrictions: '',
    healthBenefits: '',
    bestPractices: '',
  });

  useEffect(() => {
    if (foodItem) {
      setFormData({
        name: foodItem.name || '',
        group: foodItem.group || '',
        description: foodItem.description || '',
        calories: foodItem.nutritionalInfo?.calories || '',
        protein: foodItem.nutritionalInfo?.protein || '',
        fats: foodItem.nutritionalInfo?.fats || '',
        carbohydrates: foodItem.nutritionalInfo?.carbohydrates || '',
        vitamins: foodItem.nutritionalInfo?.vitamins.join(', ') || '',
        minerals: foodItem.nutritionalInfo?.minerals.join(', ') || '',
        servingSize: foodItem.servingSize || '',
        allergens: foodItem.allergens.join(', ') || '',
        ingredients: foodItem.ingredients.join(', ') || '',
        preparationMethods: foodItem.preparationMethods.join(', ') || '',
        certifications: foodItem.certifications.join(', ') || '',
        countryOfOrigin: foodItem.countryOfOrigin || '',
        brand: foodItem.brand || '',
        dietaryRestrictions: foodItem.dietaryRestrictions.join(', ') || '',
        healthBenefits: foodItem.healthBenefits.join(', ') || '',
        bestPractices: foodItem.bestPractices.join(', ') || '',
      });
    }
  }, [foodItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        nutritionalInfo: {
          calories: parseFloat(formData.calories),
          protein: parseFloat(formData.protein),
          fats: parseFloat(formData.fats),
          carbohydrates: parseFloat(formData.carbohydrates),
          vitamins: formData.vitamins.split(',').map((v) => v.trim()),
          minerals: formData.minerals.split(',').map((m) => m.trim()),
        },
        allergens: formData.allergens.split(',').map((a) => a.trim()),
        ingredients: formData.ingredients.split(',').map((i) => i.trim()),
        preparationMethods: formData.preparationMethods.split(',').map((p) => p.trim()),
        certifications: formData.certifications.split(',').map((c) => c.trim()),
        dietaryRestrictions: formData.dietaryRestrictions.split(',').map((d) => d.trim()),
        healthBenefits: formData.healthBenefits.split(',').map((h) => h.trim()),
        bestPractices: formData.bestPractices.split(',').map((b) => b.trim()),
      };
  
      const response = await fetch(foodItem ? `https://food-app-v9n2.onrender.com/api/food-items/${foodItem._id}` : 'https://food-app-v9n2.onrender.com/api/food-items', {
        method: foodItem ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Response from server:', result);
  
      // Show an alert based on whether it's an update or create operation
      if (foodItem) {
        window.alert('Food item updated successfully!');
      } else {
        window.alert('Food item created successfully!');
      }
  
      fetchFoodItems();
    } catch (err) {
      console.error('Error submitting form:', err.message);
      window.alert('An error occurred while submitting the form. Please try again.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Food Item Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="group"
        placeholder="Food Group"
        value={formData.group}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="calories"
        placeholder="Calories"
        value={formData.calories}
        onChange={handleChange}
      />
      <input
        type="number"
        name="protein"
        placeholder="Protein (g)"
        value={formData.protein}
        onChange={handleChange}
      />
      <input
        type="number"
        name="fats"
        placeholder="Fats (g)"
        value={formData.fats}
        onChange={handleChange}
      />
      <input
        type="number"
        name="carbohydrates"
        placeholder="Carbohydrates (g)"
        value={formData.carbohydrates}
        onChange={handleChange}
      />
      <input
        type="text"
        name="vitamins"
        placeholder="Vitamins (comma-separated)"
        value={formData.vitamins}
        onChange={handleChange}
      />
      <input
        type="text"
        name="minerals"
        placeholder="Minerals (comma-separated)"
        value={formData.minerals}
        onChange={handleChange}
      />
      <input
        type="text"
        name="servingSize"
        placeholder="Serving Size"
        value={formData.servingSize}
        onChange={handleChange}
      />
      <input
        type="text"
        name="allergens"
        placeholder="Allergens (comma-separated)"
        value={formData.allergens}
        onChange={handleChange}
      />
      <input
        type="text"
        name="ingredients"
        placeholder="Ingredients (comma-separated)"
        value={formData.ingredients}
        onChange={handleChange}
      />
      <input
        type="text"
        name="preparationMethods"
        placeholder="Preparation Methods (comma-separated)"
        value={formData.preparationMethods}
        onChange={handleChange}
      />
      <input
        type="text"
        name="certifications"
        placeholder="Certifications (comma-separated)"
        value={formData.certifications}
        onChange={handleChange}
      />
      <input
        type="text"
        name="countryOfOrigin"
        placeholder="Country of Origin"
        value={formData.countryOfOrigin}
        onChange={handleChange}
      />
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={formData.brand}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dietaryRestrictions"
        placeholder="Dietary Restrictions (comma-separated)"
        value={formData.dietaryRestrictions}
        onChange={handleChange}
      />
      <input
        type="text"
        name="healthBenefits"
        placeholder="Health Benefits (comma-separated)"
        value={formData.healthBenefits}
        onChange={handleChange}
      />
      <input
        type="text"
        name="bestPractices"
        placeholder="Best Practices (comma-separated)"
        value={formData.bestPractices}
        onChange={handleChange}
      />
      <button type="submit">{foodItem ? 'Update' : 'Create'} Food Item</button>
    </form>
  );
};

export default FoodItemForm;
