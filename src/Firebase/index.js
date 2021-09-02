import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "localpayment-project.firebaseapp.com",
  databaseURL: "https://localpayment-project-default-rtdb.firebaseio.com",
  projectId: "localpayment-project",
  storageBucket: "localpayment-project.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_ID_KEY,
}

export const app = firebase.initializeApp(firebaseConfig);

export const getFirebase =()=>app;
export const getFirestore =()=> firebase.firestore(app);

