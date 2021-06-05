import React, { useState } from 'react';
import { Button, Grid, Input, Segment } from 'semantic-ui-react';
import constants from '../constant';

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

const GridResizer = ({ onResize = (e) => e }) => {
  const [rowConfig, setRowConfig] = useState(constants.GridSize.DEFAULT_SIZE);
  const [colConfig, setColConfig] = useState(constants.GridSize.DEFAULT_SIZE);

  return (
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
          <Button size="tiny" color="blue" onClick={() => onResize(parseInt(rowConfig), parseInt(colConfig))}>
            Resize
          </Button>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
 
export default GridResizer;