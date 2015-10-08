import React, { PropTypes } from 'react';
import classnames from 'classnames';

import isMobileWidth from './is-mobile';

import RootNavigationCard from './root-navigation-card';
import NavigationMenuButton from './navigation-menu-button';

export default class Navigation extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.object),
      focusCategorySlug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      activeArticleId: PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      data: [],
    };
  }

  constructor(props) {
    super(props);

    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleToggleNavigation = this.handleToggleNavigation.bind(this);

    this.state = {
      focusNavigation: !isMobileWidth(global),
      focusCategorySlug: null,
      focusSubcategorySlug: null,
      activeCategorySlug: null,
      activeSubcategorySlug: null,
      activeArticleId: null,
    };
  }

  componentWillMount() {
    this.setState({
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
    });
  }

  resetFocus() {
    this.setState({
      focusCategorySlug: null,
      focusSubcategorySlug: null,
    });
  }

  handleFocusChange(focusChange, afterNewStateRenderedCallback = () => {}) {
    this.setState(focusChange, afterNewStateRenderedCallback);
  }

  handleToggleNavigation(focusChange, afterNewStateRenderedCallback = () => {}) {
    this.setState(focusChange, afterNewStateRenderedCallback);
  }

  render() {
    const data = this.props.data;
    const focusNavigation = this.state.focusNavigation;
    return (
      <nav
        role="navigation"
        className={classnames(this.props.className, 'navigation')}
      >
        <NavigationMenuButton
          handleToggleNavigation={this.handleToggleNavigation}
          focusNavigation={focusNavigation}
        />
        <RootNavigationCard childs={data} handleFocusChange={this.handleFocusChange} {...this.state} />
      </nav>
    );
  }

}
