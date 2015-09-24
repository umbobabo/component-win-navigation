import React from 'react/addons';

import List from '@economist/component-list';

import ArticleItem from './article-item';

export default class ArticleList extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.arrayOf(React.PropTypes.object),
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
    const { data } = this.props;
    return (
      <div>
        {data ? <List>{data.map(this.renderArticleItem)}</List> : ''}
      </div>
    );
  }
}
