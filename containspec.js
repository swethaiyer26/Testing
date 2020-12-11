describe("Different Methods of Expect Block",function () {  
    it("The  Example of toContain() method",function () { 
       expect([1,2, 3, 4]).toContain(3);
       expect([1,2,3,4]).toContain(2);
       expect(12.34).toBeCloseTo(12.3,1);
       expect(12.34).toBeCloseTo(15,1);
    });
 }); 