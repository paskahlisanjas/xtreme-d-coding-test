import React, { useState } from 'react';

import DroppableGrid from '../molecules/droppableGrid/DroppableGrid';
import { Button, Grid, Input, Message, Segment } from 'semantic-ui-react';

const defaultGridSize = 4;

const ResizableDroppableGrid = ({ onMatrixUpdated = (e) => e }) => {
  const [rowSize, setRowSize] = useState(defaultGridSize);
  const [colSize, setColSize] = useState(defaultGridSize);

  const [rowConfig, setRowConfig] = useState(defaultGridSize);
  const [colConfig, setColConfig] = useState(defaultGridSize);

  const [matrix, setMatrix] = useState(
    Array.from({ length: rowSize }, () =>
      Array.from({ length: colSize }, () => '_')
    )
  );

  const updateMatrix = (row, col, item) => {
    matrix[row][col] = item.representation;
    onMatrixUpdated([...matrix]);
    setMatrix([...matrix]);
  };

  const resizeGrid = () => {
    if (!rowConfig || !rowSize) return;

    setRowSize(rowConfig);
    setColSize(colConfig);
  };

  return (
    <Segment.Group>
      <Segment>
        <Grid columns={3}>
          <Grid.Column>
            <Input
              size="mini"
              label="Rows"
              type="number"
              onChange={(_, { value }) => setRowConfig(value)}
              value={rowConfig}
              fluid
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              size="mini"
              label="Rows"
              type="number"
              onChange={(_, { value }) => setColConfig(value)}
              value={colConfig}
              fluid
            />
          </Grid.Column>
          <Grid.Column width={2}>
            <Button size="tiny" color="blue" onClick={resizeGrid}>
              Resize
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Message size="mini" info>
          <b>Current Size:</b> {rowSize}x{colSize}
        </Message>
        <DroppableGrid
          rowSize={rowSize}
          colSize={colSize}
          onMatrixUpdated={updateMatrix}
        />
      </Segment>
    </Segment.Group>
  );
};

export default ResizableDroppableGrid;
