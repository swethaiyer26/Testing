

var throwerror=function(){
    // throw new Error();
};
describe("example of expected block",function(){
    var exp=25;
it("hey this will throw an error",function(){
    expect(throwerror).toThrow();
});
});