/* eslint id-length: 0 */
import React, { PropTypes } from 'react';
import classes from 'classnames';

export default class ArticleItem extends React.Component {

  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      id: PropTypes.number,
      slug: PropTypes.string,
      publishedOn: PropTypes.string,
      activeArticleId: PropTypes.number,
    };
  }

  render() {
    const { title, text, id, activeArticleId } = this.props;
    const isActive = id && id === activeArticleId;
    const containerClasses = classes({
      'navigation__article': true,
      'navigation__article--active': isActive,
    });
    return (
      <div className={containerClasses}>
        <h2 className="navigation__article-title">{title}</h2>
        <span>{text}</span>
      </div>
    );
  }

}
