var ERROR = require('./error');
var lib = {};




lib.doRequest = function (query) {
    return new Promise((res, rej) => {
        // console.log("lib.doRequest: ", query);
        if (query.method === void 0) this.error( ERROR.method_undefined );
        if (!query.method) this.error( ERROR.method_empty );
        if (this[query.method] == void 0) this.error(ERROR.method_not_exist);
        this[query.method](query).then( k => res(k) );
    });
};



lib.postCreate = function (query) {
    if ( query.subject === void 0 ) return this.error( ERROR.subject_is_emtpy );
    var ref = lib.db.ref().child('/post').push();
    return ref.set( query ).then( a => ref.key );
};


lib.error = (msg) => {
    throw new Error(msg);
};


lib.s = m => {
    console.log(`===> SUCCESS: ${m}`);
}

lib.e = m => console.log(`===< ERROR: ${m}`);


lib.t = function (r, m) {
    if ( r ) this.s(m);
    else this.e(m);
};

module.exports = lib;

lib.doRequest = function (query) {
    return new Promise((res, rej) => {
        // console.log("lib.doRequest: ", query);
        if (query.method === void 0) this.error( ERROR.method_undefined );
        if (!query.method) this.error( ERROR.method_empty );
        if (this[query.method] == void 0) this.error(ERROR.method_not_exist);
        this[query.method](query).then( k => res(k) );
    });
};



lib.postCreate = function (query) {
    if ( query.subject === void 0 ) return this.error( ERROR.subject_is_emtpy );
    var ref = lib.db.ref().child('/post').push();
    return ref.set( query ).then( a => ref.key );
};


lib.error = (msg) => {
    throw new Error(msg);
};


lib.s = m => {
    console.log(`===> SUCCESS: ${m}`);
}

lib.e = m => console.log(`===< ERROR: ${m}`);


lib.t = function (r, m) {
    if ( r ) this.s(m);
    else this.e(m);
};

module.exports = lib;