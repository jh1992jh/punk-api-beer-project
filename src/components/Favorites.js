import React, { Component } from 'react';

class Favorites extends Component {
  componentDidMount() {
    console.log(this.props.favorites);
  }
  render() {
    return (
      <div>
        <h1>Favorites</h1>
      </div>
    );
  }
}

export default Favorites;
