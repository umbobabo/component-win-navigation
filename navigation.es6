import React, { PropTypes } from 'react';
import classnames from 'classnames';

import isMobileWidth from './is-mobile';

import RootNavigationCard from './root-navigation-card';
import NavigationMenuButton from './navigation-menu-button';

export default class Navigation extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      navigationItems: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
          navigationItems: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
              navigationItems: PropTypes.arrayOf(
                PropTypes.shape({
                  id: PropTypes.number.isRequired,
                  slug: PropTypes.string.isRequired,
                  title: PropTypes.string.isRequired,
                  text: PropTypes.string.isRequired,
                  publishedOn: PropTypes.string,
                })
              )
            })
          )
        })
      ),
      focusCategorySlug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      activeArticleId: PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      navigationItems: [],
    };
  }

  state = {
    focusNavigation: false,
    focusCategorySlug: null,
    focusSubcategorySlug: null,
    activeCategorySlug: null,
    activeSubcategorySlug: null,
    activeArticleId: null,
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

  resetFocus = () => {
    this.setState({
      focusCategorySlug: null,
      focusSubcategorySlug: null,
    });
  }

  handleFocusChange = (focusChange, afterNewStateRenderedCallback = () => {}) => {
    this.setState(focusChange, afterNewStateRenderedCallback);
  }

  handleToggleNavigation = (focusChange, afterNewStateRenderedCallback = () => {}) => {
    this.setState(focusChange, afterNewStateRenderedCallback);
  }

  render() {
    const navigationItems = this.props.navigationItems;
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
        <RootNavigationCard
          navigationItems={navigationItems}
          handleFocusChange={this.handleFocusChange}
          {...this.state}
        />
      </nav>
    );
  }

}
