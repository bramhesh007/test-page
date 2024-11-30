self.addEventListener('push', function(event) {
  let options = {
    body: event.data ? event.data.text() : 'New Notification',
    // icon: '/icon.png',
    // badge: '/badge.png'
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  // You can add behavior here on notification click
});
