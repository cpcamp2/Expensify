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

database.ref().set({
  name: 'Penn Camp',
  age: 25,
  stressLife: 6,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },
  location: {
    city: 'New York',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved');
}).catch((error) => {
  console.log('This failed.', error);
});

database.ref().update({
  stressLife: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
}).then(() => {
  console.log('Update successful')
}).catch((error) => {
  console.log('Update failed', error)
});

database.ref()
  .remove()
  .then(() => {
    console.log('Data was removed');
  }).catch((error) => {
    console.log('Data removal failed.', error);
  });
