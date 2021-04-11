import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Route, MemoryRouter } from 'react-router-dom';
import Detail from './Detail';
import { EarthquakeData } from './types/earthquake-data';

const { data }: EarthquakeData = require('./data.json');

describe('Detail.tsx', () => {
  const renderComponent = (idParam: string) => {
    render(
      <MemoryRouter initialEntries={[`earthquakes/${idParam}`]}>
        <Route path="earthquakes/:id">
          <Detail />
        </Route>
      </MemoryRouter>,
    );
  };

  describe('when the provided earthquake ID is valid', () => {
    beforeEach(() => {
      renderComponent(data.features[0].id);
    });

    test('renders profile details', () => {
      const earthquakeDetails = screen.getByTestId('earthquake-details');
      expect(earthquakeDetails).toMatchSnapshot();
    });
  });

  describe('when the provided earthquake ID is not valid', () => {
    beforeEach(() => {
      renderComponent('not a valid earthquake id');
    });

    test('renders a "not found" message in the page title', () => {
      const titleElement = screen.getByText('Earthquake not found!');
      expect(titleElement).toBeInTheDocument();
    });
  });
});
