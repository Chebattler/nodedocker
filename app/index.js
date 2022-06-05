const express = require('express');
const morgan = require('morgan');


const app = express();
app.use(morgan('combined'));



//DB MODULE
var dbo = null // global variable to hold the connection
const MongoClient = require('mongodb').MongoClient;


const dbName = '234';
const client = new MongoClient('mongodb://root:shantanubansal@mongo-0.mongo.mongodb-repl-system.svc.cluster.local:27017,mongo-1.mongo.mongodb-repl-system.svc.cluster.local:27017/?replicaSet=rs0&authSource=admin&readPreference=primaryPreferred');
var isconnected = "NOT CONNECTED";
// Connect to MongoDB server, run the findDocuments function and close the connection.
client.connect(function(err) {

    if(err) console.log(err) 
    
    else
    {
    console.log('Connected successfully to MongoDB server on port 27017');
    dbo = client.db(dbName);
    isconnected = "Connected!"; 

    }


});




app.get('/', (req, res) => {
  res.status(200).send(isconnected);
});

var listener = app.listen(process.env.PORT || 80, function() {
 console.log('listening on port ' + listener.address().port);
});

