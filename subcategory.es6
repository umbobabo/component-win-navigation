import React from 'react';

import List from '@economist/component-list';

import ArticleItem from './article';

export default class Subcategory extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      href: React.PropTypes.string,
      children: React.PropTypes.arrayOf(React.PropTypes.object),
    };
  }

  constructor() {
    super();

    this.renderArticleItem = this.renderArticleItem.bind(this);
  }

  renderArticleItem(article, key) {
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
        {children ? <List>{children.map(this.renderArticleItem)}</List> : ''}
      </div>
    );
  }

}
