/*----------- We've learned so far ------------------------

creation: Element - createElement()
Modification: Text - innerText, textContent 
selection: class(.) and id(#) - querySelector()
insertion: Element - append()

*/

// Modification: element HTML - innerHTML
let changeAmount = document.querySelector('.balance__amount')
changeAmount.innerHTML = '<em>Node JS is the Best!!!</em>'

// deletion: element - remove()
// node.remove()
// Short Traverse - children
let changeAmount = document.querySelector('.balance__amount')
let newPara = document.createElement('p')
newPara.innerText = 'You are my hero!'
changeAmount.append(newPara)
console.log(changeAmount.children[1])
let newText = document.querySelector('.balance__amount').children[1]
console.log(newText)
newText.remove()
