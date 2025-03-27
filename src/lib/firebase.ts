import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDW4SwB1V8EDyYLp7NIliSU1xPF2p7vLlY",
    authDomain: "squch-780bd.firebaseapp.com",
    projectId: "squch-780bd",
    storageBucket: "squch-780bd.firebasestorage.app",
    messagingSenderId: "932050021900",
    appId: "1:932050021900:web:0222f345737d5bfac58829",
    measurementId: "G-N52BCP3WGK"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();


let messaging: any = null;
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    messaging = getMessaging(firebaseApp);
} else {
    console.warn("⚠️ Firebase Messaging is not supported in SSR.");
}

export { firebaseApp, messaging };


// Function to request notification permission
export const requestNotificationPermission = async () => {
    if (typeof window === "undefined") return false; // Prevent running in SSR

    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            console.log("✅ Notification permission granted.");
            return true;
        } else {
            console.log("❌ Notification permission denied.");
            return false;
        }
    } catch (error) {
        console.error("❌ Error requesting notification permission:", error);
        return false;
    }
};

// Function to get FCM token
export const getFCMToken = async () => {
    if (!messaging) {
        console.warn("⚠️ Firebase Messaging is not supported in this environment.");
        return null;
    }

    try {
        console.log("🟡 Requesting FCM token...");
        const token = await getToken(messaging, {
            vapidKey: "BI1zAbbayVWHqI4xBLt177lZY09I-13wdJ6-tYbToeaWdh1ET8J5LZAI0OOd2NYcPwUK1H_XURpL_y-MjcyHrEE" // Get from Firebase settings
        });

        if (token) {
            console.log("✅ FCM Token:", token);
            return token;
        } else {
            console.warn("⚠️ No FCM Token available.");
            return null;
        }
    } catch (error) {
        console.error("❌ Error retrieving FCM token:", error);
        return null;
    }
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        if (!messaging) {
            console.warn("⚠️ Firebase Messaging is not available.");
            return;
        }

        onMessage(messaging, (payload) => {
            console.log("🔥 Foreground notification received:", payload);

            // ✅ Display notification manually
            if (Notification.permission === "granted") {
                new Notification(payload.notification?.title || "New Message", {
                    body: payload.notification?.body || "You have a new message!",
                    icon: "/icons/icon-192x192.png"
                });
            } else {
                alert(`🔔 ${payload.notification?.title}: ${payload.notification?.body}`);
            }

            resolve(payload);
        });
    });


export const SignInWithGoogle = async (): Promise<User | null> => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log('result: ', result.user);
        return result.user;
    } catch (error) {
        return null;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
        console.log("user logged out");
    } catch (error) {
        console.log('error: ', error);
    }
};