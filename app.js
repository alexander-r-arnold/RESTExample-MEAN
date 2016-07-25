// require packages
var mongoose = require('mongoose'), 
	express = require('express'),
	bodyParser = require('body-parser');

// create model
var Book = require('./models/bookModels');

// init db settings
var db;

if (process.env.ENV == 'Test') {
	db = mongoose.connect('mongodb://localhost/bookAPI_test');
} else {
	db = mongoose.connect('mongodb://localhost/bookAPI');
}


// init app and options
var app = express();
var port = process.env.PORT || 5000;

// init routers
bookRouter = require('./routes/bookRoutes')(Book);

// app.use statements
app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// handle routes
app.get('/', function(req, res) {
	res.send('Welcome to my api');
});

app.listen(port, function() {
	console.log('Running on PORT: ' + port);
});

module.exports = app;