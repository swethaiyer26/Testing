// currentVal=0;
describe("Example of expected blocks",function(){
    var value="red";
    it("example to predefined",function(){
        // expect(currentVal).toBeDefined();
        // var undefineValue=0;
        // expect(undefineValue).toBeUndefined();
        expect(value).toBeNull();
    });
});