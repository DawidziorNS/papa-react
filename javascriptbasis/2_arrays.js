const students = ['Sonny', 'Jay', 'Sarah', 'Angelina', 'Elon']

console.log(students)

students.push('Bob')

console.log(students)

students.pop()

console.log(students)

console.log(students[0])
console.log(students.at(0))

console.log(students[5])
console.log(students.at(5))

// Start / End - last not included - original array is not modified
console.log(students.slice(1, 3))

// Start - end how much - modify original array!
students.splice(2, 1)

console.log(students)

students.splice(2, 1, 'Bob', 'Andy')

console.log(students)

// Shift modify original array. Remove and return first elem!
const elem = students.shift()
console.log(elem)
console.log(students)

// Unshift modify original array. Add new elems on the beginning
students.unshift('Apple', 'Banana', 'Orange')
console.log(students)

console.log(students.join(' | '))

// Overwrite array - start position, and end - in this case 2 times - index 2 not included. When end will be bigger than length - new values will not be added
students.fill('PAPAFAM', 0, 2)
console.log(students)

console.log(students.length)
console.log(students.toString())
console.log(students.toLocaleString()) // respect regional settings and formatting option

// reverse order - modify original array
students.reverse()

console.log(students)

const moreStudents = ['Andy', 'Tim', 'Bob']

// Original array is not modified!
students.concat(moreStudents)

console.log(students)
console.log(students.concat(moreStudents))