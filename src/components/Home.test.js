import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home'; // Assuming Home.test.js is in the same directory as Home.js
import { myName, myOccupation, myDetails, myImageLink } from './../vars/homeItems';
import '@testing-library/jest-dom'; // For extended matchers

it('renders without crashing', () => {
  render(<Home />);
});

it('displays the correct name', () => {
  render(<Home />);
  expect(screen.getByText(myName)).toBeInTheDocument();
});

it('displays the correct occupation', () => {
  render(<Home />);
  expect(screen.getByText(myOccupation)).toBeInTheDocument();
});

it('displays the correct details', () => {
  render(<Home />);
  expect(screen.getByText(myDetails)).toBeInTheDocument();
});

it('renders the avatar with correct src and alt text', () => {
  render(<Home />);
  const avatarImage = screen.getByRole('img');
  expect(avatarImage).toHaveAttribute('src', myImageLink);
  expect(avatarImage).toHaveAttribute('alt', myName);
});
