import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const GridActions = ({
  onClear = (e) => e,
  onCraftItem = (e) => e
}) => {
  return (
    <>
      <Modal
        trigger={<Button>Clear</Button>}
        header="Clear Workbench"
        content="Are you sure you want to clear the workbench? this action is irreversible."
        actions={[
          'Cancel',
          {
            key: 'yes',
            content: 'Yes',
            negative: true,
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
