import React, { useEffect, useReducer, useState } from 'react';
import { Message, Segment } from 'semantic-ui-react';
import DroppableGrid from '../molecules/droppableGrid/DroppableGrid';
import GridResizer from '../molecules/GridResizer';
import constants from '../constant';
import GridActions from '../molecules/GridActions';
import CraftItemResultModal from '../molecules/CraftItemResultModal';

import Api from '../../services/Api';
import Utils from '../../common/Utils';
import DataLoader, { DataLoaderActions } from '../../common/DataLoader.Reducer';

const ResizableDroppableGrid = () => {
  const [rowSize, setRowSize] = useState(constants.GridSize.DEFAULT_SIZE);
  const [columnSize, setColumnSize] = useState(constants.GridSize.DEFAULT_SIZE);

  const [arrangement, setArrangement] = useState({});

  const [craftingState, dispatchCrafting] = useReducer(DataLoader.reducer, DataLoader.initialState);
  const [showResultModal, setShowResultModal] = useState(false);

  const updateMatrix = (row, col, item) =>
    setArrangement((prev) => ({
      ...prev,
      [Utils.generateArrangementKey(row, col)]: item,
    }));

  const resizeGrid = (rowConfig, colConfig) => {
    if (!rowConfig || !colConfig) return;
    setRowSize(rowConfig);
    setColumnSize(colConfig);
  };

  useEffect(() => {
    const newArrangement = { ...arrangement };
    for (let key in newArrangement) {
      const [row, col] = Utils.generateArrangementKey(key);
      if (row >= rowSize || col >= columnSize) delete newArrangement[key];
    }
    setArrangement(newArrangement);
  }, [rowSize, columnSize]);

  const craftItem = async () => {
    dispatchCrafting({ type: DataLoaderActions.FETCH })
    setShowResultModal(true);
    const response = await Api.craftItem({
      rowSize,
      columnSize,
      arrangement: Utils.extractArrangementRepresentation(arrangement),
    });
    dispatchCrafting({ type: DataLoaderActions.FETCHED, data: response.data });
  };

  return (
    <>
      <Segment.Group>
        <GridResizer onResize={resizeGrid} />
        <Segment>
          <Message size="mini" info>
            <b>Current Size:</b> {rowSize}x{columnSize}
          </Message>
          <DroppableGrid
            rowSize={rowSize}
            colSize={columnSize}
            onMatrixUpdated={updateMatrix}
            arrangement={arrangement}
          />
        </Segment>
        <Segment textAlign="right">
          <GridActions
            onClear={() => setArrangement({})}
            onCraftItem={craftItem}
          />
        </Segment>
      </Segment.Group>
      <CraftItemResultModal
        result={craftingState.data || {}}
        show={showResultModal}
        loading={craftingState.loading}
        onClose={() => setShowResultModal(false)}
      />
    </>
  );
};

export default ResizableDroppableGrid;
