// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyADWtr1syccBY5AN0WUWA39Jl9V0VvDKUQ",
  authDomain: "closing-sale.firebaseapp.com",
  projectId: "closing-sale",
  storageBucket: "closing-sale.appspot.com",
  messagingSenderId: "1001500685848",
  appId: "1:1001500685848:web:4a4b57a74c5bf0cb8d356d",
  measurementId: "G-H12V3N2XDH"
});
const PUBLIC_VAPID_KEY = 'AAAA6S4Xthg:APA91bFvKIk-1yzUhWCrs72rwqdcZxPSJo72IZjDwRTMTaLiSLe1p9Spr_5wFNbOvSV1X6S8MA9GpK-fLnbpeXgCFJF2hPnpO9J7E1jd2gf7O0lUgFIFVHgJirUYU06dqXsv5grcGX8Y';

let isNotificationSupported = 'Notification' in window;
if(isNotificationSupported){
  Notification.requestPermission().then((permission) => {
    console.log('requestPermission!!!!!!!!!!')
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Unable to get permission to notify.");
    }
  });
}

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(firebaseApp);

// getToken(messaging, { vapidKey: PUBLIC_VAPID_KEY }).then((currentToken) => {
//   if (currentToken) {
//     // Send the token to your server and update the UI if necessary
//     console.log(currentToken)
//   } else {
//     // Show permission request UI
//     console.log('No registration token available. Request permission to generate one.');
//     // ...
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   // ...
// });