import React, { useEffect, useReducer } from 'react';
import { Segment } from 'semantic-ui-react';
import DraggableTile from '../components/atoms/draggableTile/DraggableTile';
import DroppableTile from '../components/atoms/dropableTile/DroppableTile';
import StandardLayout from '../components/templates/StandardLayout';
import DataLoader, { DataLoaderActions } from '../common/DataLoader.Reducer';
import Api from '../services/Api';

import './styles.css';

const rowCount = 4;

const WorkbenchPage = () => {
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
    <StandardLayout header="Workbench Arrangement">
      <Segment>
        <div style={{ display: 'flex' }}>
          {(ingredientsState.data || []).map(({ illustration_url }) => (
            <DraggableTile
              item={{ illustration: illustration_url }}
              imgUrl={illustration_url}
              margin="0 4px"
            />
          ))}
        </div>
      </Segment>
      <div
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${rowCount}, 64px)` }}
      >
        {[...Array(16).keys()].map((_, index) => (
          <DroppableTile
            row={Math.floor(index / rowCount)}
            col={index % rowCount}
            onItemDropped={(row, col, item) => console.log({ row, col, item })}
          />
        ))}
      </div>
    </StandardLayout>
  );
};

export default WorkbenchPage;
