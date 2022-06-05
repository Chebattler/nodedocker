const express = require('express');
const morgan = require('morgan');


const app = express();
app.use(morgan('combined'));



//DB MODULE
var dbo = null // global variable to hold the connection
const MongoClient = require('mongodb').MongoClient;


const dbName = '234';
const client = new MongoClient('mongodb://root:shantanubansal@20.126.215.234:27017/234/?authSource=admin&readPreference=primaryPreferred&appname=MongoDB');

// Connect to MongoDB server, run the findDocuments function and close the connection.
client.connect(function(err) {

    if(err) console.log(err);
    console.log('Connected successfully to MongoDB server on port 27017');
    dbo = client.db(dbName);


});




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

var listener = app.listen(process.env.PORT || 80, function() {
 console.log('listening on port ' + listener.address().port);
});

