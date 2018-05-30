import { Expression, Equation, parse } from 'algebra.js'

const NatualSigns = {
  Add: '+',
  Subtract: '-',
  Multiply: '×',
  Divide: '÷'
}

const ComputedSigns = {
  Add: '+',
  Subtract: '-',
  Multiply: '*',
  Divide: '/'
}

const log = function () {
  // console.log.apply(console, arguments)
}

const randomChoose = function (array) {
  return array[Math.floor(Math.random() * array.length)]
}

const resolve = function (words) {
  const method = 2
  if (method === 1) {
    let expr = new Expression(0)
    words.unshift('+')

    let cursor = 0
    while (true) {
      // try to get a operator and a number
      const operator = words[cursor++]
      const number = words[cursor++]

      log('expr ', expr.toString())

      if (operator === '+') {
        expr = expr.add(number)
      } else if (operator === '-') {
        expr = expr.subtract(number)
      } else if (operator === '×') {
        expr = expr.multiply(number)
      } else if (operator === '÷') {
        expr = expr.divide(number)
      } else if (operator === '=') {
        if (number === 'x') {
          return expr.toString()
        } else {
          const eq = new Equation(expr, number)
          const x = eq.solveFor('x')
          return x.toString()
        }
      }
    }
  } else {
    let input = words.slice(0, words.length - 2).join('')
    input = input.replace('/×/g', '*')
    input = input.replace('/÷/g', '/')
    try {
      const expr = parse(input)
      const rhs = words[words.length - 1]
      log('expr = ', expr.toString(), 'rhs = ', rhs)
      if (rhs === 'x') {
        return expr.toString()
      }
      const eq = new Equation(expr, rhs)
      const x = eq.solveFor('x')
      return x.toString()
    } catch (err) {
      log(`${err.stack}`)
      return
    }
  }
}

const pad = function (word, digits) {
  if (typeof (word) === 'number' && word < 10) {
    word = ' ' + word.toString()
  }
  return word
}

const leftpad = function (str, length, char) {
  const n = length - str.length
  for (let i = 0; i < n; i++) {
    str = (char || ' ') + str
  }
  return str
}

const stringify = function (words, parenthese, blank) {
  let str = ''
  for (const word of words) {
    if (blank === '下划线') {
      str += word === 'x' ? (parenthese ? '___' : '___') : word
    } else {
      str += word === 'x' ? (parenthese ? '(  )' : '  ') : word
    }
  }
  str = leftpad(str, 10, ' ')
  return str.replace(/ /g, '&nbsp;').replace(/\//g, '÷').replace(/\*/g, '×')
}

const generateEquation = function (params) {
  // default value
  params = params || {}
  const range = params.range || {
    min: 1,
    max: 99,
    result: {
      min: 0,
      max: 99
    }
  }
  const operators = (params.operators || ['+', '-']).map(operator => {
    if (operator === '×') {
      return '*'
    } else if (operator === '÷') {
      return '/'
    } else {
      return operator
    }
  })
  const parenthese = params.parenthese || false
  const length = params.length || 2
  const blank = params.blank || '空格'

  while (true) {
    // generate words
    const words = []
    let hasParenthese = false
    for (let i = 0; i < length; i++) {
      const isParenthese = parenthese && (Math.random() > 1 / length) && !hasParenthese
      if (isParenthese) {
        words.push('x')
        hasParenthese = true
      } else {
        const num = Math.floor(Math.random() * (range.max - range.min)) + range.min
        words.push(num)
      }

      // the operator
      if (i !== length - 1) {
        const operator = randomChoose(operators)
        words.push(operator)
      }
    }

    if (!hasParenthese) {
      words.push('=')
      words.push('x')
    } else {
      words.push('=')
      const result = Math.floor(Math.random() * (range.result.max - range.result.min)) + range.result.min
      words.push(result)
    }

    log('words', words)

    // validate the result
    const x = resolve(words)
    log('x = ', x)

    if (x == null) {
      continue
    }

    if (x.indexOf('/') !== -1) {
      // x is a fraction
      log(x, 'is a fraction')
      continue
    }

    const f = parseFloat(x)
    if (isNaN(f)) {
      log(f, 'is not a number')
      continue
    }

    if (f > range.result.max || x < range.result.min) {
      log('result is not in range')
      continue
    }

    return stringify(words, parenthese, blank)
  }
}

export default generateEquation
