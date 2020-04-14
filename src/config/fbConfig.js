import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAW8SATKOiU9JLkWSlp_HjKBqzjxWKTeJo',
  authDomain: 'project-manager-oct.firebaseapp.com',
  databaseURL: 'https://project-manager-oct.firebaseio.com',
  projectId: 'project-manager-oct',
  storageBucket: 'project-manager-oct.appspot.com',
  messagingSenderId: '444592983649',
  appId: '1:444592983649:web:fc2f786416618f07a9a420',
  measurementId: 'G-2TE0NKQNQD',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
