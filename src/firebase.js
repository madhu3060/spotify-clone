import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBL-3YuVq84rniIY4lH04DEGUrwEHDsMe4",
  authDomain: "spotifyclone-3f0a4.firebaseapp.com",
  projectId: "spotifyclone-3f0a4",
  storageBucket: "spotifyclone-3f0a4.appspot.com",
  messagingSenderId: "533222156185",
  appId: "1:533222156185:web:bbb0af693b6740f6ab1508",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
