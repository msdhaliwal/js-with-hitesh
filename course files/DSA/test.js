const set = new Set()

const arr1 = [1, 2]
const arr2 = [1, 2]

set.add(JSON.stringify(arr1))
set.add(JSON.stringify(arr2))

// console.log(set.size)
// console.log(set.has('[1, 2]'))


const start = 'az'
const newSet = new Set(start)
const newSetv2 = new Set([start])

console.log(newSet)
console.log(newSetv2)

let r = 2
let c = 3

const pos = r + ',' + c;
console.log(pos)
console.log(typeof pos)