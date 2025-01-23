const arr=[1,2,3,4,5]
for (const i in arr) {
//    console.log(arr[i]);
}

const string='manish'
for (const i in string) {
    // console.log(string[i]);
}

const obj={
    'name1':'manish',
    'name2':'mengane'
}
for (const [key, value] in obj) {
    // console.log(key)
    // console.log(key, '=', value)
}

const one=['a', 'b', 'c', 'd', 'e']
one.forEach(function(i){
    // console.log(i)
} )

// arrow function

const two=['1', '2', '3', '4', '5']
two.forEach((i)=>(console.log(i)))