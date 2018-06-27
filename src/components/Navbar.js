import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const { searchBeer, onSearchBeer, onGetBeer, onClearSearch } = this.props;
    return (
      <nav>
        <h1>
          <span>Br</span>ew<span>do</span>g's <span>B</span>E<span>E</span>RS
        </h1>
        <form onSubmit={onGetBeer}>
          <input
            type="search"
            name="searchBeer"
            onChange={onSearchBeer}
            value={searchBeer}
          />
          <button disabled={searchBeer === '' ? true : false}>Submit</button>
          <button onClick={onClearSearch}>Clear Search</button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
