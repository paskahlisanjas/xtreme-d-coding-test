import React, { useEffect, useReducer } from 'react';
import { Segment, Placeholder } from 'semantic-ui-react';
import Api from '../../../services/Api';
import DraggableTile from '../../atoms/draggableTile/DraggableTile';
import DataLoader, {
  DataLoaderActions,
} from '../../../common/DataLoader.Reducer';

const DraggableIngredients = () => {
  const [ingredientsState, dispatchIngredients] = useReducer(
    DataLoader.reducer,
    DataLoader.initialState
  );

  const loadData = async () => {
    dispatchIngredients({ type: DataLoaderActions.FETCH });
    const response = await Api.getIngredients();
    dispatchIngredients({
      type: DataLoaderActions.FETCHED,
      data: response.data,
    });
  };

  useEffect(() => loadData(), []);

  return (
    <Segment>
      {ingredientsState.loading && (
        <Placeholder style={{ height: 70, borderRadius: 5 }} fluid />
      )}
      <div style={{ display: 'flex' }}>
        {(ingredientsState.data || []).map(
          ({ illustration_url, representation }) => (
            <DraggableTile
              key={representation}
              item={{ illustration: illustration_url, representation }}
              imgUrl={illustration_url}
              margin="0 4px"
            />
          )
        )}
      </div>
    </Segment>
  );
};

export default DraggableIngredients;
