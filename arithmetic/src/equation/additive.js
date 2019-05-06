import { randrange } from '@/utils'

const additive = function (grade, type) {
  // a + b = x, 10以内加法
  if (grade === 1 && type === 1) {
    let a, b
    a = randrange(1, 10)
    b = randrange(1, 10)
    return `${a}+${b}=`
  }

  // a|aa + b|bb = x, 20以内加法
  if (grade === 1 && type === 2) {
    let a, b
    a = randrange(1, 20)
    b = randrange(1, 20)
    return `${a}+${b}=`
  }

  // a|aa + b|bb = x, 100以内加法
  if (grade === 1 && type === 3) {
    let a, b
    a = randrange(1, 50)
    b = randrange(1, 50)
    return `${a}+${b}=`
  }
}

export default additive
