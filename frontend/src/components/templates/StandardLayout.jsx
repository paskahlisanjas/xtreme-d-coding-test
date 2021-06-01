import React from 'react';
import StandardMenu from '../organisms/StandardMenu';

const StandardLayout = ({ children }) => {
  return (
    <>
      <StandardMenu />
      {children}
    </>
  );
};

export default StandardLayout;
