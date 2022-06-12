// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/messaging";
import * as envConfig from 'config.js'

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

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = firebase.messaging();

navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
    .then((registration) => {
      messaging.useServiceWorker(registration);

      // Request permission and get token.....
      let isNotificationSupported = 'Notification' in window;
      if(isNotificationSupported){
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log("Notification permission granted.");
          } else {
            console.log("Unable to get permission to notify.");
          }
        });
      }

      messaging.getToken({ vapidKey: PUBLIC_VAPID_KEY }).then((currentToken) => {
        if (currentToken) {
          let body = { pushId: currentToken};
          fetch(`${envConfig.BASE_URL}/api/v1/manager/pushid`, {
            method: 'PATCH',
            headers: {
              'Content-Type':'application/json',
              'Authorization': `Bearer ${localStorage.getItem('apiToken')||envConfig.DEFAULT_TOKEN}`
            },
            body: JSON.stringify(body)
          })
            .then((response) => console.log('send token status',response.status))
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });

    });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
  });
});
  