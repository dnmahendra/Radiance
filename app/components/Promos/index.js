import React, { Component } from 'react';

import './styles.scss';

class Promos extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container-fluid">
        <div className="row promo">
          <a href="#">
            <div className="col-md-4 promo-item item-1">
              <h3>Unleash</h3>
            </div>
          </a>
          <a href="#">
            <div className="col-md-4 promo-item item-2">
              <h3>Synergize</h3>
            </div>
          </a>
          <a href="#">
            <div className="col-md-4 promo-item item-3">
              <h3>Procrastinate</h3>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Promos;
