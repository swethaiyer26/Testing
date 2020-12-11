describe('This custom matcher example ', function() { 
   
    beforeEach(function() { 
       
       jasmine.addMatchers({ 
          validateAge: function() { 
             return { 
                compare: function(actual,expected) { 
                  var result = {}; 
                  result.pass = (actual >= 13 && actual <= 19); 
                  result.message = 'sorry u are not a teen ';  
                  return result; 
                }  
             };   
          }    
       });    
    });  
     
    it('Lets see whether u are teen or not', function() { 
       var myAge = 14; 
       expect(myAge).validateAge();  
    });
    
    xit('Lets see whether u are teen or not ', function() {  
       var yourAge = 18; 
      
    });
});
 