
/*
 * User.js
 */
 // Private
 // 

/*
 * app.js
 */
var User = require('./User');
var bob = new User('Bob');
var joe = new User('Joe');

console.log("Bob-Id",bob.id);         // 0
console.log("JoeId",joe.id);         // 1
console.log("bob balance",bob.balance);    // 0
bob.addBalance(100);
console.log("Bob balance",bob.balance);    // 99.9
console.log("Bob Paid",bob._paid);      // false (_paid is private; DON'T DO THIS!)
bob.togglePaid();
console.log("BOb User type",bob.userType()); // 'Paid User'
console.log("Joe user type",joe.userType()); // 'Free User'
