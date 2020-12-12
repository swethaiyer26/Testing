var currentval=0;
afterEach(function(){
currentval=5;
});
describe("Example of expected block",function(){
    it("after firstcall",function(){
    expect(currentval).toEqual(0);
    });
    it("after secondcall",function(){
        expect(currentval).toEqual(5);
    });
});