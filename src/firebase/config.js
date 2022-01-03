import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDFka9y7Go1TzTi8p6iq1LikXJqIzyMGG0",
  authDomain: "diecolgar-ninja-recipes.firebaseapp.com",
  projectId: "diecolgar-ninja-recipes",
  storageBucket: "diecolgar-ninja-recipes.appspot.com",
  messagingSenderId: "342791795385",
  appId: "1:342791795385:web:b58db18903e8c00bc1e168",
  measurementId: "G-B5R3G0YS9E"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }