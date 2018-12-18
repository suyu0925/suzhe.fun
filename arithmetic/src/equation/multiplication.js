import { randchoose, randrange } from '@/utils'

const multiplication = function (grade, type) {
  if (grade === 3 && type === 1) {
    // a|a5 * b * c = xx|xx0
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
