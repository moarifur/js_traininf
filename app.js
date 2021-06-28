// console.log('yo')

/* Loop -

1. while()
2. for()
3. do..while()
4. for..of()
5. for..in()
7. forEach()

*/ 

// ---------------------- 1. while() loop ------------------------------
// console.log(`--------------- 1. while() loop ---------------`)
// let i = 1
// let sum = 0
// let flag = true
// while (flag) {
// // while (i<6) {
//     sum += i
//     console.log(`When ${i}, the summation is: ${sum}`)
//     i++
//     if(i === 6){
//         flag = false
//         break
//     }
    
// }
// console.log(`When ${i}, we are out of loop`)
// console.log(`The summation from 1 to 5 is: ${sum}. So you have got your answer, right?`)

// // ------------------------- 2. for() -----------------------------------
// console.log(`--------------- 2. for() loop ---------------`)
// for (let i = 1; i < 6; i++) {
//     sum += i
//     console.log(`When ${i}, the summation is: ${sum}`)
// }
// console.log(`When ${i}, we are out of loop`)
// console.log(`The summation from 1 to 5 is: ${sum}. So you have got your answer, right?`)


/* Recursion: 
 --------------------- Class# 03(1): Find the summation of natural number -------------------------------------
    Demo: 1 + 2 + 3 +……..+ n    
    Steps: 
        - let n = 8: 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1
    
        // 8 + sonn(7)
        // 8 + 7 + sonn(6)
        // 8 + 7 + 6 + sonn(5)
        // 8 + 7 + 6 + 5 + sonn(4)
        // 8 + 7 + 6 + 5 + 4 +sonn(3)
        // 8 + 7 + 6 + 5 + 4 + 3 + sonn(2)
        // 8 + 7 + 6 + 5 + 4 + 3 + 2 + sonn(1)
        // 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 

*/ 

// function sonn(n) {
//     if(n <= 1)
//         return n
//     return n + sonn(n-1)    
// }

// console.log(sonn(8))


/* --------------------- Class# 03(2): Find Fibonacci series for user defined range -------------------------------------
    Demo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …….. In mathematical    
    Steps: 
        - Create a function to find fibonacci: fiboFunc(n)
        - n(Range) Take range as a perameter for our fiboFunc(n)

*/ 

// function fiboFunc(n) {
//     if(n <= 1)
//         return n
//     return fiboFunc(n-1) + fiboFunc(n-2)
// }
// console.log(fiboFunc(8))


/* --------------------- Class# 04/05: Array -------------------------------------
- Create a new array
- Read an array
-----------------------------------------------------------------------------------------------------------------------*/ 

let car = 'Rols'
/* --------------------------- Create a new array -----------------------------
    - With []: Old school system
    - with constructor function

*/ 

// With []: Old school system
const cars = ["Saab", "Volvo", "BMW"]
// const fruits = []

// with constructor function
const fruits = new Array()
console.log(fruits)

cars.forEach( car => {
    console.log(car)
})

// Object - 1. Propertise, 2. Method





// DOM: Document Object Model
// CRUD

/* ------------- Quiz001: Temperature calculator -------------------
    Use Javascript function to build a Temperature calculator
    - Celsious to Fahrenheit
    - Fahrenheit to celsious
*/ 

// Coding Step 1:
// let tempCtoF = c => {
//     let result = (c * 1.8) + 32
//     return result
// } 
// console.log(tempCtoF(40))

// Coding Step 2:
// let tempCtoF = c => (c*1.8)+32
// console.log(tempCtoF(40))

// Coding Step 3:
let tempCtoF = c => `Celsius to Fahrenheit is: ${(c*1.8)+32}`
tempCtoF(40)
tempCtoF(12)
tempCtoF(33)
tempCtoF(35)

/*
    Function: 'Unit of work' 
    - Defination
    - Call
*/ 

/* 
--------------------- Class# 06: Array -------------------------------------
array: object(Sentence/ Phrase)
    - Properties(Attribute)(Noun)
    - Method(Action)(Verb)
----------------------------------------------------------------------------
*/ 

let car = {
    name: 'BMW',
    model: '3670AC',
    wheel: 4,
    color: 'Black',
    speed: '120 KMPH',
    start: function(){console.log('Car is Starting...')},
    stop: function(){console.log('Car is Stopping...')},
    reverse: function(){console.log('Car is rolling back...')},
    parking: function(){console.log('Car is Getting Parked...')},
    drive: function(){console.log('I am driving...')}
}

console.log(car.name)

// Assignment102: ProjectBased: bkash phone(button) app 
// Ref: https://www.youtube.com/watch?v=DohUF6AnSkQ
// Programming Ref: https://www.w3schools.com/jsref/jsref_obj_array.asp