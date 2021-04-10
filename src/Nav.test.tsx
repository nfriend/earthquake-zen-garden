import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';

const data = require('./data.json');

describe('Nav.tsx', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
  });

  test('renders the app logo', () => {
    const logoElement = screen.getByAltText('Site logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders the title', () => {
    const titleElement = screen.getByText(data.site.title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders a link to the profile', () => {
    const linkElement = screen.getByText(`Welcome ${data.profile.firstName}`);
    expect(linkElement).toBeInTheDocument();
  });
});
