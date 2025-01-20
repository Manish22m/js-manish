const arr1=[1,2,3,4,5,6];
// console.log(arr1[3]);

// array methods
arr1.push(7);
arr1.push(8);
// console.log(arr1.toString())
// console.log(typeof(arr1))

// console.log(arr1)
const arr2=arr1.slice(2,4);
// console.log(arr2);
const arr3=arr1.splice(2,4);
// console.log(arr3)

const temp={
    name:"Developer",
    email:"developer@12gmail.com",
    dept:"CSE",
    age:24
}
// console.log(temp.name)
// console.log(temp["name"]);
temp.welcome=function(){
    console.log(`welcome to your office, are you ${this.name}?`)
}
// console.log(temp.welcome());

const arr={}
arr.name='web-developer'
arr.id=123
// console.log(arr)

const real={
    naav:'frontend developer',
    user:{
        user1:"manish",
        lastname:"mengane"
    }
}
// console.log(real.user.lastname)
const obj1={1:'a', 2:'b'}
const obj2={1:'c', 3:'d'}
// const obj3={obj1, obj2}
// const obj3=Object.assign({},obj1, obj2)

// spread operator
const obj3={...obj1, ...obj2} 
// console.log(obj3);
console.log(obj3);