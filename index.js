"use strict";

// task 1
var a = 1;

if (a === 1) {
  console.log('right');
} else {
  console.log('wrong');
}

// task 2
var item = false;

if (!item) {
  console.log('right');
} else {
  console.log('wrong');
}

// ternary operator
var message = (!item) ? 'right' : 'wrong';
console.log(message);

// task 3
var messageTask3 = (a > 0 && a < 4) ? 'right' : 'wrong';
console.log(messageTask3);

// task 4
var b = 15;

var messageTask4 = (a > 3 && a < 12 || b >= 7 && b < 15) ? 'right' : 'wrong';
console.log(messageTask4);

// task 5
var month = 5;

if (month == 12 || month <= 2 && month > 0) {
  console.log('winter');
} else if ( month >= 3 && month <= 5) {
  console.log('spring');
} else if (month >= 6 && month <= 8) {
  console.log('summer');
} else if (month >= 9 && month <= 11) {
  console.log("autumn");
} else {
  console.log('error');
}

// task 6
var numbers = 100;

for (var i = 0; i < numbers; i+=1) {
  if (i % 2 == 0) {
    console.log('even: ' + i);
  }
}
