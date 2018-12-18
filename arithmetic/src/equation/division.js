import { randrange } from '@/utils'

const devide = function (grade, type) {
  if (grade === 3 && type === 1) {
    // 要输出yy / a = ，所以先生成a * xx = yy
    let a, x, c
    do {
      a  = randrange(2, 10)
      x = randrange(10, 50)
      c = a * x
    } while (c < 10 || c >= 100)
    return `${c}÷${a}=`
  }
  if (grade === 3 && type === 2) {
    // 要输出yy0 / a = ，所以先生成a * xx = yy
    let a, x, c
    do {
      a  = randrange(2, 10)
      x = randrange(10, 50)
      c = a * x
    } while (c < 10 || c >= 100)
    return `${c * 10}÷${a}=`
  }
}

export default devide
