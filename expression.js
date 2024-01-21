//Cl20
//(값, 식, return function)function
//{key:value(식, 연산자)}

//Cl21
//조건 ? 참(식) : 거짖(식)
//*명확 * 조건 정리
switch(1){
    case value:
        break;
    case value:
        break;
    default:
        break;
}
const example = condition
    ? (a === 0 ? 0 : 1)
    :null;

const message = (isLogin) =>{
    const name = isLogin ? getName() : '이름없음'
    return  `${name}`;
}

//CL22
// https://developer.mozilla.org/ko/docs/Glossary/Falsy
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy


if (null) {
    // 도달할 수 없습니다.
}
if (undefined) {
// 도달할 수 없습니다.
}
if ("") {
// 도달할 수 없습니다.
}
if (0) {
// 도달할 수 없습니다.
}

//CL23
console.log(true && false && '도닱X') 
console.log(false || false || '도닱O') 

//default value
function Data(){
    return data || 'Fetching...'
}

function Dog(someDog){
    return (someDog || '냐옹') + '입니다'
}


function example23(){
    // if(condition1){
    //     if(condition2){
                // if(condition3){
                //     return value
                // }else{''
                //     return 'null'
                // }
    //     }
    // }
    if(condition1 && condition2){
        return 'value' : 'null';
    }
}

//CL24
// if(conditionA){
//     console.log()
// }else if(conditionB){
//     console.log()
// }
if(conditionA){
    console.log()
}else{
    if(conditionB){
        console.log()
    }
}

//CL25
// function sayHello (User) {
//     if(conditionA){

//     }else{
//         'Hello'
//     }
// }
function sayHello (User) {
    if(conditionA){

    }
    return 'Hello'
}

//CL26
// function login(isLogin, user){
//     if(!isLogin){
//         if(check()){
//             if(!user){
//                 return register(user)
//             }else{
//                 refresh()
//                 return '로그인 성공'
//             }
//         }else{
//             throw Error    
//         }
//     }
// }

function login(){
    return '로그인 성공'
}
function login(isLogin, user){
    if(isLogin){
        return
    }
    if(!check()){
        throw Error   
    }
    if(!user){
        return register(user)
    }
    login()
}


// function 오늘하루(condition, weather, isJob){
//     if(conditionA === 'good'){
//         공부()
//         게임()
//         if(conditionB === 'good'){
//             운동()
//             빨래()
//         }
//         if(conditionC === 'good'){
//             야근()
//             취침()
//         }
//     }
// }
function 오늘하루(condition, weather, isJob){
    if(conditionA !== 'good'){
        return
    }
    
    공부()
    게임()
    if(conditionB !== 'good'){
        return
    }

    운동()
    빨래()

    if(conditionC !== 'good'){
        return
    }
    야근()
    취침()
}

//CL27
//CL28
function sum(x,y){
    x = x || 1
    y = y || 1
    return x+y 
}


sum() 

parseInt(number, radix)


function safeParseInt(number, radix){
    return parseInt(number, radix || 10)
}

// if(conA &&  conB || conC)
if({conA && conB} || conC)



//CL30
//0 is falty
// 
undefined  ?? height
null ?? height
// function hello(msg){
//     if(!msg){
//         return 'hello'
//     }
// }
// console.log(hello(undefined))
function hello(msg){
    return 'hello' + ( msg ?? 'wold')
}
console.log(hello(undefined))
// console.log(undefined || null ?? "foo")
console.log((undefined || null) ?? "foo")

//CL31
// if(!(A || B)){}
if(!A && !B){}

// true == not false;
// false == not true;





