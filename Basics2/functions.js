function add(a, b) {
    return a + b;
}
// console.log(add(2,3));
// add();  here add is reference and ()are used to execute a function
// console.log(add()) it will give NaN as output due to not entering arguments

function login(username = 'developer') {
    return `${username} just logged in`;
}

// console.log(login('Manish'));

// how to handle obj in function

const obj = {
    user: 'Me',
    id: 234
}

function receiveobj(getanyobj) {
    return `work is completed by ${getanyobj.user} and ${getanyobj.id} it is my id`
}

// console.log(receiveobj(obj));

// array
const arr = ["manish", 22, 12, 2002, 'solapur'];

function receivearr(getanyarr) {
    return `I am ${getanyarr[0]}, my DOB is ${getanyarr[1]}-${getanyarr[2]}-${getanyarr[3]} and I live in ${getanyarr[arr.length - 1]}`
}

// console.log(receivearr(arr));