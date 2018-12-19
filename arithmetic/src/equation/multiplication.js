import { randchoose, randrange } from '@/utils'

const multiplication = function (grade, type) {
  // 乘法
  // aa * b = xx
  if (grade === 3 && type === 1) {
    let a, b, x
    do {
      a = randrange(10, 100)
      b = randrange(2, 10)
      x = a * b
    } while (x < 10)
    return `${a}×${b}=`
  }

  // 乘法
  // aa * b = xx
  if (grade === 3 && type === 2) {
    let a, b, x
    do {
      a = randrange(100, 1000)
      b = randrange(2, 10)
      x = a * b
    } while (x < 10)
    return `${a}×${b}=`
  }

  // 连乘
  // a|a5 * b * c = xx|xx0
  if (grade === 3 && type === 3) {
    let a, b, c, x
    do {
      b = randrange(2, 10)
      c = randrange(2, 10)
      if (b % 2 === 0 || c % 2 === 0) {
        // 如果b和c中有偶数，那么就可以来一发a5
        if (Math.random() < 0.3) {
          a = randchoose([15, 25, 50])
        } else {
          a = randrange(2, 10)
        }
      } else {
        a = randrange(2, 10)
      }
      x = a * b * c
    } while (x < 10)
    return `${a}×${b}×${c}=`
  }
}

export default multiplication
