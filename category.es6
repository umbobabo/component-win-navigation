import React from 'react';

import CategoryCard from './category-card';

export default class Category extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
      slug: React.PropTypes.string.isRequired,
    };
  }

  render() {
    const { title, slug } = this.props;
    return (
      <div className="navigation__category">
        <h2 className="navigation__category-title"><a href={slug}>{title}</a></h2>
        <CategoryCard {...this.props} />
      </div>
    );
  }
}
