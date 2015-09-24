import React from 'react';

import SubcategoryList from './subcategory-list';

export default class CategoryCard extends React.Component {

  static get propTypes() {
    return {
      childs: React.PropTypes.arrayOf(React.PropTypes.object),
    };
  }

  render() {
    const children = this.props.childs;
    return (
      <div className="navigation__head__category__card">
        {children ? <SubcategoryList data={children} /> : ''}
      </div>
    );
  }

}
