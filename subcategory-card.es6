import React, { PropTypes } from 'react';

import ListOfComponent from './list-of-component';
import ArticleItem from './article-item';

export default class CategoryCard extends React.Component {

  static get propTypes() {
    return {
      childs: PropTypes.arrayOf(PropTypes.object),
      focusCategorySlug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      activeArticleId: PropTypes.number,
      handleFocusChange: PropTypes.instanceOf(Function),
    };
  }

  render() {
    const children = this.props.childs;
    const childMetadata = {
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
    };
    return (
      <nav className="navigation__subcategory-card">
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
