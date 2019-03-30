var test = require('./test.js');

// 해야되는 일
console.log('do0');




// list에 있는 값들을 다 더한 뒤에 출력해라
// 만약 값중에 숫자가 아닌게 들어 있다면 0을 출력해라
// 오류가 발생하더라고 0을 출력해라
/*
var list = [10, undefined, 5, 7];
var sum = 0;
for(var i=0; i<list.length; i++){
    if(typeof list[i] !== 'number'){
        sum = 0;
        break;
    }
    sum = sum + list[i];
}
console.log(sum); // sum에는 0이 찍힌다. 만약 오류가 발생하면 프로그램이 종료됨
*/
// 밑에꺼 처럼하면 코드가 간결해진다..
var list = [10, undefined, 5, 7];

var sum = 0;

try{
    for(var i=0; i<list.length; i++){
        if(typeof list[i] !== 'number'){
            throw new Error('숫자가 아니다.');
        }
        sum = sum + list[i];
    }
}catch(e){
    sum = 0;
}

console.log(sum);




//오류를 뱉어내는 코드
try{
    test.print();
    throw new Error('error!!!'); // 고의적으로 에러를 던진다. catch문이 실행됨
}catch(e){
    console.log(e.message);
}finally{
    console.log('무조건 실행');
}


// 해야 되는 일
console.log('do1')
console.log('do2')
console.log('do3')
console.log('do4')




/* 동기적
function test1(){
    console.log('test1')
    for(var i=0; i<100; i++){
        if(i%10===0){
            console.log(i)
        }
    }
}

function test2(){
    console.log('test2')
}

function test3(){
    console.log('test3')
}

test1();
console.log('test1 호출 했음')
test2();
console.log('test2 호출 했음')
test3();
console.log('test3 호출 했음')
*/

// IO 작업 -> setTimeout 비동기적으로 타이머를 건드림..
console.log('작업 1 시작')
setTimeout(function(){
    console.log('3초 뒤')
}, 3000)

console.log('작업 2 시작')
setTimeout(function(){
    console.log('2초 뒤')
}, 2000)

console.log('작업 3 시작')
setTimeout(function(){
    console.log('1초 뒤')
}, 1000)




// 비동기 작업 처리할 때 사용하는 스킬

// Promise 문법

// async await 문법 : promise에 대해서 알고 있어야함.