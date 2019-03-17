/*
var name = 'hyewon kim';
var age = 20;
*/

/* 객체 생성 방법 (1)
var user = {
    name : 'jack',
    age : 20,
    address : 'secret'
}
*/
/* 객체 생성 방법 (2)
var user1 = nuw Object();
user1.name = 'jack';
user2.age = 20;
user1.address = 'secret';
*/
/*
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.address);
console.log(typeof(user)); // object 객체
*/

// 객체의 나이가 10이상 20미만이면 console.log('어린놈');
// 객체의 나이가 20이상이면 console.log('청춘');
// 나머지는 console.log('??');
/*
if(user.age >= 10 && user.age < 20){
    console.log('어린놈')
}else if(user.age >= 20){
    console.log('청춘')
}else{
    console.log('??');
}
*/

// 이름이 jack이고 나이가 20인 변수 user1
// 이름이 joi이고 나이가 20인 변수 user2
/*
var user1 = new Object();
user1.name = 'jack';
user1.age = 20;

var user2 = new Object();
user2.name = 'joi';
user2.age = 20;
*/
/*
var user1 = {
    name : 'jack',
    age : 20,
    say:function(){
        console.log('hi');
    }
}
var user2 = {
    name : 'joi',
    age : 20,
    say:function(){
        console.log('hi');
    }
}

user1.say();
*/

// 함수
/*
function add(num1, num2){
    return num1 + num2;
}

var result = add(1,2);
*/
/*
var add = function(num1, num2){
    return num1 + num2;
}

var result = add(1, 2);
console.log(result);
*/

var user1 = {
    name : 'jack',
    level : 'gold'
}

function calNewPrice(price,user){

    switch(user.level){
        case 'gold':
            // user.level gold 새 가격은 기존가격의 0.9
            newPrice = price * 0.9;
            break;
        case 'silver':
            // user.level silver 새 가격은 기존가격의 0.95
            newPrice = price * 0.95;
            break;
        case 'bronze':
            // user.level bronze 새 가격은 기존가격의 0.98
            newPrice = price * 0.98;
            break;
        default:
            // user.level 나머지 새 사격은 기존가격
            newPrice = price;
    }

    return newPrice;
}

var newPrice = calNewPrice(3000,user1);
console.log(newPrice);




