import React, { PropTypes } from 'react';
import classes from 'classnames';

import ListOfComponent from './list-of-component';
import ArticleItem from './article-item';

export default class CategoryCard extends React.Component {

  static get propTypes() {
    return {
      childs: PropTypes.arrayOf(PropTypes.object),
      slug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      activeArticleId: PropTypes.number,
      handleFocusChange: PropTypes.func,
    };
  }

  render() {
    const children = this.props.childs;
    const { slug, focusSubcategorySlug, activeSubcategorySlug } = this.props;
    const isFocused = Boolean(slug) && slug === focusSubcategorySlug;
    const isActive = Boolean(slug) && slug === activeSubcategorySlug;
    const containerClasses = classes({
      'navigation__subcategory-card': true,
      'navigation__subcategory-card--focus': isFocused,
      'navigation__subcategory-card--active': isActive,
    });
    const childMetadata = {
      activeArticleId: this.props.activeArticleId,
    };
    return (
      <nav className={containerClasses}>
        <ListOfComponent
          className="navigation__articles"
          component={ArticleItem}
          data={children}
          childMetadata={childMetadata}
        />
      </nav>
    );
  }

}
