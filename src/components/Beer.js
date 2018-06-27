import React, { Component } from 'react';

class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: []
    };
  }

  render() {
    const {
      name,
      image,
      tagline,
      firstBrewed,
      description,
      abv,
      yeast,
      onAddFavorite
    } = this.props;

    return (
      <div className="beer">
        <img src={image} alt={name} />
        <div>
          <i className="fas fa-star" onClick={onAddFavorite} />
        </div>
        <ul>
          <li>{name}</li>
          <br />
          <li>{abv}% abv</li>
          <br />
          <li>
            First Brewed: <br /> {firstBrewed}
          </li>
          <br />
          <li>{tagline}</li>
          <br />
          <li>{yeast}</li>
        </ul>
      </div>
    );
  }
}

export default Beer;
