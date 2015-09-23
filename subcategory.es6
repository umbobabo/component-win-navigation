import React from 'react';

import List from '@economist/component-list';

import ArticleItem from './article';

export default class Subcategory extends React.Component {

  constructor() {
    super();

    this._renderArticleItem = this._renderArticleItem.bind(this);
  }

  _renderArticleItem(article, key) {
    const { title, text } = article;
    return (
      <ArticleItem key={key} title={title} text={text} />
    );
  }

  render() {
    const { title, href, children } = this.props;
    return (
      <div>
        <a href={href}>{title}</a>
        {children ? <List>{children.map(this._renderArticleItem)}</List> : '' }
      </div>
    );
  }

}
