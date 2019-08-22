var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require('mongoose');
var port = process.env.PORT || 5500;
mongoose.connect('mongodb+srv://gVelchev:gVelchev@cluster0-k3dfj.azure.mongodb.net/test');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

var app = express()


app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/contactMe', function (req, res) {
    var name = req.body.name;
    var subject = req.body.subject;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;

    var data = {
        "name": name,
        "email": email,
        "subject": subject,
        "phone": phone,
        "message": message
    }
    db.collection('details').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

    });

    return res.redirect('success.html');
})

app.get('/', function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('index.html');
}).listen(port)


console.log("Server Listening At Port " + port);