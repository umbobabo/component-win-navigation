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

  getFocusToggler = (slug) => {
    const { handleFocusChange, focusSubcategorySlug } = this.props;

    function sendFocusStateToParent(newFocus, event) {
      event.preventDefault();
      if (handleFocusChange) {
        handleFocusChange(newFocus, () => {
          const slugClass = slug && [ 'navigation__subcategory', slug ].filter((val) => val).join('-');
          scrollMobileBrowserTo(slugClass, global);
        });
      }
    }

    function focus(event) {
      sendFocusStateToParent({
        focusSubcategorySlug: slug,
      }, event);
    }

    function unfocus(event) {
      sendFocusStateToParent({
        focusSubcategorySlug: `${slug}:focus-off`,
      }, event);
    }

    const isFocused = Boolean(slug) && slug === focusSubcategorySlug;
    return isFocused ? unfocus : focus;
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
          <a href={subcategoryUrl(focusCategorySlug, slug)} onClick={this.getFocusToggler(slug)}>{title}</a>
        </h3>
        {isFocused ? <SubcategoryNavigationCard {...this.props} /> : ''}
      </div>
    );
  }

}
