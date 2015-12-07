import React, { PropTypes } from 'react';
import classnames from 'classnames';
import isMobileWidth from './is-mobile';
import ListOfComponent from './list-of-component';
import SubcategoryNavigationItem from './subcategory-navigation-item';

export default class CategoryNavigationCard extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      slug: PropTypes.string.isRequired,
      navigationItems: PropTypes.arrayOf(PropTypes.object),
      focusCategorySlug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      activeArticleId: PropTypes.number,
      handleFocusChange: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      navigationItems: [],
    };
  }

  get defaultSubcategorySlug() {
    // By default the first subcategory of a category should have focus
    // unless you are using a mobile browser.
    const isDesktop = !isMobileWidth(global);
    const subcategoryNavigationItems = this.props.navigationItems;

    const defaultSubcategorySlug = isDesktop && subcategoryNavigationItems[0] ?
                                   subcategoryNavigationItems[0].slug :
                                   null;
    return defaultSubcategorySlug;
  }

  render() {
    const subcategoryNavigationItems = this.props.navigationItems;

    const sharedProps = {
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug || this.defaultSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
      handleFocusChange: this.props.handleFocusChange,
    };

    const { slug, focusCategorySlug, activeCategorySlug } = this.props;
    const isFocused = Boolean(slug) && slug === focusCategorySlug;
    const isActive = Boolean(slug) && slug === activeCategorySlug;
    const containerClasses = {
      'navigation__category-card--focus': isFocused,
      'navigation__category-card--active': isActive,
    };
    return (
      <nav className={classnames(this.props.className, 'navigation__category-card', containerClasses)}>
        <ListOfComponent
          className="navigation__subcategories"
          component={SubcategoryNavigationItem}
          items={subcategoryNavigationItems}
          sharedProps={sharedProps}
        />
      </nav>
    );
  }
}
