
// @params {Function argument} For scope of the variable
/*
  * app.js
 
  */
 var singleton = require('./a-singleton');
 
 console.log(singleton.someProperty); // 'I am public'
 console.log(singleton.toggleZ()); // false 
 console.log(singleton.toggleZ()); // true (public functions can still reference private variables)
 console.log(singleton.addFive(1));
