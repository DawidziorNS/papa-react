const car = {
    make: 'Tesla',
    model: 'Model Y',
    year: 2022
}

const values = Object.values(car)

console.log(values) // => [ 'Tesla', 'Model Y', 2022 ]

const arr = ['JavaScript', 'Python', 'C']

console.log(Object.values(arr)) // => [ 'JavaScript', 'Python', 'C' ]
console.log(Object.keys(arr)) // => [ '0', '1', '2' ]

const arrLike = {
    length: 3,
    0: 'Tesla',
    1: 'Model 3',
    2: 2021
}

console.log(Object.values(arrLike)) // => [ 'Tesla', 'Model 3', 2021, 3 ]
console.log(Object.keys(arrLike)) // => [ '0', '1', '2', 'length' ]

const keys = Object.keys(car)

console.log(keys) // => [ 'make', 'model', 'year' ]

console.log(Object.values("Sonny")) // => [ 'S', 'o', 'n', 'n', 'y' ]
console.log(Object.values(42)) // => []

Object.defineProperty(car, "hidden", {
    value: 'secret',
    enumerable: false
})

console.log(Object.values(car)) // => [ 'Tesla', 'Model Y', 2022 ] => 'secret' is not included, because enumerable is set to false

console.log(Object.getOwnPropertyDescriptors(car)) // => ... year: { value: 2022, writable: true, enumerable: true, configurable: true },

console.log(Object.keys("Sonny")) // => [ '0', '1', '2', '3', '4' ]
console.log(Object.keys(7)) // => []

console.log(Object.keys(car)) // => [ 'make', 'model', 'year' ] => 'hidden' is not included