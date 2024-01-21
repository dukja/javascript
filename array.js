//CL32
//arr[index]

arr=[1,2,3]
arr ={
0:1,
1:2,
1:3}

//arr.length
Array.isArray(arr)


//CL33
// latest index
arr.length = 10
console.log(arr)
arr.length = 0 // initialize

//CL34
// arr[0],arr[1]
const [el1, el2] = arr
play([1,2],1,2)

//first
// const [el3, el4] = arr
const [el5] = arr
// [][0] undefined
// [][0] ?? ''

//CL35
//object,argument is 유사 배열 객체
arrayToObj={
    0:'el1',
    1:'el1',
    length:2
}
const arr = Array.from(arrayToObj)
console.log(arr)


function list (){
    arguments
    for(let index=0; index < arr.length; 1++){
        const el = arguments[index]
        console.log(el)
    }
}

list(1,2,3,4,5,6)

//CL36
// const newArr =  originArr
const newArr =  [...originArr]

//map filter, slice 
priceList = ['2', '3' , '4', '5']

// function getPrice (priceList){
//     let temp = []
//     for(i=0; i<priceList.length;i++){
//         if(price[i]>1){
//             temp.push(price[i]+'원')
//         }
//     }
//     return temp
// }


const suffixWon = (price) => price + '원'
const isOVer = (price)=> { price>10}

// function getPrice(priceList){
//    const isList = priceList.filter(isOVer)
//    return isList.map((price)=>(suffixWon))
// }
function getPrice(priceList){
   return priceList.filter(isOVer).sort(ascendingList).map((price)=>(suffixWon))
}

//every, some, find, findIndex 종료 여부 결정