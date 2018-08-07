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

// test connection
database.ref().set({
  name: 'Penn Camp',
  age: 25,
  isSingle: true,
  location: {
    city: 'New York',
    country: 'United States'
  }
});

database.ref('age').set(27);
database.ref('location/city').set('Charlottesville');

database.ref('attributes').set({
  height: 6,
  weight: 190
});
