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

function sonn(n) {
    if(n <= 1)
        return n
    return n + sonn(n-1)    
}

console.log(sonn(8))


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