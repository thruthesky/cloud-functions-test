var lib = require('./library');
var ERROR = require('./error')
var serviceAccount = require('./service-key');
var admin = require('firebase-admin');
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://" + serviceAccount.project_id + ".firebaseio.com"
});
const db = app.database();

lib.db = db;


lib.doRequest({})
    .then( x => lib.e("Calling empty object must be failed."))
    .catch( e => {
        lib.t ( e.message == ERROR.method_undefined, "Calling doRequest() with empty object must failed in method undefiend." );
    });

lib.doRequest({ method: ''})
    .then( x => lib.e("Calling emtpy method name must be failed."))
    .catch( e => {
        lib.t ( e.message == ERROR.method_empty, "Calling doRequest() with empty method name must failed." );
    });

lib.doRequest({ method: 'doesNotEx'})
    .then( x => lib.e("Calling wrong method must be failed."))
    .catch( e => {
        lib.t ( e.message == ERROR.method_not_exist, "Calling doRequest() with wrong method name must failed." );
    });


lib.doRequest({ method: 'postCreate' })
    .then( key => lib.e(`postCreating with empty subject must be failed.`))
    .catch( e => lib.t(e.message == ERROR.subject_is_emtpy, "postCreate with empty subject properly faield."));


lib.doRequest({ method: 'postCreate', subject: 'hi' })
    .then( key => lib.t( key, `postCreated: key: ${key}`) )
    .catch( e => lib.e(e.message));






