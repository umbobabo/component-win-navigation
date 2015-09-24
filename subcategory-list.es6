import React from 'react';

import List from '@economist/component-list';

import Subcategory from './subcategory';

export default class SubcategoryList extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.arrayOf(React.PropTypes.object),
    };
  }

  constructor() {
    super();

    this.renderSubcategory = this.renderSubcategory.bind(this);
  }

  renderSubcategory(subcategory, key) {
    return (
      <Subcategory key={key} {...subcategory} />
    );
  }

  render() {
    const { data } = this.props;
    return (
      <List>{data.map(this.renderSubcategory)}</List>
    );
  }

}
