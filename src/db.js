import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  databaseURL: "https://wishlist-5bd4e.firebaseio.com",
  projectId: "wishlist-5bd4e",
};

export default firebase.initializeApp(firebaseConfig).firestore();






