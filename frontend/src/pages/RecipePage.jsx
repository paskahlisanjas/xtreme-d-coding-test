import React, { useEffect, useState } from 'react';
import RecipesTable from '../components/organisms/RecipesTable';
import StandardLayout from '../components/templates/StandardLayout';
import Api from '../services/Api';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);

  const loadData = async () => {
    try {
      const response = await Api.getRecipes();
      setRecipes(response.data);
    } catch (error) {
      console.log('Failed to load recipes.');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <StandardLayout header="Availiable Recipes">
      <RecipesTable recipes={recipes} />
    </StandardLayout>
  );
};

export default RecipePage;
