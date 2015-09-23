import React from 'react';

import List from '@economist/component-list';

import CategoryCard from './card';

export default class CategoryList extends React.Component {

  constructor() {
    super();

    this._renderCategory = this._renderCategory.bind(this);
  }

  _renderCategory(category, key) {
    const { activeCategory } = this.props;
    
    const { title, href, children } = category;
    return (
      <div key={key} className='navigation__head__category'>
        <a href={href}>{title}</a>
        { children ? <CategoryCard data={category} activeCategory={activeCategory} /> : '' }
      </div>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <div className='navigation'>
        <List className='navigation__head'>{data.map(this._renderCategory)}</List>
      </div>
    );
  }

}
