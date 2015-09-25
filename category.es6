import React from 'react';

import CategoryCard from './category-card';

export default class Category extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      slug: React.PropTypes.string,
    };
  }

  render() {
    const { title, slug } = this.props;
    return (
      <div className="navigation__head__category">
        <a href={slug}>{title}</a>
        <CategoryCard {...this.props} />
      </div>
    );
  }
}
