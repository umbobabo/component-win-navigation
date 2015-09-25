/* eslint id-length: 0 */

import React from 'react';

export default class ArticleItem extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
      text: React.PropTypes.string,
      id: React.PropTypes.number,
      slug: React.PropTypes.string,
      publishedOn: React.PropTypes.string,
    };
  }

  render() {
    const { title, text } = this.props;
    return (
      <div className="navigation__article">
        <h2 className="navigation__article-title">{title}</h2>
        <span>{text}</span>
      </div>
    );
  }

}
