import React, { Component } from 'react';

require('./styles.scss');

class Intro extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <span className="glyphicon glyphicon-apple"></span>
                <h2 className="section-heading">Completely synergize resource taxing relationships</h2>
                <p className="text-light">Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Intro;
