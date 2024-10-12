// src/components/RecipeList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeList.css'; // Import the CSS file

function RecipeList({ recipes, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recipe-list-container">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">Recipe Manager</Link>
        <div className="navbar-links">
          <Link to="/add" className="navbar-link">Add New Recipe</Link>
        </div>
      </nav>

      <h2>Recipes</h2>
      <input
        type="text"
        placeholder="Search Recipe..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="recipe-list">
        {filteredRecipes.map(recipe => (
          <li key={recipe.id} className="recipe-item">
            <Link to={`/recipe/${recipe.id}`} className="recipe-link">{recipe.title}</Link>
            <Link to={`/edit/${recipe.id}`} className="edit-link">Edit</Link>
            <button onClick={() => onDelete(recipe.id)} className="delete-button">Delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
