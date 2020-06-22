import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  databaseURL: "https://wishlist2-2343f.firebaseio.com",
  projectId: "wishlist2-2343f",
};

export default firebase.initializeApp(firebaseConfig).firestore();






