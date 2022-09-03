import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyA9Pdw-6uhY6URYr1PGjeqoseShbRu_bjo",
  authDomain: "bts-rn-mentoring.firebaseapp.com",
  databaseURL: "https://bts-rn-mentoring-default-rtdb.firebaseio.com",
  projectId: "bts-rn-mentoring",
  storageBucket: "bts-rn-mentoring.appspot.com",
  messagingSenderId: "213707350401",
  appId: "1:213707350401:web:10204aee9f2009e5c5c880",
  measurementId: "G-81DGZ1DGY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
