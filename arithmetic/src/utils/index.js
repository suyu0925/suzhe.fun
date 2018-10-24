export function randrange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

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
