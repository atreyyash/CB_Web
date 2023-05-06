const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

const mongoConnect = () => {
    return client.connect()
        .then((client) => {
            console.log(client);
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports.mongoConnect = mongoConnect;

// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('documents');

//     // the following code examples can be pasted here...

//     return 'done.';
// }

// main();