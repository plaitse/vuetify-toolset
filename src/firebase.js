import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDS73jrtLHF3zIx-4SsSmbek6smwMP9IJg",
  authDomain: "vuetify-toolset.firebaseapp.com",
  databaseURL: "https://vuetify-toolset.firebaseio.com",
  projectId: "vuetify-toolset",
  storageBucket: "vuetify-toolset.appspot.com",
  messagingSenderId: "937789180708"
};

firebase.initializeApp(config);

// Connection
const db = firebase.firestore();

export default db;
