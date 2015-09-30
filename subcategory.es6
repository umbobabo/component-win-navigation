import React, { PropTypes } from 'react';
import classes from 'classnames';

import SubcategoryCard from './subcategory-card';

function subcategoryUrl(category, subcategory) {
  /* eslint prefer-template: 0 */
  return '?category=' + category + '&subcategory=' + subcategory;
}

export default class Subcategory extends React.Component {

  static get propTypes() {
    return {
      title: PropTypes.string,
      slug: PropTypes.string,
      childs: PropTypes.arrayOf(PropTypes.object),
      focusCategorySlug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      handleFocusChange: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);

    this.focusToggle = this.focusToggle.bind(this);
  }

  focusToggle(slug) {
    const { handleFocusChange, focusSubcategorySlug } = this.props;
    // The focus state is toggled.
    const isFocused = Boolean(slug) && slug === focusSubcategorySlug;
    const newFocus = {
      focusSubcategorySlug: !isFocused ? slug : slug + ':focus-off',
    };
    return (event) => {
      event.preventDefault();
      if (handleFocusChange) {
        handleFocusChange(newFocus);
      }
    };
  }

  render() {
    const { title, slug, focusCategorySlug, focusSubcategorySlug, activeSubcategorySlug } = this.props;
    const isFocused = Boolean(slug) && slug === focusSubcategorySlug;
    const isActive = Boolean(slug) && slug === activeSubcategorySlug;
    const titleClasses = classes({
      'navigation__subcategory-title': true,
      'navigation__subcategory-title--focus': isFocused,
      'navigation__subcategory-title--active': isActive,
    });
    return (
      <div className="navigation__subcategory">
        <h2 className={titleClasses}>
          <a href={subcategoryUrl(focusCategorySlug, slug)} onClick={this.focusToggle(slug)}>{title}</a>
        </h2>
        {isFocused ? <SubcategoryCard {...this.props} /> : ''}
      </div>
    );
  }

}
