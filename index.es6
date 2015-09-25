import React from 'react';

import ListOfComponent from './list-of-component';
import Category from './category';

export default class Navigation extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.arrayOf(React.PropTypes.object),
      focusCategorySlug: React.PropTypes.string,
      focusSubcategorySlug: React.PropTypes.string,
    };
  }

  render() {
    const data = this.props.data;
    const childProps = {
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug,
    };
    return (
      <nav className="navigation">
        <ListOfComponent className="navigation__categories" component={Category} data={data} childProps={childProps} />
      </nav>
    );
  }

}
