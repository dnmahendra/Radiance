import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import './styles.scss';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-content-inner">
            <h1>Dramatically Engage</h1>
            <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
            <Link to="engage">
              <Button className="btn-primary btn-lg">Engage Now</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
