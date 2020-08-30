const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/messaging")


firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_Id
})

const messaging = firebase.messaging();

messaging.onMessage(function (payload) {
    console.log(payload.notification);
    var notificationTitle = payload.notification.title;
    var notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };
    var notification = new Notification(notificationTitle, notificationOptions)
});

messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    "BEU3DNNLyFpS42qHYX9omohVJX3tghytoRYER4egkjbSIkV5dxU1CNeHEJVwJ4TZkyeB599d38MMM1685QqDHPo"
);

const storage = firebase.storage();
export { messaging, storage, firebase as default }