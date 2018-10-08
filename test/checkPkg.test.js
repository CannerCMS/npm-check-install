import checkPkg from "../src/checkPkg";

describe('checkPkg', () => {
  it('should package jest be found', done => {
    const onFound = jest.fn().mockImplementation(callback);
    const onNotFound = jest.fn().mockImplementation(callback);

    function callback() {
      expect(onFound).toBeCalled();
      expect(onNotFound).not.toBeCalled();
      done();
    };
    checkPkg('jest', {}, onFound, onNotFound);
  });

  it('should package antd not be found', done => {
    const onFound = jest.fn().mockImplementation(callback);
    const onNotFound = jest.fn().mockImplementation(callback);

    function callback() {
      expect(onFound).not.toBeCalled();
      expect(onNotFound).toBeCalled();
      done();
    }
    checkPkg('antd', {}, onFound, onNotFound);
  });
});