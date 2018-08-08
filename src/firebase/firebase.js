import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBX-6a3hGWEnHkegKFYlMMrtbT62vShW3E",
  authDomain: "expensify-7b3cc.firebaseapp.com",
  databaseURL: "https://expensify-7b3cc.firebaseio.com",
  projectId: "expensify-7b3cc",
  storageBucket: "expensify-7b3cc.appspot.com",
  messagingSenderId: "124402843771"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').push({
  description: 'Coffee',
  note: 'I bought coffee',
  amount: 2500,
  createdAt: 0
  });

database.ref('expenses').push({
  description: 'House',
  note: 'I bought a house',
  amount: 250000000,
  createdAt: 100
});

database.ref('expenses').push({
  description: 'Butter',
  note: 'I bought a butter',
  amount: 6000,
  createdAt: 50
});

// database.ref('notes/-LJLzI9eQrACaNk3_gnF').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'Example for firebase'
// });

// const firebaseNotes = {
//   notes: {
//     apoijasdf: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     apoijasdfpoijwe: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };
//
// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];
//
// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (error) =>{
//   console.log('Error with data fetching', error);
// });
//
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error fetching data', error);
//   });

// database.ref().set({
//   name: 'Penn Camp',
//   age: 25,
//   stressLife: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'New York',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed.', error);
// });

// database.ref().update({
//   stressLife: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('Update successful')
// }).catch((error) => {
//   console.log('Update failed', error)
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((error) => {
//     console.log('Data removal failed.', error);
//   });
