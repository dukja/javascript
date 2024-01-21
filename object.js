 //shortHand
 const first = 'F'
 const last = 'L'

//  const person = {
//     first:'F',
//     last:'F',
//     getFullName : function (){
//         return this.first + '' +this.last
//     }
//  }

 const person = {
    first,
    last,
    getFullName(){
        return this.first + '' +this.last
    }
 }
//computedPropertyName
const obj = {
    [function0](){
        return 'func0'
    }
}
const handleChange = (e) =>{
    setState ({
        [e.target.name] : e.target.value;
    })
}

//lookupTable
// function getUser(type){
//     switch(key){
//         case 'admin':
//             return '관리자'
//         case 'instructor':
//             return '강사'
//         default:
//             return '해당없음'
//     }
// }
function getUser(type){
    const USER_TYPE = {
        admin:'관리자',
        instructor:'강사',
        UNIDEFIND: '해당 없음'
    }
    return USER_TYPE[type] ?? USER_TYPE[UNIDEFIND]
}

// function Person (name, age, location) {
//     this.name = name;
//     this.age = age;
//     this.location = location;
// }

// const poco = new Person('poco', 30, 'korea')

// function Person ({name, age, location}) {
//     this.name = name?? 'poco';
//     this.age = age?? 30;
//     this.location = location ?? 'korea';
// }
function Person (name, {age, location}) {
    this.name = name?? 'poco';
    this.age = age?? 30;
    this.location = location ?? 'korea';
}

const pocoOption = new Person({
    age: 30,
    location:'korea'})
    
const poco = new Person('poco',pocoOption)

const orders = ['F','S', 'T']

const st = orders[0]
const rd = orders[2]

const { 0: st2, 2:rd2} = orders


const STATE = Object.freeze({
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIR',
    OPTIONS: {
        GREEN: 'GREEN',
        RED: 'RED'
    }
})


STATE.OPTIONS.GREEN ='G'
STATE.OPTIONS.YELLOW ='Y'
delete STATE.OPTIONS.RED 

STATE.OPTIONS;

// String.prototype.welcome = function(){
//     return 'hello';
// }

const persons = {
    name: 'poco'
}
// persons.hasOwnProperty('age') 
Object.prototype.hasOwnProperty.call(persons, 'age') 


const objs = {
    name: 'value'
}
objs?.name


response = {
    data:{userList:[
        
    ]}
}

