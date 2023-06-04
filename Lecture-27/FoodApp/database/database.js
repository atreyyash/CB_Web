// Yaha hum code likhenge to connect our
// aplication with the database, so that we can perform the operation on out collection

const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myproject';
let _db;

// Connect to the db
const mongoConnect = () => {
    return client.connect()
        .then((client) => {
            console.log("Connecting to mongo client");
            _db = client.db(dbName);
        })
        .catch(err => {
            console.log(err);
        });
}

const getdb = () => {
    if (_db) return _db;
    return null;
}

module.exports.mongoConnect = mongoConnect;
module.exports.getdb = getdb;