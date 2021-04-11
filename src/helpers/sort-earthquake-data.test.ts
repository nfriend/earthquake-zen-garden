import { SortColumn, SortDirection } from '../List';
import { EarthquakeDataFeature } from '../types/earthquake-data';
import { sortEarthquakeData } from './sort-earthquake-data';

describe('sort-earthquake-data.ts', () => {
  const features = [
    {
      id: '1',
      properties: {
        title: 'Title A',
        mag: 5.0,
        time: 100,
      },
    },
    {
      id: '2',
      properties: {
        title: 'Title B',
        mag: 3.0,
        time: 150,
      },
    },
    {
      id: '3',
      properties: {
        title: 'Title C',
        mag: 1.0,
        time: 50,
      },
    },
  ];

  it.each`
    column                  | direction                   | expectedOrder
    ${SortColumn.Time}      | ${SortDirection.Ascending}  | ${['3', '1', '2']}
    ${SortColumn.Time}      | ${SortDirection.Descending} | ${['2', '1', '3']}
    ${SortColumn.Magnitude} | ${SortDirection.Ascending}  | ${['3', '2', '1']}
    ${SortColumn.Magnitude} | ${SortDirection.Descending} | ${['1', '2', '3']}
    ${SortColumn.Title}     | ${SortDirection.Ascending}  | ${['1', '2', '3']}
    ${SortColumn.Title}     | ${SortDirection.Descending} | ${['3', '2', '1']}
  `(
    'with column = $column and direction = $direction, sorts like $expectedOrder',
    ({ column, direction, expectedOrder }) => {
      const actualOrder = sortEarthquakeData(
        features as EarthquakeDataFeature[],
        column,
        direction,
      ).map((f) => f.id);

      expect(actualOrder).toEqual(expectedOrder);
    },
  );
});
