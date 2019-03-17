// 반복문

// for
/*
    for(초기화식; 조건식; 증감식){

    }
*/

// i++;
// i = i + 1;

// i--;
// i = i - 1

/*
for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log('done');
*/

// 9 -> 0
/*
for(var j = 9; j >= 0; j--){
    console.log(j);
}
console.log('done');
*/

// 1부터 20까지 수 중 짝수만 출력해보세요  number % 2 == 0 -> 짝수
/*
for(var i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}
*/
/*
for(var i = 2; i <=20; i+=2){
    console.log(i)
}
*/

// break; continue;

// 1부터 10까지 출력을 하는데 5이면 출력하지 말고 반복문을 빠져나와라.
/*
for(var i = 1; i <= 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}
*/
/*
for(var i = 1; i <= 20; i++){
    if(i%2==1){
        continue; // continue 만나면 밑에꺼 실행안하고 조건식으로 넘어간다.
    }
    console.log(i);
}
*/
/*
for(;;){
    //무한대
}
// 무한반복할때 control + c 누르면 종료
*/
/*
for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        console.log(i,j);
    }
}
*/

// 구구단을 출력해보세요.
/*
for(var i = 1; i < 10; i++){
    for(var j = 1; j < 10; j++){
        console.log(i+"X"+j+"="+(i*j))
    }
    console.log("\n")
}
*/


// while
/*
while(조건식){

}
*/
/*
var isDone = false;

while(isDone){

    if(isDone){
        break;
    }

}
*/
/*
var i = 0;
while(true){
    i++;
    console.log(i);
    if(i==10){
        break;
    }
}
*/