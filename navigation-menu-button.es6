import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class NavigationMenuButton extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      focusNavigation: PropTypes.string,
      handleToggleNavigation: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);

    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    const { handleToggleNavigation, focusNavigation } = this.props;
    const newFocus = {
      focusNavigation: !focusNavigation,
      focusCategorySlug: null,
      focusSubcategorySlug: null,
    };
    return (event) => {
      event.preventDefault();
      if (handleToggleNavigation) {
        handleToggleNavigation(newFocus);
      }
    };
  }

  render() {
    const menuButtonClasses = {
      'navigation__menu-button--open': this.props.focusNavigation,
      'navigation__menu-button--closed': !this.props.focusNavigation,
    };
    return (
      <div
        className={classnames(this.props.className, 'navigation__menu-button', menuButtonClasses)}
        onClick={this.toggleNavigation()}
      ></div>
    );
  }

}
