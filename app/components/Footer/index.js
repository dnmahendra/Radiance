import React, { Component } from 'react';

require('./styles.scss');

class Footer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <footer className="page-footer">
        <div className="contact">
          <div className="container">
            <h2 className="section-heading">Contact Us</h2>
            <p><span className="glyphicon glyphicon-earphone"></span><br></br> +1(23) 456 7890</p>
            <p><span className="glyphicon glyphicon-envelope"></span><br></br> info@example.com</p>
          </div>
        </div>
        <div className="small-print">
          <div className="container">
            <p>Copyright &copy; RadianceIT.com.au 2017</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
