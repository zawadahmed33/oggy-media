import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDNiuQBCBzYMXcFej-61zAxohRpdXYhI6I",
  authDomain: "oggy-meme-templates.firebaseapp.com",
  projectId: "oggy-meme-templates",
  storageBucket: "oggy-meme-templates.appspot.com",
  messagingSenderId: "783873455297",
  appId: "1:783873455297:web:3dd8f205c0cd61c8615040",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timeStamp };