describe("Different Methods of Expect Block",function () { 
    var x=25;
    it("Example of toBeNaN()", function () { 
       expect(0 / 0).toBeNaN(); 
    });
    it("Example of NAN",function(){
expect(x/5).toBeNaN();
    });
 });