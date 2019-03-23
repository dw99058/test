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







// 자바스크립트에서 함수는 일급 객체이다.

// 함수를 변수에 저장할 수 있고
// 익명 함수를 사용할 수 있다.
// 리턴 값으로 사용할 수 있다.
// var add = function(a,b){
//     return a+b;
// }
// var add = function(){
//     return function(a,b){
//         return a+b;
//     };
// }

// var func = add();
// console.log(func(1,2));










// 재귀 함수

// 함수 안에서 본인을 다시 호출하는거

function factorial(num){
    if(num===0){
        return 1;
    }

    return num*factorial(num-1);
}

// factorial(5) == 5 * factorial(4) == 5*4*factorial(3) == 5*4*3*factorial(2) == 5*4*3*2*factorial(1) == 5*4*3*2*1

// 5! => 5*4*3*2*1




// level 추가하려면 일일이 따로 다 적어야한다.
/*
var user1 = {
    name : 'jack',
    age : 20,
    address : 'secret',
    level : 0
}
var user2 = {
    name : 'joi',
    age : 30,
    address : 'top secret',
    level : 0
}
var user3 = {
    name : 'jason',
    age : 33,
    address : 'top secret2',
    level : 0
}
var user4 = {
    name : 'mia',
    age : 24,
    address : 'top secret3',
    level : 0
}
*/


/*
function User(_name, _age, _address, _level){
    this.name = _name;
    this.age = _age;
    this.address = _address;
    this.level = _level;
}

var usera = new User('jack', 20, 'secret', 0);
var userb = new User('joi', 30, 'top secret1', 0);
var userc = new User('jason', 33, 'top secret2', 0);
var userd = new User('mia', 24, 'top secret3', 0);

console.log(usera);
console.log(userb);
console.log(userc);
console.log(userd);
*/


/*
function Person(){

}

Person.prototype.name = 'default name';
Person.prototype.age = 20;

var jack = new Person();

console.log(jack);
console.log(jack.name);
*/








// 호이스팅
/*
function func(){
    // var b;
    console.log(b);

    var b = 70;
    // b = 70;

}

func();
*/






// 콜백 함수
/*
function delay(){
    setTimeout(function(){
        console.log('3초 지연됨')
    },3000);
}

function print(content){
    console.log(content)
}

print('a')
delay();
print('b');
*/
/*
function test(callback){
    console.log('a')
    console.log('b')
    console.log('c')
    callback();
}

function cb(){
    console.log('호출 됨');
}

test(cb);
*/








// 배열
/*
var user = {
    name : 'jack',
    age : 20,
    address : 'secert'
}

var user2 = {
    name : 'joi',
    age : 25,
    address : 'secert'
}

var user3 = {
    name : 'joi',
    age : 30,
    address : 'secert'
}


var arr = [user, user2, user3];

for(var i = 0; i < 3; i++){
    if(arr[i].age === 20){
        console.log(arr[i])
    }
}


var numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers[0]);

numbers.push(100);
console.log(numbers);

numbers.reverse();
console.log(numbers);

numbers.push(60);
console.log(numbers);

numbers.sort();
console.log(numbers);
*/



//             0  1  2  3  4  5  6
var numbers = [1, 2, 3, 4, 5, 6, 7];

// var value = numbers[index]
// index 는 0부터 시작

console.log(numbers.length);
// numbers 배열에 어떤 값이 있는지는 모르고 개수가 7개인것만 아는 상태
// numbers 안의 값 중에 3이 있으면 "3이 있습니다."

for(var i = 0; i < number.length; i++){
    //console.log(numbers[i]);
    if(numbers[i] === 3){
        console.log("3이 있습니다.")
    }
}

