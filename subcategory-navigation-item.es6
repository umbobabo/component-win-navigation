import React, { PropTypes } from 'react';
import classnames from 'classnames';

import SubcategoryNavigationCard from './subcategory-navigation-card';

import scrollMobileBrowserTo from './scroll-mobile-to';

import { subcategoryUrl } from './urls';

export default class SubcategoryNavigationItem extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      childs: PropTypes.arrayOf(PropTypes.object),
      focusCategorySlug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      handleFocusChange: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      childs: [],
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
      focusSubcategorySlug: !isFocused ? slug : `${slug}:focus-off`,
    };
    return (event) => {
      event.preventDefault();
      if (handleFocusChange) {
        handleFocusChange(newFocus);

        const slugClass = slug && [ 'navigation__subcategory', slug ].filter((val) => val).join('-');
        scrollMobileBrowserTo(slugClass, global);
      }
    };
  }

  render() {
    const { title, slug, focusCategorySlug, focusSubcategorySlug, activeSubcategorySlug } = this.props;
    const isFocused = Boolean(slug) && slug === focusSubcategorySlug;
    const isActive = Boolean(slug) && slug === activeSubcategorySlug;
    const titleClasses = {
      'navigation__subcategory-title--focus': isFocused,
      'navigation__subcategory-title--active': isActive,
    };
    const slugClass = slug && [ 'navigation__subcategory', slug ].filter((val) => val).join('-');
    return (
      <div className={classnames(this.props.className, 'navigation__subcategory', slugClass)}>
        <h3 className={classnames('navigation__subcategory-title', titleClasses)}>
          <a href={subcategoryUrl(focusCategorySlug, slug)} onClick={this.focusToggle(slug)}>{title}</a>
        </h3>
        {isFocused ? <SubcategoryNavigationCard {...this.props} /> : ''}
      </div>
    );
  }

}
