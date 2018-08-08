import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// Firebase Reference Code

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// fetch and convert into an array with a subscription
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Salad',
//   note: 'I bought salad',
//   amount: 500000,
//   createdAt: 110
// });


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
