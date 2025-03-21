import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDW4SwB1V8EDyYLp7NIliSU1xPF2p7vLlY",
    authDomain: "squch-780bd.firebaseapp.com",
    projectId: "squch-780bd",
    storageBucket: "squch-780bd.firebasestorage.app",
    messagingSenderId: "932050021900",
    appId: "1:932050021900:web:0222f345737d5bfac58829",
    measurementId: "G-N52BCP3WGK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// Function to request notification permission
export const requestNotificationPermission = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            console.log("Notification permission granted.");
            return true;
        } else {
            console.log("Notification permission denied.");
            return false;
        }
    } catch (error) {
        console.error("Error requesting notification permission:", error);
        return false;
    }
};

// Function to get FCM token
export const getFCMToken = async () => {
    try {

        console.log("🟡 Requesting FCM token...");


        const token = await getToken(messaging, {
            vapidKey: "BI1zAbbayVWHqI4xBLt177lZY09I-13wdJ6-tYbToeaWdh1ET8J5LZAI0OOd2NYcPwUK1H_XURpL_y-MjcyHrEE" // Get from Firebase settings
        });

        if (token) {
            console.log("FCM Token:", token);
            return token;
        } else {
            console.warn("No registration token available.");
            return null;
        }
    } catch (error) {
        console.error("Error retrieving FCM token:", error);
        return null;
    }
};

// Listen for incoming messages
export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("Foreground notification received:", payload);
            resolve(payload);
        });
    });

export { messaging };
