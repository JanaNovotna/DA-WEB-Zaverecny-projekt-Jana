import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyATS_mGgO9rpr-6-MV8CGDMe_rfyZMwbTA",
  authDomain: "wishlist-5bd4e.firebaseapp.com",
  databaseURL: "https://wishlist-5bd4e.firebaseio.com",
  projectId: "wishlist-5bd4e",
  storageBucket: "wishlist-5bd4e.appspot.com",
  messagingSenderId: "66673050595",
  appId: "1:66673050595:web:1bc94b5db51abdd262d6d6"
};

export const db = firebase.initializeApp(firebaseConfig).firestore()


