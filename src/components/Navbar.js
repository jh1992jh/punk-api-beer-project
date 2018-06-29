import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  componentDidMount() {
    console.log(this.props.location);
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
          <button
            className="favoritesButton"
            /*style={
              this.props.match.params.url === '/favorites'
                ? { display: 'none' }
                : null
            }*/
          >
            Favorites
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
