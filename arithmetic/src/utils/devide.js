/**
 * length must be equal to 2.
 * operators must be "/".
 * parenthese must be false.
 * @param {*} range 
 * @param {*} operators 
 * @param {*} parenthese 
 * @param {*} length 
 * @param {*} blank 
 * @param {*} tens 
 */
function devide(range, operators, parenthese, length, blank, tens) {
  // x * b = a, a / b = x
  let a, b, x
  while (true) {
    // x can not be 0 or 1
    while (true) {
      x = Math.floor(Math.random() * (range.result.max - range.result.min)) + range.result.min
      if (x !== 0 && x !== 1) {
        break
      }
    }
    if (tens) {
      if (x > 10) {
        x = 10 * Math.floor(x / 10)
      }
    }

    // b can not be 0 or 1 or x
    while (true) {
      b = Math.floor(Math.random() * (range.max - range.min)) + range.min
      if (b !== 0 && b !== 1 && b !== x) {
        break
      }
    }
    if (tens) {
      if (b > 10) {
        b = 10 * Math.floor(b / 10)
      }
    }

    a = x * b

    if (a <= range.max && a >= range.min) {
      break
    }
  }
  const str = `${a}/${b}=  `
  return str.replace(/ /g, '&nbsp;').replace(/\//g, '÷').replace(/\*/g, '×')
}

export default devide
