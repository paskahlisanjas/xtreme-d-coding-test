import React from 'react';
import { Button, Header, Icon, Loader, Modal } from 'semantic-ui-react';

const CraftItemResultModal = ({
  show = false,
  crafting = false,
  result = {},
  onClose,
}) => {
  return (
    <Modal basic closeOnDimmerClick={false} open={show} size="small">
      {crafting ? (
        <Loader size="massive" />
      ) : (
        <>
          <Header icon>
            {result.status === 'SUCCESS' ? (
              <Icon name="check circle" color="green" />
            ) : (
              <Icon name="remove circle" color="red" />
            )}
            {result.status}
          </Header>
          <Modal.Content>
            <p>{result.message}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button inverted onClick={onClose}>
              OK
            </Button>
          </Modal.Actions>
        </>
      )}
    </Modal>
  );
};

export default CraftItemResultModal;
