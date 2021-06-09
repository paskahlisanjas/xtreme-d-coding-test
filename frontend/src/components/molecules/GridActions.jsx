import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const GridActions = ({
  onClear = (e) => e,
  onCraftItem = (e) => e,
  clearDisabled = false,
}) => {
  return (
    <>
      <Modal
        basic
        trigger={<Button disabled={clearDisabled}>Clear</Button>}
        header="Clear Workbench"
        content="Are you sure you want to clear the workbench? this action is irreversible."
        actions={[
          {
            key: 'cancel',
            content: 'Cancel',
            inverted: true,
          },
          {
            key: 'yes',
            content: 'Yes',
            color: 'red',
            inverted: true,
            onClick: onClear,
          },
        ]}
      />
      <Button color="blue" onClick={onCraftItem}>
        Craf Item!
      </Button>
    </>
  );
};

export default GridActions;
