import React, { useEffect, useReducer } from 'react';
import RecipesTable from '../components/organisms/RecipesTable';
import StandardLayout from '../components/templates/StandardLayout';
import DataLoaderReducer, {
  DataLoaderActions,
} from '../common/DataLoader.Reducer';
import Api from '../services/Api';

const RecipePage = () => {
  const [dataLoaderState, dispatchDataLoader] = useReducer(
    DataLoaderReducer.reducer,
    DataLoaderReducer.initialState
  );

  const loadData = async () => {
    dispatchDataLoader({ type: DataLoaderActions.FETCH });
    try {
      const response = await Api.getRecipes();
      dispatchDataLoader({
        type: DataLoaderActions.FETCHED,
        data: response.data,
      });
    } catch (error) {
      console.log('Failed to load recipes.');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <StandardLayout header="Availiable Recipes">
      <RecipesTable recipes={dataLoaderState.data || []} />
    </StandardLayout>
  );
};

export default RecipePage;
