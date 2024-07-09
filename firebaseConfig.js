import { getFirestore } from '@react-native-firebase/firestore';
import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBeyHMQGDHoYizMfoGFyqmV11Q6Doi2qFU",
    authDomain: "tv-tracker-de080.firebaseapp.com",
    projectId: "tv-tracker-de080",
    storageBucket: "tv-tracker-de080.appspot.com",
    messagingSenderId: "937105936771",
    appId: "1:937105936771:web:c3424a0f777d97a248e6b6",
    measurementId: "G-M4LJYSRLLT"
  };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export const db = getFirestore(app);
export const tv_shows = db.collection('tv_shows');

export default app;