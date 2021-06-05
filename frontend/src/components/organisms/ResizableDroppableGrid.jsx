import React, { useEffect, useState } from 'react';
import { Message, Segment } from 'semantic-ui-react';
import DroppableGrid from '../molecules/droppableGrid/DroppableGrid';
import GridResizer from '../molecules/GridResizer';
import constants from '../constant';
import GridActions from '../molecules/GridActions';

import Api from '../../services/Api';

const ResizableDroppableGrid = () => {
  const [rowSize, setRowSize] = useState(constants.GridSize.DEFAULT_SIZE);
  const [columnSize, setColumnSize] = useState(constants.GridSize.DEFAULT_SIZE);

  const [arrangement, setArrangement] = useState({});

  const updateMatrix = (row, col, item) => {
    setArrangement((prev) => ({ ...prev, [`${row}|${col}`]: item }));
  };

  const resizeGrid = (rowConfig, colConfig) => {
    if (!rowConfig || !colConfig) return;
    setRowSize(rowConfig);
    setColumnSize(colConfig);
  };

  useEffect(() => {
    const newArrangement = { ...arrangement };
    for (let key in newArrangement) {
      const [row, col] = key.split('|');
      if (row >= rowSize || col >= columnSize) delete newArrangement[key];
    }
    setArrangement(newArrangement);
  }, [rowSize, columnSize]);

  const craftItem = () => {
    const parsedArrangement = {};
    for (let key in arrangement) {
      parsedArrangement[key] = arrangement[key].representation;
    }
    Api.craftItem({
      rowSize,
      columnSize,
      arrangement: parsedArrangement,
    });
  };

  return (
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
  );
};

export default ResizableDroppableGrid;
