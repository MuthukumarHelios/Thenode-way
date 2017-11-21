
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

console.log(bob.id);         // 0
console.log(joe.id);         // 1
console.log("bob balance",bob.balance);    // 0
bob.addBalance(100);
console.log("joe balance",bob.balance);    // 99.9
console.log(bob._paid);      // false (_paid is private; DON'T DO THIS!)
bob.togglePaid();
console.log(bob.userType()); // 'Paid User'
console.log(joe.userType()); // 'Free User'
