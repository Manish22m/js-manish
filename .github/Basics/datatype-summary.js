// const score=10;
// const value=10.3;
// const istrue=false;
// const total=null;
// const a=Symbol('12');
// const b=Symbol('12');
// console.log(a===b);
// console.log(total)

// stack and heap memory
// stack: all primitive values are stored in stack memory. means we actually get copy of object in short we can't change original value  

// heap: all non primitive values are stored in heap memory.means if we change any value it will get changed in original value.here we get ref of object

let name="developer"
let anothername=name;
anothername="tester"
console.log(anothername)

let obj={
    name:"user",
    div:'B'
}
let obj2=obj;
obj2.name="user2"
console.log(obj.name)
console.log(obj2.name)

