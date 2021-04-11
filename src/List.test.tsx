import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import List, { SortDirection } from './List';
import { BrowserRouter } from 'react-router-dom';

jest.mock('./data.json', () => ({
  data: {
    features: [
      {
        id: '1',
        properties: { title: 'Title A', mag: 5.0, time: 1523600000000 },
      },
      {
        id: '2',
        properties: { title: 'Title B', mag: 3.0, time: 1523700000000 },
      },
      {
        id: '3',
        properties: { title: 'Title C', mag: 1.0, time: 1523500000000 },
      },
    ],
  },
}));

describe('List.tsx', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <List />
      </BrowserRouter>,
    );
  });

  const getTableData = () => {
    const allTitles = screen.getAllByTestId('title');
    const allMags = screen.getAllByTestId('mag');
    const allTimes = screen.getAllByTestId('time');

    return allTitles.map((_, index) => ({
      title: allTitles[index].textContent,
      mag: parseFloat(allMags[index].textContent),
      time: allTimes[index].textContent,
    }));
  };

  const expectMagSort = (direction: SortDirection) => {
    const expectedMagOrder = [1.0, 3.0, 5.0];

    if (direction === SortDirection.Descending) {
      expectedMagOrder.reverse();
    }

    const actualMagOrder = getTableData().map((row) => row.mag);

    expect(actualMagOrder).toEqual(expectedMagOrder);
  };

  const expectTitleSort = (direction: SortDirection) => {
    const expectedTitleOrder = ['Title A', 'Title B', 'Title C'];

    if (direction === SortDirection.Descending) {
      expectedTitleOrder.reverse();
    }

    const actualTitleOrder = getTableData().map((row) => row.title);

    expect(actualTitleOrder).toEqual(expectedTitleOrder);
  };

  const expectTimeSort = (direction: SortDirection) => {
    const expectedTimeOrder = [
      'Apr 12, 2018, 02:26 AM',
      'Apr 13, 2018, 06:13 AM',
      'Apr 14, 2018, 10:00 AM',
    ];

    if (direction === SortDirection.Descending) {
      expectedTimeOrder.reverse();
    }

    const actualTimeOrder = getTableData().map((row) => row.time);

    expect(actualTimeOrder).toEqual(expectedTimeOrder);
  };

  const clickHeader = (testIdOfHeader: string) => {
    fireEvent.click(screen.getByTestId(testIdOfHeader));
  };

  test('sorts the list by magnitude, descending by default', () => {
    expectMagSort(SortDirection.Descending);
  });

  test('sorts the list by title when the title heading is clicked', () => {
    clickHeader('title-header');

    expectTitleSort(SortDirection.Descending);

    clickHeader('title-header');

    expectTitleSort(SortDirection.Ascending);
  });

  test('sorts the list by magnitude when the magnitude heading is clicked', () => {
    // No need to click the header, since this is the active sort by default

    expectMagSort(SortDirection.Descending);

    clickHeader('mag-header');

    expectMagSort(SortDirection.Ascending);
  });

  test('sorts the list by time when the time heading is clicked', () => {
    clickHeader('time-header');

    expectTimeSort(SortDirection.Descending);

    clickHeader('time-header');

    expectTimeSort(SortDirection.Ascending);
  });
});
