import React, { Component } from 'react';

import './styles.scss';
import microphone from './microphone.jpg';

class ContentOne extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section className="content">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <img className="img-responsive img-circle center-block" src={microphone} alt="" />
              </div>
              <div className="col-sm-6">
                <h2 className="section-header">Best in Class</h2>
                <p className="lead text-muted">Holisticly predominate extensible testing procedures for reliable supply chains. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                <a href="#" className="btn btn-primary btn-lg">Classify It</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContentOne;
