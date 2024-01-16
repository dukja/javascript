// *primitive, reference
console.log(typeof "text")
// Check if obj is an instance of MyClass

console.log(typeof null)

//*protoType Chain
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


console.log(null == 0)


!null
!!null
null === true
!null === true
null + 123


!undefined
undefined+123

//== eq, type casting
//eqeqeq
const a = 0
a == 0
0 ===false
Number(a) === 0


'1' == 1
1 == true
0 == false


//strict type castion
11+'text'
!!'text'
!!''
parseInt('9.999', 10)

String(11+'text')
Boolean(!!'text')
!!''
Number('11')

parseInt('9.999', 10)

//*explicit
isNaN(123)
Number.isNaN(123)

//*boundary
//min, begin, first, prefix, argument order







