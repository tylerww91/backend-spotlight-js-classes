const { Honda, Tesla } = require('./classes');
describe('Honda class', () => {
  it('should default to 2 wheels and Honda', () => {
    const myHonda = new Honda('Julie');
    expect(myHonda.wheels).toEqual(2);
    expect(myHonda.brand).toEqual('Honda');
  });
});

describe('Tesla class', () => {
  it('should default to 4 wheels and Tesla', () => {
    const myTesla = new Tesla('Julie');
    expect(myTesla.wheels).toEqual(4);
    expect(myTesla.brand).toEqual('Tesla');
  });
});
