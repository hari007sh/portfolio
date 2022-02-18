export const environment = {
  production: true,
  baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYP2wlXHCSFLmNaL0Iq8rXyHnU5nf_pjg",
  authDomain: "portfolio-f587a.firebaseapp.com",
  databaseURL: "https://portfolio-f587a-default-rtdb.firebaseio.com",
  projectId: "portfolio-f587a",
  storageBucket: "portfolio-f587a.appspot.com",
  messagingSenderId: "961127091754",
  appId: "1:961127091754:web:30cb38c0d0f3b6dc38bd53",
  measurementId: "G-LDJRPBGVS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);