describe("nested",function() {   
     
    describe("Retaining values ",function () {
       it ("Should retain the current value of all time", function () { 
          expect(nested.currentVal).toBeDefined();   
          expect(nested.currentVal).toEqual(0);   
       });    
    }); 
 
    describe("Adding single number ",function () {     
  
       it("should add numbers",function() { 
          expect(nested.add(5)).toEqual(5); 
          expect(nested.add(5)).toEqual(10); 
       });         
    }); 
    describe("Adding Different Numbers",function () {  
 
       it("Should add any number of numbers",function() {  
          expect(nested.addAny(1,2,3)).toEqual(16);  
       });    
    }); 
 });