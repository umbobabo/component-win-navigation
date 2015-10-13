import React from 'react/addons';

import NavigationMenuButton from '../navigation-menu-button';
import Icon from '@economist/component-icon';

const { createRenderer } = React.addons.TestUtils;
describe('NavigationMenuButton', () => {

  it('is compatible with React.Component', () => {
    NavigationMenuButton.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <NavigationMenuButton title={'Here is a title'} />
    ).should.equal(true);
  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('renders open', () => {
      renderer.render(
        <NavigationMenuButton
          focusNavigation
          handleToggleNavigation={() => {}}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const onClickStub = renderOutput.props.onClick;
      renderOutput.should.deep.equal(
        <a
          href={'?navigation=false'}
          onClick={onClickStub}
          className="navigation__menu-button-wrapper-link"
        >
          <div className={'navigation__menu-button navigation__menu-button--open'}>
            <Icon
              icon="close"
              color="white"
              background="transparent"
            />
          </div>
        </a>
      );
    });

    it('renders closed', () => {
      renderer.render(
        <NavigationMenuButton
          handleToggleNavigation={() => {}}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const onClickStub = renderOutput.props.onClick;
      renderOutput.should.deep.equal(
        <a
          href={'?navigation=true'}
          onClick={onClickStub}
          className="navigation__menu-button-wrapper-link"
        >
          <div className={'navigation__menu-button navigation__menu-button--closed'}>
            <Icon
              icon="hamburger"
              color="white"
              background="transparent"
            />
          </div>
        </a>
      );
    });

  });

});
