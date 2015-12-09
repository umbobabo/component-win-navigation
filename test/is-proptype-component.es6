import chai from 'chai';
import React from 'react';
import isPropTypeComponent from '../is-proptype-component';

const should = chai.should();
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

  describe('should return an error if', () => {
    /* eslint no-undefined: 0 */
    [
      null,
      undefined,
      'string',
      100, // eslint-disable-line
      45.23, // eslint-disable-line
      function () {},
    ].forEach((value) => {
      it(`passed a non-component such as ${value}`, () => {
        const ret = isPropTypeComponent({
          'propKey': value,
        }, 'propKey', 'Component');
        ret.message.should.equal('Component was not passed a valid renderable class inside its \'propKey\' prop.');
      });
    });
  });
});
