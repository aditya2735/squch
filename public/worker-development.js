/******/ (() => { // webpackBootstrap
importScripts('https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging.js');
const firebaseConfig = {
  apiKey: "AIzaSyDW4SwB1V8EDyYLp7NIliSU1xPF2p7vLlY",
  authDomain: "squch-780bd.firebaseapp.com",
  projectId: "squch-780bd",
  storageBucket: "squch-780bd.firebasestorage.app",
  messagingSenderId: "932050021900",
  appId: "1:932050021900:web:0222f345737d5bfac58829",
  measurementId: "G-N52BCP3WGK"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
  var _payload$notification, _payload$notification2;
  console.log('Received background message:', payload);

  // Customize notification here
  const notificationTitle = ((_payload$notification = payload.notification) === null || _payload$notification === void 0 ? void 0 : _payload$notification.title) || 'New Message';
  const notificationOptions = {
    body: ((_payload$notification2 = payload.notification) === null || _payload$notification2 === void 0 ? void 0 : _payload$notification2.body) || 'You have a new message!',
    icon: '/icons/icon-192x192.png' // Ensure this exists in the public folder
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});
/******/ })()
;