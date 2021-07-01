// Traverse = Find = Search
// Selecting element : querySelector()

let test = document.querySelector('.collection')
console.log(test)

// Insert = Add
// Adding elements : append()

test.append('Amar bhai joss... Nayok!')


let test = document.querySelector('.expense__amount')
test.append('Amar bhai joss... Nayok!')

// Modifying Text: innerText, textContent

let changeAmount = document.querySelector('.balance__amount')

// Create new Element: createElement()
let newPara = document.createElement('p')
newPara.textContent = '285,000 টাকা'
changeAmount.append(newPara) // changeAmount = kothae add korlam and newPara = ki add korlam

// undefined
// console.log(changeAmount.children)
// VM7492:1 HTMLCollection [p]0: plength: 1__proto__: HTMLCollection
// undefined
// let firstChildren = changeAmount.children[0]
// undefined
// firstChildren.innerText = '485,000 টাকা'
// "485,000 টাকা"
// let newPara = document.createElement('p')
// undefined
// console.log(newPara)
// VM7828:1 <p>​</p>​
// undefined
// newPara.textContent = '285,000 টাকা'
// "285,000 টাকা"
// console.log(newPara)
// VM7907:1 <p>​285,000 টাকা​</p>​
// undefined
// changeAmount.append(newPara)
// undefined
// console.log(changeAmount.children)
// VM8084:1 HTMLCollection(2) [p, p]0: p1: plength: 2__proto__: HTMLCollection
// undefined