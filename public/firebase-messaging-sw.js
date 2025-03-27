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


const messaging = firebase.messaging();

// ✅ Handle Background Notifications
messaging.onBackgroundMessage((payload) => {
    console.log("📢 Background Notification Received:", payload);

    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/icons/icon-192x192.png"
    });
});