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

    this.focus = this.focus.bind(this);
  }

  focus(slug) {
    const handleFocusChange = this.props.handleFocusChange;
    const newFocus = {
      focusSubcategorySlug: slug,
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
    const isFocused = slug === focusSubcategorySlug;
    const isActive = slug === activeSubcategorySlug;
    const titleClasses = classes({
      'navigation__subcategory-title': true,
      'navigation__subcategory-title--focus': isFocused,
      'navigation__subcategory-title--active': isActive,
    });
    return (
      <div className="navigation__subcategory">
        <h2 className={titleClasses}>
          <a href={subcategoryUrl(focusCategorySlug, slug)} onClick={this.focus(slug)}>{title}</a>
        </h2>
        {isFocused ? <SubcategoryCard {...this.props} /> : ''}
      </div>
    );
  }

}
