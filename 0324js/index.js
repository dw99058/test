// 내장 객체
/*
var user = {
    name : 'jack';
}

console.log(user.name);




var user1 = new Object();
user1.name = 'jack';

console.log(user1.name);




function User(name){
    this.name = name;
}

var user2 = new User('jack');

console.log(user2.name);



*/

/*
var result = Math.min(4, 5, 7);
// 가장 작은 값을 리턴
var result1 = Math.abs(-3);
// 절대값
console.log(result);
console.log(result1);
*/




// Date
/*
var result = new Date();
var result = Date.now();

console.log(result);
*/
/* 예 ) 회원가입, 비밀번호 바꿨을때, 마지막 로그인할때 날짜
var user = {
    email : 'abs@google.com',
    name : '홍길동',
    password : 'secret',
    passwordChangeAt : new Date(),
    createAt : new Date(),
    lastLoginAt : new Date()
}
*/



// This (메소드? 함수?)
/*
function User(name){
    this.name = name;
    console.log(this);
}

var user1 = new User('jack');
console.log(user1);
*/
//User(); 이렇게는 안쓴다..

/*
var user2 = {
    name : 'joy',
    say : function(){
        console.log(this);
    }
}

user2.say();
*/

/*
function User(name){
    this.name = name;
    //console.log(this);
}

User.say = function(){
    console.log(this);
}

var user = new User('jack');

User.say();
*/




// Call by Value
/*
function swap (num1, num2){
    var temp = num1; // 3을 임시적으로 저장
    num1 = num2;
    num2 = temp;
}

var a = 3;
var b = 7;

swap(a,b);

console.log(a)
console.log(b)
*/

// Call by Reference
/*
function changePassword(user, newPassword){
    user.password = newPassword
}

var user = {
    password : 'secret'
}

console.log('before', user)
changePassword(user, 'new secert');
console.log('after', user)
*/



// 스코프(유효범위)
/*
var a = 7 // 전역 변수(어디서든 접근 가능)

function test(){
    var b = 3; // 지역 변수 (이 함수 안에서만 사용 가능..)
    console.log(a);
    console.log(b);
}

test();

console.log(b);
*/


// 실행 컨텍스트


// 배열 부수기 (초기화, 읽기, 추가, 삭제)
/*
//         0  1  2  3
var arr = [4, 3, 7, 1];

console.log(arr[2]);

arr.push(80);

// [4, 3, 7, 1, 80]

arr.splice(3,1); // 인덱스가 3부터 1개 삭제

// [4, 3, 7, 80]

for(var i = 0; i < arr.length; i++){
    // 만약에 아이템 중에 3이 있으면 곱하기 2를 해서 출력하라
    console.log(arr[i]);
    if(arr[i]===3){
        console.log(arr[i]*2);
    }else{
        console.log(arr[i])
    }
}
*/



// User라는 생성자 함수를 사용해서 name은 jack age는 20인 객체를 만들어 보세요.
// name이 jack인 객체를 users안에 넣어보세요. push를 활용해서
// User라는 생성자 함수를 사용해서 name이 joy이고 age가 21인 객체를 만들고 users안에 넣어보세요
// User라는 생성자 함수를 사용해서 name이 jason이고 age가 26인 객체를 만들고 users안에 넣어보세요
// for문을 사용해서 users에 있는 user들을 출력해보세요.

var users = []

function User(name,age){
    this.name = name;
    this.age = age;
}

users.push(new User('jack',20));
users.push(new User('joy',21));
users.push(new User('jason',26));
/*
for(var i=0; i<users.length; i++){
    console.log(users[i])
}
*/
var sum = 0;
var avg = 0;

// users 안에 있는 유저들의 평균 나이를 구하고 출력하세요 (for문 사용)
// 평균은 n개의 값을 다 더한 뒤에 n으로 나누면 됩니다.
for(var i=0; i<users.length; i++){
    sum += users[i].age
}
avg = sum / users.length;
console.log(avg)

// users를 사용해서 name이 joy인 user의 나이를 25로 변경하세요
for(var i=0; i<users.length; i++){
    if(users[i].name === 'joy'){
        users[i].age = 25;
    }
}
console.log(users)

// users안에서 name이 jason인 user를 삭제해보세요
// splice(index, count)
for(var i=0; i<users.length; i++){
    if(users[i].name === 'jason'){
        users.splice(i,1);
    }
}
console.log(users)

