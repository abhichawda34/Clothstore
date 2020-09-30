import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCY8SnO5WSsMZ0XdeOLBZeQipN9HfPQ0ls",
  authDomain: "clothstore-db-428a7.firebaseapp.com",
  databaseURL: "https://clothstore-db-428a7.firebaseio.com",
  projectId: "clothstore-db-428a7",
  storageBucket: "clothstore-db-428a7.appspot.com",
  messagingSenderId: "632678845968",
  appId: "1:632678845968:web:5197d37b995609c3344495",
  measurementId: "G-65CZ922PZ2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider).then(function(result){
  console.log('logged in')
}).catch(function(error){
    console.log(error.message);
});

export default firebase;