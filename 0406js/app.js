var express = require('express');
var bodyParser = require('body-parser'); // 인터넷 상에서 요청 메세지 안에 있는 내용을 가져오기 위해서  씀

var app = express();

app.use(bodyParser());

app.use(express.static('public')); // 정적 파일들을 public 폴더 안에다가 담겠다. 일일이 다 안쳐도 됨

app.set('views','./views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
//ejs 엔진 사용 설정

app.get('/',function(req,res,next){
    res.render('index',{});
});

app.listen(3000); //3000포트에 서버를 실행