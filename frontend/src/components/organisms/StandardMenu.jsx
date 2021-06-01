import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';

const menuItems = [
  {
    name: 'Workbench',
    path: '/',
  },
  {
    name: 'Recipe',
    path: '/recipe',
  },
  {
    name: 'Ingredient',
    path: '/ingredient',
  },
];

const StandardMenu = () => {
  const location = useLocation();
  const history = useHistory();

  const onMenuItemClick = (newPath) => history.replace(newPath);

  return (
    <Segment size="mini">
      <Menu secondary>
        <Container>
          {menuItems.map(({ name, path }) => (
            <Menu.Item
              key={name}
              name={name}
              active={path === location.pathname}
              onClick={() => onMenuItemClick(path)}
            />
          ))}
        </Container>
      </Menu>
    </Segment>
  );
};

export default StandardMenu;
