importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
const config =  { 
	apiKey: "AIzaSyADWtr1syccBY5AN0WUWA39Jl9V0VvDKUQ",
    authDomain: "closing-sale.firebaseapp.com",
    projectId: "closing-sale",
    storageBucket: "closing-sale.appspot.com",
    messagingSenderId: "1001500685848",
    appId: "1:1001500685848:web:4a4b57a74c5bf0cb8d356d",
    measurementId: "G-H12V3N2XDH"
}; 
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){
    console.log("Received background message ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});