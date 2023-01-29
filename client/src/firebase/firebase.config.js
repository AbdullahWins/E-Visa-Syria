import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6YnFjORLlgBWBcgwWxhvmf02NGa2CAG8",
  authDomain: "syrianevisa.firebaseapp.com",
  projectId: "syrianevisa",
  storageBucket: "syrianevisa.appspot.com",
  messagingSenderId: "547149169765",
  appId: "1:547149169765:web:c76ae96e6485c98a9cf28c",
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
//   };

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
