import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '@economist/component-icon';

import { navigationOpenUrl } from './urls';

export default class NavigationMenuButton extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      focusNavigation: PropTypes.string,
      handleToggleNavigation: PropTypes.func,
    };
  }

  toggleNavigation = () => {
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
    const focusNavigation = this.props.focusNavigation;
    const menuButtonClasses = {
      'navigation__menu-button--open': focusNavigation,
      'navigation__menu-button--closed': !focusNavigation,
    };
    return (
      <a
        href={navigationOpenUrl(focusNavigation)}
        onClick={this.toggleNavigation()}
        className="navigation__menu-button-wrapper-link"
      >
        <div className={classnames(this.props.className, 'navigation__menu-button', menuButtonClasses)}>
          <Icon
            icon={focusNavigation ? 'close' : 'hamburger'}
            color="white"
            background="transparent"
          />
        </div>
      </a>
    );
  }

}
