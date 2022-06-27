// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyADWtr1syccBY5AN0WUWA39Jl9V0VvDKUQ",
  authDomain: "closing-sale.firebaseapp.com",
  projectId: "closing-sale",
  storageBucket: "closing-sale.appspot.com",
  messagingSenderId: "1001500685848",
  appId: "1:1001500685848:web:4a4b57a74c5bf0cb8d356d",
  measurementId: "G-H12V3N2XDH"
});

const {PUBLIC_VAPID_KEY} = process.env;

const messaging = firebase.messaging();

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
  });
});
 
let registeredServiceWorker = false;
export const getFCMToken = () => 
new Promise((resolve)=>{
  navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
  .then((registration) => {
    if(!registeredServiceWorker){
      messaging.useServiceWorker(registration);
      registeredServiceWorker = true;
    }
    messaging.getToken({ vapidKey: PUBLIC_VAPID_KEY }).then((currentToken)=>{
      resolve(currentToken)
    })
  })
});
