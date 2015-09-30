import React, { PropTypes } from 'react';
import classes from 'classnames';

import CategoryCard from './category-card';

function categoryUrl(category) {
  /* eslint prefer-template: 0 */
  return '?category=' + category;
}

export default class Category extends React.Component {

  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      focusCategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      handleFocusChange: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);

    this.focusToggle = this.focusToggle.bind(this);
  }

  focusToggle(slug) {
    const { handleFocusChange, focusCategorySlug } = this.props;
    // The focus state is toggled.
    const isFocused = Boolean(slug) && slug === focusCategorySlug;
    const newFocus = {
      focusCategorySlug: !isFocused ? slug : slug + ':focus-off',
      focusSubcategorySlug: null,
    };
    return (event) => {
      event.preventDefault();
      if (handleFocusChange) {
        handleFocusChange(newFocus);
      }
    };
  }

  render() {
    const { title, slug, focusCategorySlug, activeCategorySlug } = this.props;
    const isFocused = Boolean(slug) && slug === focusCategorySlug;
    const isActive = Boolean(slug) && slug === activeCategorySlug;
    const titleClasses = classes({
      'navigation__category-title': true,
      'navigation__category-title--focus': isFocused,
      'navigation__category-title--active': isActive,
    });
    return (
      <div className="navigation__category">
        <h2 className={titleClasses}>
          <a href={categoryUrl(slug)} onClick={this.focusToggle(slug)}>{title}</a>
        </h2>
        {isFocused ? <CategoryCard {...this.props} /> : ''}
      </div>
    );
  }
}
