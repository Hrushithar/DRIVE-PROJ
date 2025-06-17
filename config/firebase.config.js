const Firebase = require('firebase-admin');
const serviceAccount = require('../drive-eac08-firebase-adminsdk-fbsvc-edb388bfad.json');

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-eac08.firebasestorage.app' 
});

module.exports = Firebase;