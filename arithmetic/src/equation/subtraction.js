import { randrange } from '@/utils'

const subtraction = function (grade, type) {
  // a - b = x, 10以内减法
  if (grade === 1 && type === 1) {
    let a, b
    do {
      a = randrange(1, 11)
      b = randrange(1, 11)
    } while (a <= b)
    return `${a}-${b}=`
  }

  // a - b = x, 20以内减法
  if (grade === 1 && type === 2) {
    let a, b
    do {
      a = randrange(1, 21)
      b = randrange(1, 21)
    } while (a <= b)
    return `${a}-${b}=`
  }

  // a|aa + b|bb = x, 100以内加法
  if (grade === 1 && type === 3) {
    let a, b
    do {
      a = randrange(1, 101)
      b = randrange(1, 101)
    } while (a <= b)
    return `${a}-${b}=`
  }
}

export default subtraction
