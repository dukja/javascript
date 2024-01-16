// *primitive, reference
console.log(typeof "text")
// Check if obj is an instance of MyClass

console.log(typeof null)

//"protoType Chain"
function MyClass(name){
  this.name = name
}
const A={
  name : "Class"
}

const B = new MyClass("Class")
console.log(A instanceof MyClass)
console.log(B instanceof MyClass)

//*reference
const arr = []
const func = function(){}
const date = new Date()

console.log(arr instanceof Array)
console.log(func instanceof Function)
console.log(date instanceof Date)
console.log(date instanceof Object)

//*prototype
console.log(Object.prototype.toString.call(date))