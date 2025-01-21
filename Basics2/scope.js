function bicycle(){
    const wheel="Two wheeler";
    function car(){
        const handle="stering";
        // console.log(`This is ${wheel}`)
    }
    car();
    // console.log(handle); we can access from outside to inside but we can't access from inside to outside
}

bicycle();

// following is called as expression
const temp= function(num){
    return `number is ${num}`;
}
console.log(temp(2));
