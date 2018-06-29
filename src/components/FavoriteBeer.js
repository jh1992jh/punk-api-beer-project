import React, { Component, Fragment } from 'react';
import ToggleRPC from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';

class Beer extends Component {
  render() {
    // destructure the passed down beer and the onAddFavorite method
    const { favoriteBeer, onDeleteFavorite } = this.props;
    const {
      name,
      image_url,
      tagline,
      first_brewed,
      description,
      abv,
      yeast,
      ingredients,
      brewers_tips
    } = favoriteBeer;

    return (
      <div className="favoriteBeerContainer">
        <div className="favoriteBeer">
          <img src={image_url} alt={name} />
          <div className="scroll">
            <ul>
              <li>{name}</li>
              <br />
              <li>{abv}% abv</li>
              <br />
              <li>
                First Brewed: <br /> {first_brewed}
              </li>
              <br />
              <li>{tagline}</li>
              <br />
              <li>{ingredients.yeast}</li>
              <li>{description}</li>
              <br />
              <li>
                <span className="text-bold">Brewers Tips:</span> <br />{' '}
                {brewers_tips}
              </li>
            </ul>
          </div>
          <i
            className="fas fa-times"
            onClick={() => onDeleteFavorite(this.props.favoriteBeer)}
          />
        </div>
      </div>
    );
  }
}

export default Beer;
