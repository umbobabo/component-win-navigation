import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ListOfComponent from './list-of-component';
import ArticleNavigationItem from './article-navigation-item';

export default class SubcategoryNavigationCard extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      slug: PropTypes.string.isRequired,
      childs: PropTypes.arrayOf(PropTypes.object),
      focusSubcategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      activeArticleId: PropTypes.number,
      handleFocusChange: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      childs: [],
    };
  }

  render() {
    const children = this.props.childs;
    const { slug, focusSubcategorySlug, activeSubcategorySlug } = this.props;
    const isFocused = Boolean(slug) && slug === focusSubcategorySlug;
    const isActive = Boolean(slug) && slug === activeSubcategorySlug;
    const containerClasses = {
      'navigation__subcategory-card--focus': isFocused,
      'navigation__subcategory-card--active': isActive,
    };
    const childMetadata = {
      activeArticleId: this.props.activeArticleId,
    };
    return (
      <nav className={classnames(this.props.className, 'navigation__subcategory-card', containerClasses)}>
        <ListOfComponent
          className="navigation__articles"
          component={ArticleNavigationItem}
          data={children}
          childMetadata={childMetadata}
        />
      </nav>
    );
  }

}
