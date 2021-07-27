const StringA = 'anita lava'
const StringB = 'lava anita'

const Objects = [{},{}]

const buildObject = (text, position) => {
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== ' ') {
      if (Objects[position][text[index]] !== undefined) {
        Objects[position][text[index]]++
      } else {
        Objects[position][text[index]] = 1
      }
    }
  }
}

const compareArrays = () => {
  let value = true
  for (const Property in Objects[0]) {
    if (Objects[1][Property] === undefined) {
      value = false
    } else if (Objects[1][Property] !== Objects[0][Property]) {
      value = false
    }
  }
  if (value) {
    for (const Property in Objects[1]) {
      if (Objects[0][Property] === undefined) {
        value = false
      } else if (Objects[0][Property] !== Objects[1][Property]) {
          value = false
      }
    }
  }
  return value
}

buildObject(StringA, 0)
buildObject(StringB, 1)
console.log(compareArrays())