import chai from 'chai';
const should = chai.should();

import React from 'react';

import isPropTypeComponent from '../is-proptype-component';

class StubComponent extends React.Component {

  render() {
    return (
      <span>This is a stub.</span>
    );
  }

}

describe('isPropTypeComponent', () => {

  it('should do nothing if a valid component', () => {
    const ret = isPropTypeComponent({
      'propKey': StubComponent,
    }, 'propKey', 'Component');
    should.not.exist(ret);
  });

  it('should return error if not a component', () => {
    const ret = isPropTypeComponent({
      'propKey': null,
    }, 'propKey', 'Component');
    ret.message.should.equal('Component was not passed a valid renderable class inside its \'propKey\' prop.');
  });

});
