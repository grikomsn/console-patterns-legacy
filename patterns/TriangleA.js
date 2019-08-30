function TriangleA(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      out += '* '
    }
    out += '\n'
  }
  return out
}

TriangleA.title = 'Triangle A'

TriangleA.source = `
function TriangleA(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      out += '* '
    }
    out += '\\n'
  }
  return out
}
`

export default TriangleA
