import React from 'react';
import { Container } from 'semantic-ui-react';
import StandardMenu from '../organisms/StandardMenu';

const StandardLayout = ({ children }) => {
  return (
    <>
      <StandardMenu />
      <Container>{children}</Container>
    </>
  );
};

export default StandardLayout;
