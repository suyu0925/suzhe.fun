import { randrange } from '@/utils'

function addMultiplication() {
  // 结果如：(12+6)×2
  // 规则：([1-99] + [1-99]) × [2-5]
  const a = randrange(1, 100)
  const b = randrange(1, 100)
  const c = randrange(2, 6)
  return [`${a}+${b}×${c}=`, `(${a}+${b})×${c}=`]
}

function subMultiplication() {
  // 结果如：(12+6)×2
  // 规则：([1-99] + [1-99]) × [2-5]
  let a, b, c
  do {
    b = randrange(1, 99)
    a = randrange(b + 1, 100)
    c = randrange(2, 6)
  } while (a <= b * c)
  return [`${a}-${b}×${c}=`, `(${a}-${b})×${c}=`]
}

function addDivision() {
  // 结果如：(12+6)÷2
  // 规则：([1-99] + [1-99]) ÷ [2-9]
  let a, b, c
  c = randrange(2, 10)
  a = randrange(c, 100, c)
  b = randrange(c, 100, c)
  return [`${a}+${b}÷${c}=`, `(${a}+${b})÷${c}=`]
}

function subDivision() {
  // 结果如：(12-6)÷2
  // 规则：([1-99] - [1-99]) ÷ [2-9]
  let a, b, c
  c = randrange(2, 10)
  b = randrange(c, 100, c)
  a = randrange(b + c, 100, c)
  return [`${a}-${b}÷${c}=`, `(${a}-${b})÷${c}=`]
}

function additive() {
  // 结果如：13+()=18
  // 规则如：[1-20]+[1-20]=[2-20]
  let a, c
  do {
    c = randrange(2, 20)
    a = randrange(1, 20)
  } while (c <= a)
  return `${a}+(  )=${c}`.replace(' ', '&nbsp')
}

const parentheses = function (grade, type) {
  if (grade === 1 && type === 1) {
    return additive()
  }
  if (grade === 3 && type === 1) {
    const a = randrange(0, 2)
    switch (a) {
      case 0:
        return addMultiplication()
      case 1:
        return subMultiplication()
    }
  } else if (grade === 3 && type === 2) {
    const a = randrange(0, 2)
    switch (a) {
      case 0:
        return addDivision()
      case 1:
        return subDivision()
    }
  }
}

export default parentheses
