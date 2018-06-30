import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';
import BeerContainer from './components/BeerContainer';
import Beer from './components/Beer';
import './App.css';
import MainView from './components/MainView';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSearchBeer = this.onSearchBeer.bind(this);
    this.onGetBeer = this.onGetBeer.bind(this);
    this.onClearSearch = this.onClearSearch.bind(this);
    this.onAddFavorite = this.onAddFavorite.bind(this);
    this.onDeleteFavorite = this.onDeleteFavorite.bind(this);

    this.state = {
      beers: [],
      beersSearched: null,
      favorites: [],
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
  onAddFavorite(beer) {
    console.log(beer);

    !this.state.favorites.includes(beer) &&
      this.setState({
        favorites: [...this.state.favorites, beer]
      });
  }
  onDeleteFavorite(favoriteBeer) {
    console.log(this.state.favorites.indexOf(favoriteBeer));
    let favoriteToRemove = this.state.favorites.indexOf(favoriteBeer);

    this.setState({
      favorites: this.state.favorites.filter(
        favorite => favorite !== favoriteBeer
      )
    });
  }

  render() {
    const { beers, loading, beersSearched, favorites } = this.state;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <Navbar
            searchBeer={this.state.searchBeer}
            onSearchBeer={this.onSearchBeer}
            onGetBeer={this.onGetBeer}
            onClearSearch={this.onClearSearch}
            location={this.props}
          />

          <Route
            exact
            path="/favorites"
            render={() => (
              <Favorites
                favorites={favorites}
                onDeleteFavorite={this.onDeleteFavorite}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <MainView
                beers={beers}
                loading={loading}
                beersSearched={beersSearched}
                onAddFavorite={this.onAddFavorite}
              />
            )}
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
