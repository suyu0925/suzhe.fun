import { randrange } from './index'

/**
 * length must be equal to 2.
 * operators must be "*".
 * parenthese must be false.
 * @param {*} range 
 * @param {*} operators 
 * @param {*} parenthese 
 * @param {*} length 
 * @param {*} blank 
 * @param {*} tens {Boolean}
 */
function multiply(range, operators, parenthese, length, blank, tens) {
  // a * b = x
  let a
  let b
  if (range.result.max >= 100) {
    a = tens ? randrange(1, 10) * 10 : randrange(10, 100)
    b = randrange(2, 10)
  } else {
    a = randrange(2, 10)
    b = randrange(2, 10)
  }
  return `${a}*${b}=x`
}

export default multiply
