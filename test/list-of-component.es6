import React from 'react/addons';

import ListOfComponent from '../list-of-component';

import List from '@economist/component-list';

class StubComponent extends React.Component {

  render() {
    return <div>Hello World</div>;
  }

}

const { createRenderer } = React.addons.TestUtils;
describe('ListOfComponent', () => {

  it('is compatible with React.Component', () => {
    ListOfComponent.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <ListOfComponent component={StubComponent} />
    ).should.equal(true);
  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('renders a basic list of a particular component', () => {
      const data = [
        {},
        {},
      ];
      renderer.render(
        <ListOfComponent
          className="stub-class"
          component={StubComponent}
          data={data}
          handleFocusChange={null}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <List className="stub-class">
          <StubComponent key={0} handleFocusChange={null} />
          <StubComponent key={1} handleFocusChange={null} />
        </List>
      );
    });

  });

});
