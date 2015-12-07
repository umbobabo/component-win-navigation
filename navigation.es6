import React, { PropTypes } from 'react';
import classnames from 'classnames';
import listensToClickOutside from 'react-click-outside';
import RootNavigationCard from './root-navigation-card';
import NavigationMenuButton from './navigation-menu-button';

class Navigation extends React.Component {
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
              ),
            })
          ),
        })
      ),
      focusNavigation: PropTypes.bool,
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

  constructor() {
    super(...arguments);
    this.resetFocus = this.resetFocus.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleToggleNavigation = this.handleToggleNavigation.bind(this);
    this.state = {
      focusNavigation: false,
      focusCategorySlug: null,
      focusSubcategorySlug: null,
      activeCategorySlug: null,
      activeSubcategorySlug: null,
      activeArticleId: null,
    };
  }

  componentWillMount() {
    this.setState({
      focusNavigation: this.props.focusNavigation || false,
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
    });
  }

  resetFocus() {
    this.setState({
      focusNavigation: false,
      focusCategorySlug: null,
      focusSubcategorySlug: null,
    });
  }

  handleClickOutside() {
    this.resetFocus();
  }

  handleFocusChange(focusChange, afterNewStateRenderedCallback = () => {}) { // eslint-disable-line
    if (focusChange === false) {
      this.resetFocus();
      return;
    }

    this.setState(focusChange, afterNewStateRenderedCallback);
  }

  handleToggleNavigation(focusChange, afterNewStateRenderedCallback = () => {}) { // eslint-disable-line
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

export default listensToClickOutside(Navigation);
