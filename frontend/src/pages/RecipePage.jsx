import React, { useEffect, useState } from 'react';
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
    <StandardLayout>
      <pre>{JSON.stringify(recipes, null, 2)}</pre>
    </StandardLayout>
  );
};

export default RecipePage;
