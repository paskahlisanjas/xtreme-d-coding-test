import React from 'react';
import { render } from '@testing-library/react';
import IngredientPage from '../IngredientPage';
import routeData from 'react-router';

const mockLocation = {
  pathname: '/',
  hash: '',
  search: '',
  state: ''
}

describe('IngredientPage', () => {
  it('should render everything properly', async () => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
    const { container } = render(<IngredientPage />);
    expect(container).toMatchSnapshot();
  })
});