import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCmiKZSX_izgwteA6HKEwzwHzC5qyAkeqo",
  authDomain: "i-worked-on.firebaseapp.com",
  databaseURL: "https://i-worked-on.firebaseio.com",
  projectId: "i-worked-on",
  storageBucket: "i-worked-on.appspot.com",
  messagingSenderId: "194371013394",
  appId: "1:194371013394:web:1bd159ac7aec9bf54a01cb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
