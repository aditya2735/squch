// components/NotificationButton.tsx
"use client"; // Mark this as a Client Component
import { useState } from "react";
import { requestNotificationPermission, subscribeToPushNotifications } from "@/utils/pushNotification";

const NotificationButton = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = async () => {
        const permissionGranted = await requestNotificationPermission();
        if (permissionGranted) {
            const subscription = await subscribeToPushNotifications();
            if (subscription) {
                setIsSubscribed(true);
                console.log("Subscription successful:", subscription);

                // Send the subscription to your backend
                await fetch("/api/subscribe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(subscription),
                });
            }
        }
    };

    return (
        <button onClick={handleSubscribe} disabled={isSubscribed}>
            {isSubscribed ? "Subscribed" : "Enable Push Notifications"}
        </button>
    );
};

export default NotificationButton;