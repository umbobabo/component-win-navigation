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
    const { title, slug, focusCategorySlug } = this.props;
    const isFocused = slug === focusCategorySlug;
    const childProps = {
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug,
    };
    return (
      <div className="navigation__category">
        <h2 className="navigation__category-title"><a href={slug}>{title}</a></h2>
        {isFocused ? <CategoryCard {...this.props} childProps={childProps} /> : ''}
      </div>
    );
  }
}
