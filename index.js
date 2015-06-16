var express = require('express') // use the express library

var app = express(); //this creates our app

var http = require('http');
var server = http.createServer(app); //create an HTTP server for the express app
var port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log('server running')
});

var router = express.Router()


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use('/', router);

router.get('/', function(req, res){
  res.render('index', {header: 'index'})
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  socket.emit('connected')
})