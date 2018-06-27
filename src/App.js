import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import BeerContainer from './components/BeerContainer';
import Beer from './components/Beer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSearchBeer = this.onSearchBeer.bind(this);
    this.onGetBeer = this.onGetBeer.bind(this);
    this.onClearSearch = this.onClearSearch.bind(this);
    this.onAddFavorite = this.onAddFavorite.bind(this);

    this.state = {
      beers: [],
      beersSearched: null,
      favorties: [],
      loading: true,
      searchBeer: ''
    };
  }
  componentDidMount() {
    const { beersSearched } = this.state;
    if (beersSearched === null) {
      fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(res => this.setState({ beers: res, loading: false }))
        .catch(err => console.log(err));
    }
  }

  onSearchBeer(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onGetBeer(e) {
    e.preventDefault();
    const { beers, searchBeer, loading } = this.state;
    this.setState({ loading: true });
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchBeer}`)
      .then(res => res.json())
      .then(res => this.setState({ beersSearched: res, loading: false }))
      .catch(err => console.log(err));
  }
  onClearSearch(e) {
    e.preventDefault();
    this.setState({ beersSearched: null, searchBeer: '' });
  }
  onAddFavorite() {
    // TODO: MAKE ADD TO FAVORITES WORK
  }

  render() {
    const { beers, loading, beersSearched } = this.state;
    let beerContent;
    if (beers.length === 0 || loading === true) {
      beerContent = <h1>Loading</h1>;
    } else if (beersSearched !== null) {
      beerContent = beersSearched.map((beerSearched, i) => (
        <Beer
          key={i}
          name={beerSearched.name}
          image={beerSearched.image_url}
          tagline={beerSearched.tagline}
          firstBrewed={beerSearched.first_brewed}
          description={beerSearched.description}
          yeast={beerSearched.ingredients.yeast}
          abv={beerSearched.abv}
          brewersTips={beerSearched.brewers_tips}
          onAddFavorite={this.onAddFavorite}
        />
      ));
    } else {
      beerContent = beers.map((beer, i) => (
        <Beer
          key={i}
          name={beer.name}
          image={beer.image_url}
          tagline={beer.tagline}
          firstBrewed={beer.first_brewed}
          description={beer.description}
          yeast={beer.ingredients.yeast}
          abv={beer.abv}
          brewersTips={beer.brewers_tips}
          onAddFavorite={this.onAddFavorite}
        />
      ));
    }
    return (
      <Fragment>
        <Navbar
          searchBeer={this.state.searchBeer}
          onSearchBeer={this.onSearchBeer}
          onGetBeer={this.onGetBeer}
          onClearSearch={this.onClearSearch}
        />
        <BeerContainer>{beerContent}</BeerContainer>
      </Fragment>
    );
  }
}

export default App;
