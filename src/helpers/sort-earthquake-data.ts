import { SortColumn, SortDirection } from '../List';
import { EarthquakeDataFeature } from '../types/earthquake-data';
import orderBy from 'lodash/orderBy';

/**
 * Returns a new list of earthquake features, sorted by the
 * provided column and direction
 *
 * @param features The list of features to sort
 * @param column The column to sort by
 * @param direction The direction to sort by
 *
 * @returns A new list of sorted features
 */
export function sortEarthquakeData(
  features: EarthquakeDataFeature[],
  column: SortColumn,
  direction: SortDirection,
): EarthquakeDataFeature[] {
  return orderBy(features, [`properties.${column}`], [direction]);
}
