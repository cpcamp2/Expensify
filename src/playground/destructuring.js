//
// Object Destructuring notes
//

// const person = {
//   name: 'Chris',
//   age: 26,
//   location: {
//     city: 'New York',
//     temp: 75
//   }
// };
//
// // Typical example
// // const name = person.name;
// // const age = person.age;
//
// // Object destructuring example
// // Example of adding a default value w/ name and renaming variable
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);
//
// // Example of renaming convention
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature}F in ${city}.`);
// }


//Challenge
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName); // Penguin, default value self-published


//
// Array Destructuring notes
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsyvania', '19147'];

// Since we aren't using the street and zip
// We skip the first item (street) by leaving a comma
// Since zip is after city and state we just leave it off entirely
// Same as obj destr w/ default value conventions
// const [, city = 'New York', state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}`);

// Challenge
// const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
// const [itemName, , mediumPrice] = item;
//
// console.log(`A medium ${itemName} costs ${mediumPrice}`)
