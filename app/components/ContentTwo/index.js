import React, { Component } from 'react';

import './styles.scss';
import iphone from './iphone.jpg';

class ContentTwo extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section className="content content-2">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-header">Superior Quality</h2>
                <p className="lead text-light">Holisticly predominate extensible testing procedures for reliable supply chains. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                <a href="#" className="btn btn-default btn-lg">Test It</a>
              </div>
              <div className="col-sm-6">
                <img className="img-responsive img-circle center-block" src={iphone} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContentTwo;
