
// @params {Function argument} For scope of the variable
/*
  * app.js
 
  */
 var singleton = require('./a-singleton');
 
 console.log("Properties -->",singleton.someProperty); // 'I am public'
 console.log("Toogle1 -->",singleton.toggleZ()); // false 
 console.log("Toogle2 -->",singleton.toggleZ()); 
 
 // true (public functions can still reference private variables)
 
 console.log("Addition -->",singleton.addFive(1));
