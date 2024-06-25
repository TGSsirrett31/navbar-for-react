import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../index';

test('renders Navbar component', () => {
  const { getByText } = render(<NavBar link1="Home" link2="About" />);
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('About')).toBeInTheDocument();
});
