import React from 'react';

import ListOfComponent from './list-of-component';
import ArticleItem from './article-item';

export default class Subcategory extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      childs: React.PropTypes.arrayOf(React.PropTypes.object),
    };
  }

  render() {
    const { title } = this.props;
    const children = this.props.childs;
    return (
      <div className="navigation__subcategories__subcategory">
        <h2 className="navigation__subcategories__subcategory__title">{title}</h2>
        <ListOfComponent className="navigation__articles" component={ArticleItem} data={children} />
      </div>
    );
  }

}
