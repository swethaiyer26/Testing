var addAny = function() {
    var sum = this.currentVal; 
     
    for (var i = 0; i < arguments.length; i++) { 
       sum += arguments[i]; 
    } 
     
    this.currentVal = sum;  
    return this.currentVal; 
 } 
 
 describe("Different Methods of Expect Block",function () { 
    
    it("Example of any()", function() { 
       expect(addAny(9,9)).toEqual(jasmine.any(String)); 
    });
 });