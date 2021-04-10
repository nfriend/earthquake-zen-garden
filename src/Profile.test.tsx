import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from './Profile';

const data = require('./data.json');

describe('Profile.tsx', () => {
  beforeEach(() => {
    render(<Profile />);
  });

  test('renders the avatar image', () => {
    const avatarElement = screen.getByAltText(
      `${data.profile.firstName} ${data.profile.lastName}'s profile image`,
    );
    expect(avatarElement).toBeInTheDocument();
  });

  test('renders profile details', () => {
    const profileDetails = screen.getByTestId('profile-details');
    expect(profileDetails).toMatchSnapshot();
  });
});
