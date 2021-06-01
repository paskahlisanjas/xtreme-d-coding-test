import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import StandardMenu from '../organisms/StandardMenu';

const StandardLayout = ({ header = 'Header', children }) => {
  return (
    <>
      <StandardMenu />
      <Container>
        <Header as="h1" dividing>{header}</Header>
        {children}
      </Container>
    </>
  );
};

export default StandardLayout;
