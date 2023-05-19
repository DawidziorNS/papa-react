// Arithmetic Operators

let number = 0

// Assignment
number = 5

number + 5

number - 5

number * 5

number / 5

number % 3

number ** 2

// 5
console.log(number++)

// 6
console.log(number--)

// 6
console.log(++number)

// 5
console.log(--number)

// BIDMAS (Brackets, Indices, Div, Multi, Add, Sub)
const answer = (5 + 4) * 3
console.log(answer)

// Assignment Operators in JS

number = 0

number += 3

number -= 3

number *= 3

number /= 3

number %= 3

number **= 3

// String Operators
let text1 = "Sonny"
let text2 = "Sangha"
let text3 = text1 + " " + text2

// Concatenation Operator
let text4 = "Sonny"
text4 += " Sangha"

let text5 = `${text1} ${text2}`

// Adding Strings and Numbers - when you are adding number and string - the result will be string
let x = 5 + 5
let y = "5" + 5
let z = "Hello" + 5
let x1 = 5 + "5"
let y2 = Number("5") + 5

console.log(x)
console.log(y)
console.log(z)
console.log(x1)
console.log(y2)

// Comparison Operators
// Equal
console.log('Sonny' == 'Sonny')
console.log(0 == '0')

// Equal value equal type
console.log('Sonny' === 'Sonny')
console.log(0 === '0')

// Not equal
console.log('Sonny' != 'Sonny')
console.log(0 != '0')

// Not equal value not equal type
console.log('Sonny' !== 'Sonny')
console.log(0 !== '0')

console.log(2 < 4)
console.log(2 > 4)
console.log(2 <= 4)
console.log(2 >= 4)

// Ternary Operator
console.log(10/2 === 5 ? 'OK' : 'No')

// Logical Operators
number > 1 && number < 10
number > 1 || number < 10
!(number > 1 && number < 10)