/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import './styles.scss';

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="landing-page">
        <Helmet
          titleTemplate="%s - RadianceIT"
          defaultTitle="RadianceIT"
          meta={[
            { name: 'description', content: 'A web development agency' },
          ]}
        />
        <Navigation />
        <Header />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
