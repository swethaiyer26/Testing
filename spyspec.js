
describe("Example Of jasmine Spy using spyOn()", function() { 
  
    it('uses the dictionary to say "hello world"', function() { 
       var dictionary = new Dictionary; 
       var person = new Person; 
         
       spyOn(dictionary, "hello");  
       spyOn(dictionary, "world");  
         
       person.sayHelloWorld(Dictionary);
       expect(dictionary.hello).toHaveBeenCalled();  
       expect(dictionary.world).toHaveBeenCalled();  
       
    }); 
 });
