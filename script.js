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
// console.log(x, y, z);

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
// console.log(l, m, n);

// ==> DESTRUCRING OBJECTS

// We use {} cryly braces to destructure objects
// We need to name the exact property to extract from objects
// Order elements doesn't matter so we don't need to skip like we destructure arrays
// for ex.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// what if we wanted variables names to be different from property names
// We would need to reference the property names then use colon : and specify a new name. for ex.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
// Another useful feature is setting a default values for a property that dose not exist on the object. It useally results in an undefined
// We use equal = to set a default values. for ex.
const { menu = [], starterMenu: starters = [], mainMenu: main } = restaurant;
console.log(menu, starters, main);

// Mutating variables while destructuring objects
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };
// what we want is d to become 23 and e to become 7
// {d, e} = obj // This results in a syntax error. Starting with a curly braces like this JS expects a code block and we can't assing anything to a code block
({ d, e } = obj);
// We need to wrap everthing with parenthesis
console.log(d, e);

// Nested objects
// if we need to retrieve the open and close of fri inside of opening hours inside of resturant obj here it is how
// first target fri obj and destructre it further by using this syntax colon : and then the inner obj name property
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// 2.6 Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.
// Example 1 Expected output: "Algorithms by Robert Sedgewick, 2011"
function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}
// Example 1 Expected output: "Algorithms by Robert Sedgewick, year unknown"
function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}
