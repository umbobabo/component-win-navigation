import React from 'react';

export default class ArticleItem extends React.Component {

  render() {
    const { title, text} = this.props;
    return (
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    );
  }

}
