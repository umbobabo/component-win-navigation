import React from 'react';

import ListOfComponent from './list-of-component';
import Subcategory from './subcategory';

export default class CategoryCard extends React.Component {

  static get propTypes() {
    return {
      childs: React.PropTypes.arrayOf(React.PropTypes.object),
    };
  }

  render() {
    const children = this.props.childs;
    const childProps = this.props.childProps;
    return (
      <div className="navigation__category-card">
        <ListOfComponent className="navigation__subcategories" component={Subcategory} data={children} childProps={childProps} />
      </div>
    );
  }

}
