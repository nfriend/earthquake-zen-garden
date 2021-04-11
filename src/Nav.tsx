import React from 'react';
import { Link } from 'react-router-dom';

const data = require('./data.json');

function Nav(): JSX.Element {
  return (
    <nav className="flex items-center bg-nav p-4">
      <Link to="/earthquakes">
        <img
          src={data.site.logoImage}
          alt="Site logo"
          className="h-10 object-scale-down"
        />
      </Link>
      <h1 className="flex-grow text-center text-lg sm:text-2xl font-semibold text-title mx-4">
        {data.site.title}
      </h1>
      <Link to="/profile">Welcome {data.profile.firstName}</Link>
    </nav>
  );
}

export default Nav;
