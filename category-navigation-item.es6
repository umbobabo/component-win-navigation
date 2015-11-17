import React, { PropTypes } from 'react';
import classnames from 'classnames';

import CategoryNavigationCard from './category-navigation-card';

import { categoryUrl } from './urls';

export default class CategoryNavigationItem extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      navigationItems: PropTypes.arrayOf(PropTypes.object),
      focusCategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      handleFocusChange: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      navigationItems: [],
    };
  }

  getFocusToggler = (slug) => {
    const { handleFocusChange, focusCategorySlug } = this.props;

    function sendFocusStateToParent(newFocus, event) {
      event.preventDefault();
      if (handleFocusChange) {
        handleFocusChange(newFocus);
      }
    }

    function focus(event) {
      sendFocusStateToParent({
        focusCategorySlug: slug,
        focusSubcategorySlug: null,
      }, event);
    }

    function unfocus(event) {
      sendFocusStateToParent({
        focusCategorySlug: `${slug}:focus-off`,
        focusSubcategorySlug: null,
      }, event);
    }

    const isFocused = Boolean(slug) && slug === focusCategorySlug;
    return isFocused ? unfocus : focus;
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
          <a href={categoryUrl(slug)} onClick={this.getFocusToggler(slug)}>{title}</a>
        </h2>
        {isFocused ? <CategoryNavigationCard {...this.props} /> : ''}
      </div>
    );
  }
}
