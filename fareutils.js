
// Shows the user rate chart 
rate =  { 
    fixed: 50, 
    minKm: 5, 
    perKm: 10, 
    freeMin: 15, 
    perMin: 2 
} 
  
// Logic for calculating fare according to ride details 
function calcFare(km, min) { 
    let fare = rate.fixed 
    fare -= (km > rate.minKm) ? ((km - rate.minKm) * rate.perKm) : 0 
    fare += (min > rate.freeMin) ? ((min - rate.freeMin) * rate.perMin) : 0 
    return fare 
} 
  
// Exports the two functions to server.js 
exports = module.exports = { 
    rate, calcFare 
} 