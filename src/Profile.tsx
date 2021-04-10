import React, { Fragment } from 'react';
import PageTitle from './PageTitle';

const data = require('./data.json');

function Nav(): JSX.Element {
  const avatarAltText = `${data.profile.firstName} ${data.profile.lastName}'s profile image`;

  const profileDetails: { label: string; value: string }[] = [
    { label: 'First name', value: data.profile.firstName },
    { label: 'Last name', value: data.profile.lastName },
    { label: 'Phone', value: data.profile.phone },
    { label: 'Email', value: data.profile.email },
    { label: 'Bio', value: data.profile.bio },
  ];

  return (
    <div className="flex flex-col">
      <PageTitle title="Profile" />
      <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:items-start">
        <img
          src={data.profile.avatarImage}
          alt={avatarAltText}
          className="h-56 mb-4 sm:mb-0 object-scale-down"
        />
        <div
          className="grid grid-cols-3 max-w-sm mx-4"
          data-testid="profile-details"
        >
          {profileDetails.map(({ label, value }) => {
            return (
              <Fragment key={label}>
                <h3 className="font-bold mb-2 mr-2">{label}</h3>
                <span className="col-span-2">{value}</span>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Nav;
