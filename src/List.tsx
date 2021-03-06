import React, { Fragment, useState } from 'react';
import PageTitle from './PageTitle';
import { EarthquakeData } from './types/earthquake-data';
import { sortEarthquakeData } from './helpers/sort-earthquake-data';
import { Link } from 'react-router-dom';
import { formatDate } from './helpers/format-date';

const data: EarthquakeData = require('./data.json');

export enum SortColumn {
  Title = 'title',
  Magnitude = 'mag',
  Time = 'time',
}

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

function List(): JSX.Element {
  const [currentSortColumn, setSortColumn] = useState(SortColumn.Magnitude);
  const [currentSortDirection, setSortDirection] = useState(
    SortDirection.Descending,
  );

  const headerClicked = (column: SortColumn) => {
    if (currentSortColumn === column) {
      setSortDirection(
        currentSortDirection === SortDirection.Descending
          ? SortDirection.Ascending
          : SortDirection.Descending,
      );
    } else {
      setSortColumn(column);
    }
  };

  const earthquakeData = sortEarthquakeData(
    data.data.features,
    currentSortColumn,
    currentSortDirection,
  );

  return (
    <div className="flex flex-col items-center">
      <PageTitle title="USGS All Earthquakes, Past Hour" />
      <div className="grid grid-cols-7 gap-x-4 max-w-3xl mx-4 text-center">
        <button
          className="col-span-3 mb-2"
          onClick={() => headerClicked(SortColumn.Title)}
          data-testid="title-header"
        >
          Title
        </button>
        <button
          className="col-span-1 mb-2"
          onClick={() => headerClicked(SortColumn.Magnitude)}
          data-testid="mag-header"
        >
          Magnitude
        </button>
        <button
          className="col-span-3 mb-2"
          onClick={() => headerClicked(SortColumn.Time)}
          data-testid="time-header"
        >
          Time
        </button>

        {earthquakeData.map(({ properties, id }) => {
          return (
            <Fragment key={id}>
              <span className="col-span-3 text-left" data-testid="title">
                <Link to={`/earthquakes/${id}`}>{properties.title}</Link>
              </span>
              <span className="col-span-1" data-testid="mag">
                {properties.mag}
              </span>
              <span className="col-span-3" data-testid="time">
                {formatDate(properties.time)}
              </span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default List;
