const array=['manish', 'mengane', 'developer', 'job']
// const temp=array.forEach((i) => {
//     console.log(i)
// } )  for each lopp can't return anything

const real=array.filter((i) => {
    // console.log(i)
    return i;
} )
// console.log(real);

const books=[
    {title: 'bhagvatgita', publish: 1120, edition:1850 },
    {title: 'ramayan', publish: 1340, edition:1900 },
    {title: 'mahabharat', publish: 1200, edition:1920 },
    {title: 'good_habits', publish: 2008, edition:2019 },
    {title: 'money_managment', publish: 2020, edition:2023 },
    {title: 'share_market', publish: 2022, edition:2023 },
    {title: 'balbharti', publish: 2018, edition:2020 },
    {title: 'history', publish: 2024, edition:2024 },
    {title: 'english', publish: 2025, edition:2024 }
]

const book=books.filter((i) => (i.edition===2024))
// console.log(book);

const book1=books.filter((i) => (i.publish>2020))
// console.log(book1);

// reduce

const arr=[1,2,3,4,5]

console.log(arr.reduce((acc,i) => (acc+i),0))

