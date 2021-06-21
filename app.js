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
console.log(`--------------- 1. while() loop ---------------`)
let i = 1
let sum = 0
let flag = true
while (flag) {
// while (i<6) {
    sum += i
    console.log(`When ${i}, the summation is: ${sum}`)
    i++
    if(i === 6){
        flag = false
        break
    }
    
}
console.log(`When ${i}, we are out of loop`)
console.log(`The summation from 1 to 5 is: ${sum}. So you have got your answer, right?`)

// ------------------------- 2. for() -----------------------------------
console.log(`--------------- 2. for() loop ---------------`)
for (let i = 1; i < 6; i++) {
    sum += i
    console.log(`When ${i}, the summation is: ${sum}`)
}
console.log(`When ${i}, we are out of loop`)
console.log(`The summation from 1 to 5 is: ${sum}. So you have got your answer, right?`)