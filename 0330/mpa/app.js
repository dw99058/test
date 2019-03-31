var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var auth = require('./auth');
var app = express();

app.use(session({
    secret: 'afjdsl aldjaaa'
}));

/*
 * 기본적으로 express는 http 메소드의 body 내용을 가져오지 않음
 * 따라서 body-parser라는 라이브러리를 사용해서
 * body 내용을 읽을 수 있도록 해야함.
*/
app.use(bodyParser());

app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'))

// app.get('/', function(req,res){
//     var data = {
//         message : 'this is message',
//         date : new Date()
//     }

//     res.render('index', data);
//     //res.sendFile(__dirname+'/index.html');
// });

/* 미들웨어 */
app.use((req,res,next)=>{
    console.log(new Date());
    next();
});


function authroize(req,res,next){
    if(req.session.email){
        next();
    }else{
        res.render('login',{})
    }
}

app.get('/',authroize,(req,res,next)=>{
    //로그인이 안돼 있으면 login페이지로 이동
    res.render('index',{message:"",date:""});
    /* 위에 authroize 함수를 안쓴다면..
    if(req.session.email){
        res.render('index',{message:"",date:""});
    }else{
        res.redirect('/login');
    }
    */
})

app.get('/login', function(req,res){
    res.render('login',{});
});

app.post('/login', (req,res)=>{
    
    var email = req.body.email;
    var password = req.body.password;
    var result = auth.login(email,password);
    if(result){
        //성공 시에는 index 페이지로
        req.session.email = email; // session에 사용자 email 저장
        res.redirect('/');
    }else{
        // 실패시에는 어떤 메세지를 전달
        res.redirect('/login');
    }
})

app.get('/service', function(req,res){
    res.render('service',{});
});

app.get('/product', function(req,res){
    res.render('product',{});
});

app.listen(3000);