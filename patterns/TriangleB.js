function TriangleB(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      out += j >= i ? '*' : ' '
    }
    out += '\n'
  }
  return out
}

TriangleB.title = 'Triangle B'

TriangleB.source = `
function TriangleB(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      out += j >= i ? '*' : ' '
    }
    out += '\\n'
  }
  return out
}
`

export default TriangleB
