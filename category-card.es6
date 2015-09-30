import React, { PropTypes } from 'react';
import classes from 'classnames';

import isMobile from 'is-mobile';

import ListOfComponent from './list-of-component';
import Subcategory from './subcategory';

export default class CategoryCard extends React.Component {

  static get propTypes() {
    return {
      childs: PropTypes.arrayOf(PropTypes.object),
      slug: PropTypes.string,
      focusCategorySlug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      activeArticleId: PropTypes.number,
      handleFocusChange: PropTypes.func,
    };
  }

  render() {
    const handleFocusChange = this.props.handleFocusChange;

    const children = this.props.childs;

    // By default the first subcategory of a category should have focus
    // unless you are using a mobile browser.
    const isNotMobileBrowser = !isMobile();
    const defaultSubcategorySlug = isNotMobileBrowser && children[0] ? children[0].slug : null;

    const { slug, focusCategorySlug, activeCategorySlug } = this.props;
    const isFocused = Boolean(slug) && slug === focusCategorySlug;
    const isActive = Boolean(slug) && slug === activeCategorySlug;
    const containerClasses = classes({
      'navigation__category-card': true,
      'navigation__category-card--focus': isFocused,
      'navigation__category-card--active': isActive,
    });

    const childMetadata = {
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug || defaultSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
    };
    return (
      <nav className={containerClasses}>
        <ListOfComponent
          className="navigation__subcategories"
          component={Subcategory}
          data={children}
          childMetadata={childMetadata}
          handleFocusChange={handleFocusChange}
        />
      </nav>
    );
  }

}
