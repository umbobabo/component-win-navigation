import isMobileWidth from '../is-mobile';

describe('isMobileWidth', () => {

  it('should return true if screen width is below 600', () => {
    const scope = {
      window: {
        innerWidth: 599,
      },
      document: {},
    };
    isMobileWidth(scope).should.be.equal(true);
  });

  it('should return false if screen width is above 600', () => {
    const scope = {
      window: {
        innerWidth: 601,
      },
      document: {},
    };
    isMobileWidth(scope).should.be.equal(false);
  });

});
