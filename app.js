require('marko/node-require').install()

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.static(__dirname + '/public'));

// pages
app.get('/', require('./controllers/homeController'));

// api
//app.get('/list', require('./controllers/listDataController'));

app.use(function(req, res, next) {
    res.send('404');
});

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), function() {
    console.log("Started server at port " + app.get('port'))
});
