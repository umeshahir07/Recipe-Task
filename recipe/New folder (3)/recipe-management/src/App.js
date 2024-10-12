// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
  };

  const editRecipe = (updatedRecipe) => {
    setRecipes(prevRecipes => 
      prevRecipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
    );
  };

  const deleteRecipe = (id) => {
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
  };

  const RecipeFormWrapper = () => {
    const { id } = useParams(); // Use useParams to get the id
    const recipe = recipes.find(r => r.id === Number(id));
    return <RecipeForm onSubmit={editRecipe} recipe={recipe} />;
  };

  const RecipeDetailWrapper = () => {
    const { id } = useParams(); // Use useParams to get the id
    const recipe = recipes.find(r => r.id === Number(id));
    return <RecipeDetail recipe={recipe} onDelete={deleteRecipe} />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} onDelete={deleteRecipe} />} />
        <Route path="/add" element={<RecipeForm onSubmit={addRecipe} />} />
        <Route path="/edit/:id" element={<RecipeFormWrapper />} /> {/* Wrap the edit route */}
        <Route path="/recipe/:id" element={<RecipeDetailWrapper />} /> {/* Wrap the detail route */}
      </Routes>
    </Router>
  );
}

export default App;
