import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyA_jfkzutR3U4zEKQw5NxlCA1-66tvnFUs",
    authDomain: "minecraft-ideas.firebaseapp.com",
    databaseURL: "https://minecraft-ideas.firebaseio.com",
    projectId: "minecraft-ideas",
    storageBucket: "minecraft-ideas.appspot.com",
    messagingSenderId: "156091845607",
    appId: "1:156091845607:web:4570893014244bdefdcb42",
    measurementId: "G-9CX44BHZ4H"
  };
  firebase.initializeApp(config);
 // firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;