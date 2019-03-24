var uuid = require('uuid');

var users = [];

function User(id, email, name, password){
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
}
/* 
//es6 문법
class User(){
    constructor(id, email, name, password){
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
}
*/

// 회원가입 함수
function signup(email, name, password){

    // 해당 email이 우리 유저인지 확인해주고 만약 있다면 오류를 던져야한다.
    for(var i=0; i<users.length; i++){
        if(users[i].email === email){
            //throw new Error('이미 가입되어 있음'); 이렇게 오류를 던지면 서비스 종료됨
            return;
        }
    }

    // uuid 생성 => 터미널에서 npm install uuid 하기, var uuid = require('uuid'); 명시 해주기
    var id = uuid.v1();

    // 새로운 유저 생성
    var newUser = new User(id, email, name, password);

    // 데이터베이스에 저장 (여기서는 배열)
    users.push(newUser);

    // 회원강비 완료 메일 전송 ...등등
}

// 로그인 함수
function login(email, password){
    // user 와 password가 일치하는 유저를 찾는다.
    // 있으면 유저 객체를 리턴한다. (비밀번호 제외)
    // 없다면 null을 리턴한다.
    for(var i=0; i<users.length; i++){
        if(users[i].email === email && users[i].password === password){
            return{
                id : users[i].id,
                email : users[i].email,
                name : users[i].name
            }
        }
    }
    return null;
}


// 회원 이름 수정
function updateName(id, newName){
    for(var i=0; i<users.length; i++){
        if(users[i].id === id){
            users[i].name = newName;
        }
    }
}


// 초기화
signup('abc@google.com','ingyu','secret');
signup('cba@google.com','park','secret');
signup('cba@google.com','park','secret'); // 위에랑 이메일 중복되서 return 됨.

console.log(users);


// abc@google.com 계정의 비밀번호는 secret 입니다.
// abc@google.com 계정의 name을 jack으로 수정해보세요 updateName을 사용해서
// 중요!! email이 아니라 id
var user = login('abc@google.com','secret');
updateName(user.id, 'jack');
console.log(users)




// 비밀번호 변경
function updatePassword(id, newPassword){

}


// 로그인
var result = login('abc@google.com','secret');

if(result){ // null이 들어가면 false가 된다.
    console.log('로그인 성공', result);
}else{
    console.log('로그인 실패')
}