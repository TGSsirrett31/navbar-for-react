import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../index';

test('renders Navbar component', () => {
  render(<NavBar logoText="Web" link1="Home" link2="About" />);
});