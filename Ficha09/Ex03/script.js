let x = 0
let y = -1
let z = 4

let num = [x, y, z]
let sortednum = num.sort().reverse()
let sortedNumsString = ''

for (let i = 0; i < num.length; i++) {
  if (i !== num.length - 1) {
    sortedNumsString += num[i].toString() + ', '
  } else {
    sortedNumsString += num[i].toString()
  }
}
window.alert(sortedNumsString)