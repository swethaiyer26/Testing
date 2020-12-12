var currentval=0;
beforeEach(function(){
currentval=5;
});
describe("Example of expected block",function(){
    it("Example of before",function(){
    expect(currentval).toEqual(15);
    });
});