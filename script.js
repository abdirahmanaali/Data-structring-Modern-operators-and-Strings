'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// ==> 9: DATA STRUCTURING, MODERN OPERATORS AND STRING

// ==> DESTRUCRING ARRAYS - Is away of unpacking values from an arrays or an object into separate variables
const arr = [9, 8, 7];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// declaring all three variables at the same time
const [x, y, z] = arr;
// Whenever JS see an arry on the left hand side of the equal sign it starts destructring.
// Also needs to be declared as a variables using const
console.log(x, y, z);

// To get the 1st and 3rd arry in categories for ex. we can simply leave a hole like this
const [first, , third] = restaurant.categories;
// console.log(first, third);

// Nested destructring
const nested = [2, 3, [5, 6]];
// console.log(nested[0], nested[[2][0]]);
const [i, , [j, k]] = nested;
// we are destructring to get to index 2
// console.log(i, j, k);

// Default values
const [l = 1, m = 1, n = 1] = [8, 9];
// in trying to get n we will end up getting undefined becuase it's trying to read element 2 while it doesn't exist but we can set default values
console.log(l, m, n);
