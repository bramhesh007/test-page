self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'New Notification';
    const options = {
        body: data.message || 'You have a new notification!',
        // icon: '/images/notification-icon.png', // optional
        // badge: '/images/badge-icon.png' // optional
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// When a notification is clicked, this will focus the window
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/') // Customize the URL to redirect upon click
    );
});
