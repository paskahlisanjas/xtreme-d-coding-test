import React, { useEffect, useState } from 'react';

import DroppableGrid from '../molecules/droppableGrid/DroppableGrid';
import { Button, Grid, Input, Message, Segment } from 'semantic-ui-react';

const defaultGridSize = 4;

const SizeConfigInput = ({ label, onChange, value }) => (
  <Input
    size="mini"
    label={label}
    type="number"
    onChange={onChange}
    value={value}
    fluid
  />
);

const ResizableDroppableGrid = ({ onMatrixUpdated = (e) => e }) => {
  const [rowSize, setRowSize] = useState(defaultGridSize);
  const [colSize, setColSize] = useState(defaultGridSize);

  const [rowConfig, setRowConfig] = useState(defaultGridSize);
  const [colConfig, setColConfig] = useState(defaultGridSize);

  const [arrangement, setArrangement] = useState({});

  const updateMatrix = (row, col, item) => {
    setArrangement((prev) => ({ ...prev, [`${row}|${col}`]: item }));
  };

  const resizeGrid = () => {
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
      <Segment>
        <Grid columns={3}>
          <Grid.Column>
            <SizeConfigInput
              label="Rows"
              value={rowConfig}
              onChange={(_, { value }) => setRowConfig(value)}
            />
          </Grid.Column>
          <Grid.Column>
            <SizeConfigInput
              label="Columns"
              value={colConfig}
              onChange={(_, { value }) => setColConfig(value)}
            />
          </Grid.Column>
          <Grid.Column>
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
          arrangement={arrangement}
        />
      </Segment>
    </Segment.Group>
  );
};

export default ResizableDroppableGrid;
