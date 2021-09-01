import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "localpayment-project.firebaseapp.com",
  databaseURL: "https://localpayment-project-default-rtdb.firebaseio.com",
  projectId: "localpayment-project",
  storageBucket: "localpayment-project.appspot.com",
  messagingSenderId: REACT_APP_MESSAGE_ID,
  appId: REACT_APP_ID_KEY,
}

export const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);