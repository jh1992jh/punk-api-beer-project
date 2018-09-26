import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  componentDidMount() {
  }
  render() {
    const { searchBeer, onSearchBeer, onGetBeer, onClearSearch } = this.props;
    return (
      <nav>
        <Link to="/">
          <h1>
            <span>Br</span>ew<span>do</span>g's <span>B</span>E<span>E</span>RS
          </h1>
        </Link>
        <form onSubmit={onGetBeer}>
          <input
            type="search"
            name="searchBeer"
            onChange={onSearchBeer}
            value={searchBeer}
          />
          <div className="forMobile">
            <button disabled={searchBeer === '' ? true : false}>Submit</button>
            <button onClick={onClearSearch}>Clear Search</button>
          </div>
        </form>
        <Link to="/favorites">
          <button className="favoritesButton">Favorites</button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
