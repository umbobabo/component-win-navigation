import React from 'react/addons';

import List from '@economist/component-list';

import Category from './category';

export default class CategoryList extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.arrayOf(React.PropTypes.object),
    };
  }

  constructor() {
    super();

    this.renderCategory = this.renderCategory.bind(this);
  }

  renderCategory(category, key) {
    return (
      <Category key={key} {...category} />
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div className="navigation">
        <List className="navigation__head">{data.map(this.renderCategory)}</List>
      </div>
    );
  }

}
