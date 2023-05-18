// Accessing Object the Old way

const person = {
    firstName: 'Sonny',
    lastName: 'Sangha',
    currentAge: 28
}

const personFirstName = person.firstName
const personLastName = person.lastName

console.log(personFirstName)
console.log(personLastName)

// New way

let {firstName: fName, lastName: lName, middleName} = person

console.log(fName)
console.log(lName)
console.log(middleName) // undefined!

let {firstName, lastName, middleName2 = '', currentAge: age = 20} = person

console.log(middleName2)
console.log(age)

// Old way

const arr = [1, 2, 3]

let x1 = arr[0] // etc.

console.log(x1)

const [x, y, z] = arr

console.log(x)
console.log(y)
console.log(z)

let [a, b, c, d] = [1, 2, 3, 4]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

const arrValue = ['one', 'two', 'three']

// Skipping second value

const  [x2,,z2] = arrValue

console.log(x2)
console.log(z2)

// With spread operator

const names = ['Sonny', 'Jay', 'Brian', 'Rodgers']

const  [x3, ...y3] = names

console.log(x3)
console.log(y3)

// Also working for object - Rest element must be the last element

let {firstName: name, ...rest} = person

console.log(name)
console.log(rest)

// Swapping variables

let name1 = 'Sonny'
let name2 = 'Jay';

[name1, name2] = [name2, name1]

console.log(name1)
console.log(name2)

function getPerson() {
    return null
}

// Simply avoid errors in case when null is return

let { firstName2, lastName2 } = getPerson() || {}

let member = {
    id: 1,
    name5: {
        firstName: 'Sonny',
        lastName: 'Sangha'
    }
}

let { id,  name5: { firstName: firstName3, lastName: lastName3 } } = member

console.log(id)
console.log(firstName3)
console.log(lastName3)
// console.log(name5) // it won't work

let member2 = {
    id2: 1,
    name6: {
        firstName4: 'Sonny',
        lastName4: 'Sangha'
    }
}

// This solve the problem
let { id2,  name6: { firstName4, lastName4 }, name6 } = member2

console.log(id2)
console.log(firstName4)
console.log(lastName4)
console.log(name6)

// Destructuring Function Argument
let displayFullName = (person) => `${person.firstName} ${person.lastName}`
console.log(displayFullName(person))

let displayFullName2 = ({firstName, lastName}) => `${firstName} ${lastName}`
console.log(displayFullName2(person))