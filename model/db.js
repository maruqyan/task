const db = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/test';
db.connect(url, {});
db.Promise = global.Promise;

module.exports = db;
