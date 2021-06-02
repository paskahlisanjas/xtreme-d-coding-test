import React, { useEffect, useReducer } from 'react';
import IngredientsTable from '../components/organisms/IngredientsTable';
import DataLoaderReducer, {
  DataLoaderActions,
} from '../common/DataLoader.Reducer';
import StandardLayout from '../components/templates/StandardLayout';
import Api from '../services/Api';

const IngredientPage = () => {
  const [dataLoaderState, dispatchDataLoader] = useReducer(
    DataLoaderReducer.reducer,
    DataLoaderReducer.initialState
  );

  const loadData = async () => {
    dispatchDataLoader({ type: DataLoaderActions.FETCH });
    try {
      const response = await Api.getIngredients();
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
    <StandardLayout header="Available Ingredients">
      <IngredientsTable ingredients={dataLoaderState.data || []} />
    </StandardLayout>
  );
};

export default IngredientPage;
