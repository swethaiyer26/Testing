describe("Example Of jasmine Spy using Create Spy", function() { 
   
    it("can have a spy function", function() { 
       var person = new Person(); 
       person.getName11 = jasmine.createSpy("Name spy"); 
       person.getName11(); 
       expect(person.getName11).toHaveBeenCalled(); 
    }); 
 }); 