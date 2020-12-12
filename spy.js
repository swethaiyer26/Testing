var Person = function() {};    

Person.prototype.sayHelloWorld = function(dict) { 
   return dict.hello() + " " + dict.world(); 
}; 

var Dictionary = function() {}; 

Dictionary.prototype.hello = function() { 
   return "hello"; 
}; 

Dictionary.prototype.world = function() { 
   return "world"; 
}; 