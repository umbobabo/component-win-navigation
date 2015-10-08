import React, { PropTypes } from 'react';
import classnames from 'classnames';

import CategoryNavigationCard from './category-navigation-card';

import scrollMobileBrowserTo from './scroll-mobile-to';

import { categoryUrl } from './urls';

export default class CategoryNavigationItem extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      childs: PropTypes.arrayOf(PropTypes.object),
      focusCategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
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
    const { handleFocusChange, focusCategorySlug } = this.props;
    // The focus state is toggled.
    const isFocused = Boolean(slug) && slug === focusCategorySlug;
    const newFocus = {
      focusCategorySlug: !isFocused ? slug : `${slug}:focus-off`,
      focusSubcategorySlug: null,
    };
    return (event) => {
      event.preventDefault();
      if (handleFocusChange) {
        handleFocusChange(newFocus);

        const slugClass = slug && [ 'navigation__category', slug ].filter((val) => val).join('-');
        scrollMobileBrowserTo(slugClass, global);
      }
    };
  }

  render() {
    const { title, slug, focusCategorySlug, activeCategorySlug } = this.props;
    const isFocused = Boolean(slug) && slug === focusCategorySlug;
    const isActive = Boolean(slug) && slug === activeCategorySlug;
    const titleClasses = {
      'navigation__category-title--focus': isFocused,
      'navigation__category-title--active': isActive,
    };
    const slugClass = slug && [ 'navigation__category', slug ].filter((val) => val).join('-');
    return (
      <div className={classnames(this.props.className, 'navigation__category', slugClass)}>
        <h2 className={classnames('navigation__category-title', titleClasses)}>
          <a href={categoryUrl(slug)} onClick={this.focusToggle(slug)}>{title}</a>
        </h2>
        {isFocused ? <CategoryNavigationCard {...this.props} /> : ''}
      </div>
    );
  }
}
