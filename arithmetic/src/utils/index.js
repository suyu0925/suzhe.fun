/**
 * rand a integer in range [min, max)
 * @param {*} min 
 * @param {*} max 
 */
export function randrange(min, max, step) {
  if (step === undefined) {
    return Math.floor(Math.random() * (max - min)) + min
  } else {
    max = Math.floor(max / step)
    min = Math.ceil(min / step)
    const grade = Math.floor(Math.random() * (max - min)) + min
    return grade * step
  }
}

export function randchoose(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * left pad char on str, make sure the length of new str is parameter length
 * @param {*} str 
 * @param {*} length 
 * @param {*} char 
 */
export function leftpad(str, length, char) {
  const n = length - str.length
  for (let i = 0; i < n; i++) {
    str = (char || ' ') + str
  }
  return str
}

export function log() {
  // console.log.apply(console, arguments)
}
