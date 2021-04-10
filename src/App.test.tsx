import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App.tsx', () => {
  test('renders a link to the profile', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome Sally/i);
    expect(linkElement).toBeInTheDocument();
  });
});
