import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { formatDate } from './helpers/format-date';
import PageTitle from './PageTitle';
import { EarthquakeData } from './types/earthquake-data';

const { data }: EarthquakeData = require('./data.json');

function Detail(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const earthquake = data.features.find((f) => f.id === id);

  const pageTitle = earthquake
    ? earthquake.properties.title
    : 'Earthquake not found!';

  const earthquakeDetails: { label: string; value: string }[] = [
    { label: 'Title', value: earthquake.properties.title },
    { label: 'Magnitude', value: earthquake.properties.mag.toFixed(2) },
    { label: 'Time', value: formatDate(earthquake.properties.time) },
    { label: 'Status', value: earthquake.properties.status },
    { label: 'Tsunami', value: earthquake.properties.tsunami.toString() },
    { label: 'Type', value: earthquake.properties.type },
  ];

  return (
    <div className="flex flex-col items-center">
      <PageTitle title={pageTitle} />
      {earthquake && (
        <div
          className="grid grid-cols-3 max-w-md mx-4"
          data-testid="earthquake-details"
        >
          {earthquakeDetails.map(({ label, value }) => {
            return (
              <Fragment key={label}>
                <h3 className="font-bold mr-2">{label}</h3>
                <span className="col-span-2">{value}</span>
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Detail;
