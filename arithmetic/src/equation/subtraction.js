import { randrange } from '@/utils'

const subtraction = function (grade, type) {
  // a - b = x, 10以内减法
  if (grade === 1 && type === 1) {
    let a, b
    do {
      a = randrange(1, 10)
      b = randrange(1, 10)
    } while (a <= b)
    return `${a}-${b}=`
  }

  // a - b = x, 20以内减法
  if (grade === 1 && type === 2) {
    let a, b
    do {
      a = randrange(1, 20)
      b = randrange(1, 20)
    } while (a <= b)
    return `${a}-${b}=`
  }

  // a|aa + b|bb = x, 100以内加法
  if (grade === 1 && type === 3) {
    let a, b
    do {
      a = randrange(1, 100)
      b = randrange(1, 100)
    } while (a <= b)
    return `${a}-${b}=`
  }
}

export default subtraction
