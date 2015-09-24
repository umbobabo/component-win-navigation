import React from 'react';

import ArticleList from './article-list';

export default class Subcategory extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      href: React.PropTypes.string,
      childs: React.PropTypes.arrayOf(React.PropTypes.object),
    };
  }

  render() {
    const { title, href } = this.props;
    const children = this.props.childs;
    return (
      <div>
        <a href={href}>{title}</a>
        <ArticleList data={children} />
      </div>
    );
  }

}
