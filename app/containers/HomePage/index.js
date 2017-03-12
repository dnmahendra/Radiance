/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Intro from 'components/Intro';
import ContentOne from 'components/ContentOne';
import ContentTwo from 'components/ContentTwo';
import Promos from 'components/Promos';
import Footer from 'components/Footer';

import './styles.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Intro />
        <ContentOne />
        <ContentTwo />
        <Promos />
        <Footer />
      </div>
    );
  }
}
