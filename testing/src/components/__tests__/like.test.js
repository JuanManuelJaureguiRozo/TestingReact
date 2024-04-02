import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Like from '../like';

test('Defaults to 0 likes', () => {
  render(<Like />);
  expect(screen.getByText('Likes: 0')).toBeInTheDocument();
});

test('Increment likes', () => {
  render(<Like />);
  fireEvent.click(screen.getByText('Like'));
  expect(screen.getByText('Likes: 1')).toBeInTheDocument();
});

test('Decrement likes', () => {
  render(<Like />);
  fireEvent.click(screen.getByText('Dislike'));
  expect(screen.getByText('Likes: -1')).toBeInTheDocument();
});
