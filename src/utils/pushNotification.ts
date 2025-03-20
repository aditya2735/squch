// utils/pushNotifications.ts
export const requestNotificationPermission = async (): Promise<boolean> => {
    if (!("Notification" in window)) {
        console.log("This browser does not support notifications.");
        return false;
    }

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
        console.log("Notification permission granted.");
        return true;
    } else {
        console.log("Notification permission denied.");
        return false;
    }
};

export const subscribeToPushNotifications = async (): Promise<PushSubscription | null> => {
    if (!("serviceWorker" in navigator)) {
        console.log("Service Worker is not supported.");
        return null;
    }

    const swRegistration = await navigator.serviceWorker.ready;
    const subscription = await swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY, // Use the public key
    });

    console.log("Subscribed to push notifications:", subscription);
    return subscription;
};