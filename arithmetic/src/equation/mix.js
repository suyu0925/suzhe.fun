import { randrange } from '@/utils'

function mix_add_sub(max) {
  let a, b, c
  a = randrange(1, max)
  b = randrange(1, max)
  do {
    c = randrange(1, max)
  } while (c > a + b)
  return `${a}+${b}-${c}=`
}

function mix_sub_add(max) {
  let a, b, c
  a = randrange(2, max)
  do {
    b = randrange(1, max)
  } while (b > a)
  c = randrange(1, max)
  return `${a}-${b}+${c}=`
}

function mix(max) {
  let r = Math.random()
  if (r < 0.5) {
    return mix_add_sub(max)
  } else {
    return mix_sub_add(max)
  }
}

export default mix
