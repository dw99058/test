var express = require('express');
// npm install express
// npm install ejs

var server = express();

server.set('views', './views');
server.set('view engine', 'html');
server.engine('html', require('ejs').renderFile);

server.get('/', function(req,res){
    res.render('index');
});
/* 경로 추가 할 수 있음
server.get('/user', function(req,res){
    res.send('user');
});
*/

server.listen(3000);