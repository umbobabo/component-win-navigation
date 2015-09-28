import React, { PropTypes } from 'react';

import ListOfComponent from './list-of-component';
import ArticleItem from './article-item';

export default class CategoryCard extends React.Component {

  static get propTypes() {
    return {
      childs: PropTypes.arrayOf(PropTypes.object),
      activeArticleId: PropTypes.number,
      handleFocusChange: PropTypes.func,
    };
  }

  render() {
    const children = this.props.childs;
    const childMetadata = {
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
