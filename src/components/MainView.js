import React, { Component } from 'react';
import BeerContainer from './BeerContainer';
import Beer from './Beer';

class MainView extends Component {
  render() {
    const { beers, loading, beersSearched, onAddFavorite } = this.props;
    let beerContent;
    if (beers.length === 0 || loading === true) {
      beerContent = <h1>Loading</h1>;
    } else if (beersSearched !== null) {
      beerContent = beersSearched.map((beerSearched, i) => (
        <Beer key={i} beer={beerSearched} onAddFavorite={onAddFavorite} />
      ));
    } else {
      beerContent = beers.map((beer, i) => (
        <Beer key={i} beer={beer} onAddFavorite={onAddFavorite} />
      ));
    }
    return (
      <div>
        <BeerContainer showButton="favorites">{beerContent}</BeerContainer>
      </div>
    );
  }
}

export default MainView;
