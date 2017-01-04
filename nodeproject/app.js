var express = require('express');
var app = express();

var port = process.env.PORT; //5000 normaly

app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/', function(req, res){
    res.send('Digitalsos World!');
});

app.get('/routing', function(req, res){
    res.send('Digitalsos routing!');
});

app.listen(port, function(err){
   console.log('The server is running on port: ' + port);
});