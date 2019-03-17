//var name = 'kimhyewon'

//console.log(name);


//변수

/*

    var x;
    x = 10;
    var x = 10;

*/

//연산자

//제어문

//함수

//클래스(?)

//에러 핸들링

//호이스팅, 클로저, 프로토타입









//var x;
//console.log(x);

//x = 10;
//console.log(x);
// 타입을 명시 안해줘도 된다.

/*
    //java (컴파일 언어)
    int x = 10;
    string name = "ingyu"

    //javascript (동적 언어)
    var x = 10;
    var name = "ingyu"
*/

//var x;
//console.log(x);

//x = 10; // x 타입은 number
//x = "ingyu"; // String
//x = undefined; // undefined
//x = true; // boolean (참 또는 거짓)
//x = null; // null
/*
x = {
    name : 'ingyu',
    age : 20
} // object
*/


// 1. age란 변수에다가 10을 할당하세요 2. age란 변수의 값을 20으로 변경해보세요

//var age = 10; // 변수선언은 한번만
//age = 20;
//console.log(age);

/*

    산술 연산자
    비교 연산자
    논리 연산자
    문자열 연결 연산자
    타입 연산자

*/

/*
var result;

result = 10+3; // 더하기
console.log('더하기 :',result)

result = 10-3; // 빼기
console.log('빼기 :',result)

result = 10*3; // 곱하기
console.log('곱하기 :',result)

result = 10/3; // 나누기
console.log('나누기 :',result)

result = 10%3; // 나머지
console.log('나머지 :',result)

//변수 r(반지름) 에다가 10을 할당하고
//변수 s(넓이) 에 원 넓이를 계산해서 넣으세요   원넓이 = 반지름*반지름*3.14

var r = 10;
var s = r*r*3.14;
console.log('원넓이 :',s);
*/



/*
var x = 10;
var y = 3;

var result;

result = x > y; //true
console.log("x가 y보다 크다 :",result);

result = x >= y;
console.log("x가 y랑 같거나 크다 :",result);

result = x < y;
console.log("x가 y보다 작다 :",result);

result = x <= y;
console.log("x가 y랑 같거나 작다 :",result);

result = x == y;
console.log("x는 y랑 같다 :",result);

result = x != y;
console.log("x는 y랑 다르다 :",result);
*/

// 논리 연산자

// 조건식 A랑 조건식 B 모두 참인 경우
// 조건식 A 또는 조건식 B가 참인 경우

// var a = 10 > 5; // true
// var b = 5 > 10; // false

// var result;
// result = a && b;
// console.log("a와 b 모두 참 :",result);

// result = a || b;
// console.log("a 또는 b가 참 :",result);


// 문자열 연산자
// var x = 10;

// var result = 'Hi,'+'hyewon'; // 'Hi,hyewon'

// type 연산자

// var xType = typeof(x);
// var resultType = typeof(result);

// console.log("x의 타입",xType)
// console.log("result의 타입",resultType)


/*
    키워드
    var
    function
    if / else if / else
    switch
    for
    while
*/

/*
    제어문
    if else 문
    switch 문

    반복문
    for 문
    while 문
    do while 문
*/



/*
    level 이 gold 이면 상품가격은 원래 가격에 0.8을 곱한다.
    level 이 silver 이면 상품가격은 원래 가격에 0.9를 곱한다.
    level gold와 silver가 아니면 그냥 원래가격.
*/

/*
var level = 'silver'; // undefined
var price = 100;
var newPrice; // undefined

if(level == 'gold'){
    console.log('gold');
    newPrice = price * 0.8;
}else if(level == 'silver'){
    console.log('silver');
    newPrice = price * 0.9;
}else if(level == 'bronze'){
    console.log('bronze');
    newPrice = price * 0.9;
}else{
    console.log('others');
    newPrice = price;
}

console.log("새 가격",newPrice);
*/

/*
var level = 'gold';
var price = 100;
var newPrice;

switch(level){
    case 'gold':
        console.log('gold')
        newPrice = price * 0.9;
        break;
    case 'silver':
        console.log('silver')
        newPrice = price * 0.95;
        break;
    case 'bronze':
        console.log('bronze')
        newPrice = price * 0.98;
        break;
    default:
        console.log('default')
        newPrice = price;
}

console.log("가격",newPrice);
*/

// 변수 level = 65

// level 이 50 이하면 화면에다가 "50 이하" 출력
// level 이 50 초과 60 미만이면 화면에다가 "50 초과 60이하" 출력
// level 이 60 초과 70 이하이면 화면에다가 "60 초과 70이하" 출력
// level 이 70 초과면 화면에다가 "70초과" 출력

var level = 65;
if(level <= 50){
    console.log("50 이하")
}else if(level <= 60){
    console.log("50 초과 60 이하")
}else if(level <= 70){
    console.log("60 초과 70 이하")
}else{
    console.log("70초과")
}




/*
    내일 Git(terminal), Github, Gitkraken(GUI 툴)
*/






















