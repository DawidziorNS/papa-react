const car = {
    make: 'Tesla',
    model: 'Model Y',
    year: 2022
}

const entries = Object.entries(car)

console.log(entries) // => [ [ 'make', 'Tesla' ], [ 'model', 'Model Y' ], [ 'year', 2022 ] ]

// Traditional loop
for (const item of entries) {
    console.log(`${item[0]}: ${item[1]}`)
}

// Traditional loop with destructuring
for (const [key, val] of entries) {
    console.log(`${key}: ${val}`)
}

// ES6
entries.forEach(([key, val]) => console.log(`${key}: ${val}`))

const person = {
    name: 'Sonny Sangha',
    age: 28,
    occupation: 'CEO of PAPAFAM'
}

// Map object holds key-value pairs and remembers the original insertion order of the keys
const map = new Map(Object.entries(person))

console.log(map)

console.log(map.get('name'))
console.log(map.get('age'))

map.set('car', 'BMW')

console.log(map)

map.delete('age')

console.log(map)
