// Functions in JS
const fetch = require("node-fetch");

function printMyName(name) {
    console.log(`My name is ${name}`)
}

printMyName('Sonny')
printMyName('Jay')
printMyName('Elon')

const printMyNameArrowFunction = (name, age) => console.log(`My name is ${name} and my age is ${age} years old`)

printMyNameArrowFunction('Sonny', 27)
printMyNameArrowFunction('Jay', 99)

const multiply = (num1, num2) => num1 * num2

const answer = multiply(2, 4)

console.log(answer)

const fetchSomeEmployees = async () => {
    const res = await fetch('https://dummy.restapiexample.com/api/v1/employees')
    const data = await res.json()
    console.log(data)
}

async function fetchSomeEmployees2() {
    const res = await fetch('https://dummy.restapiexample.com/api/v1/employees')
    console.log(res)
    const data = await res.json()
    console.log(data)
}

const fetchSomeEmployees3 = async () => {
    const fetchTheData = async () => {
        const res = await fetch('https://dummy.restapiexample.com/api/v1/employees')
        const data = await res.json()
        console.log(data)
    }
    await fetchTheData()
}

