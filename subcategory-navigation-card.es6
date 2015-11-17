import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ListOfComponent from './list-of-component';
import ArticleNavigationItem from './article-navigation-item';

export default class SubcategoryNavigationCard extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      slug: PropTypes.string.isRequired,
      navigationItems: PropTypes.arrayOf(PropTypes.object),
      focusSubcategorySlug: PropTypes.string,
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
    const articleNavigationItems = this.props.navigationItems;

    const sharedProps = {
      activeArticleId: this.props.activeArticleId,
      handleFocusChange: this.props.handleFocusChange,
    };

    const { slug, focusSubcategorySlug, activeSubcategorySlug } = this.props;
    const isFocused = Boolean(slug) && slug === focusSubcategorySlug;
    const isActive = Boolean(slug) && slug === activeSubcategorySlug;
    const containerClasses = {
      'navigation__subcategory-card--focus': isFocused,
      'navigation__subcategory-card--active': isActive,
    };
    return (
      <nav className={classnames(this.props.className, 'navigation__subcategory-card', containerClasses)}>
        <ListOfComponent
          className="navigation__articles"
          component={ArticleNavigationItem}
          items={articleNavigationItems}
          sharedProps={sharedProps}
        />
      </nav>
    );
  }

}
