import React, { useEffect, useState } from 'react';
import { Message, Segment } from 'semantic-ui-react';
import DroppableGrid from '../molecules/droppableGrid/DroppableGrid';
import GridResizer from '../molecules/GridResizer';
import constants from '../constant';
import GridActions from '../molecules/GridActions';

import Api from '../../services/Api';

const ResizableDroppableGrid = ({ onMatrixUpdated = (e) => e }) => {
  const [rowSize, setRowSize] = useState(constants.GridSize.DEFAULT_SIZE);
  const [columnSize, setColumnSize] = useState(constants.GridSize.DEFAULT_SIZE);

  const [arrangement, setArrangement] = useState({});

  const updateMatrix = (row, col, item) => {
    setArrangement((prev) => ({ ...prev, [`${row}|${col}`]: item }));
  };

  const resizeGrid = (rowConfig, colConfig) => {
    if (!rowConfig || !rowSize) return;
    setRowSize(rowConfig);
    setColumnSize(colConfig);
  };

  useEffect(() => {
    if (!arrangement) return;
    for (let key in arrangement) {
      const [row, col] = key.split('|');
      if (row >= rowSize || col >= columnSize) delete arrangement[key];
    }
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

  useEffect(() => onMatrixUpdated(arrangement), [arrangement]);

  return (
    <Segment.Group>
      <GridResizer onResize={resizeGrid} />
      <Segment>
        <Message size="mini" info>
          <b>Current Size:</b> {rowSize}x{columnSize}
        </Message>
        <DroppableGrid
          rowSize={rowSize}
          columnSize={columnSize}
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
