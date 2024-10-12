// src/components/RecipeDetail.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RecipeDetail.css'; // Import the CSS file

function RecipeDetail({ recipe, onDelete }) {
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div className="recipe-detail-container">
      <h2 className="recipe-title">{recipe.title}</h2>
      <div className="recipe-info">
        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
        <p><strong>Cuisine Type:</strong> {recipe.cuisine}</p>
        <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
        <p><strong>Instructions:</strong> {recipe.instructions}</p>
      </div>
      <div className="recipe-buttons">
        <button className="edit-button" onClick={() => navigate(`/edit/${recipe.id}`)}>Edit</button>
        <button className="delete-button" onClick={() => onDelete(recipe.id)}>Delete</button>
      </div>
      <Link className="back-link" to="/">Back to Recipes</Link>
    </div>
  );
}

export default RecipeDetail;
