import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const BeerContainer = ({ children, showButton }) => {
  return (
    <Fragment>
      <div className="mobileFavoriteButton">
        {showButton === 'favorites' ? (
          <Link to="/favorites">
            <button className="favoritesButton">Favorites</button>
          </Link>
        ) : (
          <Link to="/">
            <button className="favoritesButton">Go Back</button>
          </Link>
        )}
      </div>
      <div className="beersContainer">{children}</div>
    </Fragment>
  );
};

export default BeerContainer;
