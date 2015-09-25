import React from 'react';

import ListOfComponent from './list-of-component';
import Category from './category';

export default class Navigation extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.arrayOf(React.PropTypes.object),
    };
  }

  render() {
    return (
      <nav className="navigation">
        <ListOfComponent className="navigation__categories" component={Category} {...this.props} />
      </nav>
    );
  }

}
