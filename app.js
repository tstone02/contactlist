//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongo db

mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected', () => {
	console.log('Connected to database mogodb @ 27017');
});

mongoose.connection.on('error', (err) => {
	if(err) {
			console.log('Error in DB connection' + err);
	}

});

//port no
const port = 3000;
//middleware
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
//routes
app.use('/api', route);

app.get('/', (req, res) => {
    res.send('foobar');
});

app.listen(port, () => {
    console.log('Server has started at port: ' + port);
});
