import React, { Component, Fragment } from 'react';
import ToggleRPC from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';

class Beer extends Component {
  render() {
    // destructure the passed down beer and the onAddFavorite method
    const { beer, onAddFavorite } = this.props;
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
    } = beer;

    return (
      <div className="beerContainer">
        <div className="beer">
          <img src={image_url} alt={name} />
          <div>
            <i
              className="fas fa-star"
              // as you click the star button, call onAddFavorite and pass in the beer as the argument
              onClick={() => onAddFavorite(this.props.beer)}
            />
          </div>
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
          </ul>
        </div>
        <div>
          <ToggleRPC>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>More Info</button>
                <Modal on={on} toggle={toggle}>
                  <div className="beer">
                    <img src={image_url} alt={name} />
                    <div>
                      <i
                        className="fas fa-star"
                        // as you click the star button, call onAddFavorite and pass in the beer as the argument
                        onClick={() => onAddFavorite(this.props.beer)}
                      />
                    </div>
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
                        <br />
                        <li>{description}</li>
                        <br />
                        <li>
                          <span className="text-bold">Brewers Tips:</span>{' '}
                          <br /> {brewers_tips}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Modal>
              </Fragment>
            )}
          </ToggleRPC>
        </div>
      </div>
    );
  }
}

export default Beer;
