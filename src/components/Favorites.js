import React, { Component, Fragment } from 'react';
import BeerContainer from './BeerContainer';
import FavoriteBeer from './FavoriteBeer';

class Favorites extends Component {
  componentDidMount() {
    console.log(this.props.favorites);
  }
  render() {
    const { favorites, onDeleteFavorite } = this.props;
    let favoriteContent;
    if (favorites.length > 0) {
      favoriteContent = favorites.map((favorite, i) => (
        <FavoriteBeer
          favoriteBeer={favorite}
          onDeleteFavorite={onDeleteFavorite}
        />
      ));
    } else {
      favoriteContent = <h1>You haven't favorited any BEERS yet</h1>;
    }

    return (
      <Fragment>
        <BeerContainer showButton="Go Back">{favoriteContent}</BeerContainer>
      </Fragment>
    );
  }
}

export default Favorites;
