const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-eac08-firebase-adminsdk-fbsvc-edb388bfad.json');

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-eac08.firebasestorage.app',
    unique: true,
});

const upload = multer({
    storage: storage
})

module.exports = upload;