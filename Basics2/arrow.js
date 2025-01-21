const user={
    name:"manish",
    id:345,
    msg:function(){
        // console.log(`welcome ${this.name}`)
        // console.log(this)

    }

}
// user.msg()

function one(){
    const rollno=45
    const two={
        name:function(){
            console.log(`${rollno}`)
        }
    }
    two.name()
}

// one();

// arrow function

const arrow=(num1)=>(num1)
// console.log(arrow(2))


