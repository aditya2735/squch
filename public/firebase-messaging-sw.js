importScripts('https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDW4SwB1V8EDyYLp7NIliSU1xPF2p7vLlY",
    authDomain: "squch-780bd.firebaseapp.com",
    projectId: "squch-780bd",
    storageBucket: "squch-780bd.firebasestorage.app",
    messagingSenderId: "932050021900",
    appId: "1:932050021900:web:0222f345737d5bfac58829",
    measurementId: "G-N52BCP3WGK"
});

const firebaseConfig = {
    apiKey: "AIzaSyDW4SwB1V8EDyYLp7NIliSU1xPF2p7vLlY",
    authDomain: "squch-780bd.firebaseapp.com",
    projectId: "squch-780bd",
    storageBucket: "squch-780bd.firebasestorage.app",
    messagingSenderId: "932050021900",
    appId: "1:932050021900:web:0222f345737d5bfac58829",
    measurementId: "G-N52BCP3WGK"
  };

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icons/icon-192x192.png' // Ensure this exists in public folder
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
