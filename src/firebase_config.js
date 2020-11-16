import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDHhbGPDUYDnzIqcY_rXh1QHqZbRz-kTqA",
  authDomain: "reactjs-responsive.firebaseapp.com",
  databaseURL: "https://reactjs-responsive.firebaseio.com",
  projectId: "reactjs-responsive",
  storageBucket: "reactjs-responsive.appspot.com",
  messagingSenderId: "10015369202",
  appId: "1:10015369202:web:d64c1b529705d435e72d6b",
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
