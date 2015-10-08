import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ListOfComponent from './list-of-component';
import CategoryNavigationItem from './category-navigation-item';

export default class RootNavigationCard extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      navigationItems: PropTypes.arrayOf(PropTypes.object),
      focusNavigation: PropTypes.bool,
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

  render() {
    const categoryNavigationItems = this.props.navigationItems;

    const sharedProps = {
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
      handleFocusChange: this.props.handleFocusChange,
    };

    const isFocused = this.props.focusNavigation;
    const containerClasses = {
      'navigation__root-card--focus': isFocused,
    };
    return (
      <nav className={classnames(this.props.className, 'navigation__root-card', containerClasses)}>
        <h1 className="navigation__header navigation__header--hidden">Menu</h1>
        <ListOfComponent
          className="navigation__categories"
          component={CategoryNavigationItem}
          items={categoryNavigationItems}
          sharedProps={sharedProps}
        />
      </nav>
    );
  }

}
