import React, { Component } from 'react';
import Portal from './Portal';

class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <div className="modalWrapper">
            <div className="modalCard">
              <div className="closeButton">
                <button onClick={toggle}>Close</button>
              </div>
              <div>{children}</div>
            </div>
            <div className="modalBackground" onClick={toggle} />
          </div>
        )}
      </Portal>
    );
  }
}

export default Modal;
