import React from 'react/addons';

export default class ArticleItem extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      text: React.PropTypes.string,
    };
  }

  render() {
    const { title, text } = this.props;
    return (
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    );
  }

}
