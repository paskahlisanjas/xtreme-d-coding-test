import React, { useEffect, useState } from 'react';
import { Message, Segment } from 'semantic-ui-react';
import DroppableGrid from '../molecules/droppableGrid/DroppableGrid';
import GridResizer from '../molecules/GridResizer';
import constants from '../constant';
import GridActions from '../molecules/GridActions';

const ResizableDroppableGrid = ({ onMatrixUpdated = (e) => e }) => {
  const [rowSize, setRowSize] = useState(constants.GridSize.DEFAULT_SIZE);
  const [colSize, setColSize] = useState(constants.GridSize.DEFAULT_SIZE);

  const [arrangement, setArrangement] = useState({});

  const updateMatrix = (row, col, item) => {
    setArrangement((prev) => ({ ...prev, [`${row}|${col}`]: item }));
  };

  const resizeGrid = (rowConfig, colConfig) => {
    if (!rowConfig || !rowSize) return;
    setRowSize(rowConfig);
    setColSize(colConfig);
  };

  useEffect(() => {
    if (!arrangement) return;
    for (let key in arrangement) {
      const [row, col] = key.split('|');
      if (row >= rowSize || col >= colSize) delete arrangement[key];
    }
  }, [rowSize, colSize]);

  useEffect(() => onMatrixUpdated(arrangement), [arrangement]);

  return (
    <Segment.Group>
      <GridResizer onResize={resizeGrid} />
      <Segment>
        <Message size="mini" info>
          <b>Current Size:</b> {rowSize}x{colSize}
        </Message>
        <DroppableGrid
          rowSize={rowSize}
          colSize={colSize}
          onMatrixUpdated={updateMatrix}
          arrangement={arrangement}
        />
      </Segment>
      <Segment textAlign="right">
        <GridActions
          onClear={() => setArrangement({})}
          onCraftItem={() => console.log('craft item!')}
        />
      </Segment>
    </Segment.Group>
  );
};

export default ResizableDroppableGrid;
