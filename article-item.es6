/* eslint id-length: 0 */

import React from 'react';

export default class ArticleItem extends React.Component {

  static get propTypes() {
    return {
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      text: React.PropTypes.string,
      slug: React.PropTypes.string,
    };
  }

  render() {
    const { title, text } = this.props;
    return (
      <div className="navigation__articles__article">
        <h2>{title}</h2>
        <span>{text}</span>
      </div>
    );
  }

}
