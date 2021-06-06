import React from 'react';
import { Button, Header, Icon, Loader, Modal } from 'semantic-ui-react';

const CraftItemResultModal = ({
  show = false,
  crafting = false,
  result = {},
  onClose,
}) => {
  let craftedItem = {};
  if (!crafting && result.status === 'SUCCESS' && result.craftable_items) {
    for (let i in result.craftable_items) {
      const item = result.craftable_items[i];
      if (item.matches === 1) {
        craftedItem = {
          illustration: item.recipe.illustration_url,
          name: item.recipe.name,
        };
        break;
      }
    }
  }

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
            <div align="center">
              {result.message}
              {craftedItem.name && (
                <>
                  <div style={{ marginTop: '16px' }}>
                    <img
                      src={craftedItem.illustration}
                      alt="crafted"
                      width="64px"
                    />
                  </div>
                  <div>
                    <small>{craftedItem.name}</small>
                  </div>
                </>
              )}
            </div>
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
