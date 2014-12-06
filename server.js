/**
 * Created by riccardo on 12/6/14.
 */

var express = require('express'),
    http = require('http'),
    port = Math.floor(process.argv[2]) || process.env.PORT || 1337, //rudimentary integer check
    app = express(),
    server = app.listen(port),
    io = require('socket.io').listen(server);

app.use(express.static(__dirname + "/public"));
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html')
})