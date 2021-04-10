import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const data = require('./data.json');

describe('App.tsx', () => {
  test('renders the app logo', () => {
    render(<App />);
    const logoElement = screen.getByAltText('Site logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders the title', () => {
    render(<App />);
    const titleElement = screen.getByText(data.site.title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders a link to the profile', () => {
    render(<App />);
    const linkElement = screen.getByText(`Welcome ${data.profile.firstName}`);
    expect(linkElement).toBeInTheDocument();
  });
});
