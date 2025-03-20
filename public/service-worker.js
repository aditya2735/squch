// public/service-worker.js
self.addEventListener("push", (event) => {
    const payload = event.data ? event.data.text() : "No payload";
    const options = {
        body: payload,
        icon: "/icons/icon-192x192.png",
        badge: "/icons/icon-192x192.png",
    };

    event.waitUntil(
        self.registration.showNotification("New Order Received", options)
    );
});