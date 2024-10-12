// src/components/RecipeForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RecipeForm.css'; // Import the CSS file

function RecipeForm({ recipe, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    cuisine: '',
    cookingTime: '',
    instructions: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (recipe) {
      setFormData(recipe);
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, id: id || Date.now() });
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>{id ? 'Edit Recipe' : 'Add Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Ingredients:
          <input type="text" name="ingredients" value={formData.ingredients} onChange={handleChange} required />
        </label>
        <label>
          Cuisine Type:
          <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} required />
        </label>
        <label>
          Cooking Time (minutes):
          <input type="number" name="cookingTime" value={formData.cookingTime} onChange={handleChange} required />
        </label>
        <label>
          Instructions:
          <textarea name="instructions" value={formData.instructions} onChange={handleChange} required />
        </label>
        <button type="submit" className="submit-button">{id ? 'Update' : 'Add'} Recipe</button>
      </form>
    </div>
  );
}

export default RecipeForm;
