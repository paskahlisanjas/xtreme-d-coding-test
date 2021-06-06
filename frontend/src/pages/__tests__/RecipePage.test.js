import React from 'react';
import { render } from '@testing-library/react';
import RecipePage from '../RecipePage';
import routeData from 'react-router';

const mockLocation = {
  pathname: '/',
  hash: '',
  search: '',
  state: ''
}

describe('RecipePage', () => {
  it('should render everything properly', async () => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
    const { container } = render(<RecipePage />);
    expect(container).toMatchSnapshot();
  })
});