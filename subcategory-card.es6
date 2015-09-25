import React from 'react';

import ListOfComponent from './list-of-component';
import ArticleItem from './article-item';

export default class CategoryCard extends React.Component {

  static get propTypes() {
    return {
      childs: React.PropTypes.arrayOf(React.PropTypes.object),
    };
  }

  render() {
    const children = this.props.childs;
    return (
      <div className="navigation__subcategory-card">
        <ListOfComponent className="navigation__articles" component={ArticleItem} data={children} />
      </div>
    );
  }

}
