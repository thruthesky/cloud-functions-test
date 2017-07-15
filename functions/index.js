const functions = require('firebase-functions');
const lib = require('./library');



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {

    lib.doRequest(request.query)
        .then(x => response.send(x))
        .catch(e => response.send(e.message));
    

});