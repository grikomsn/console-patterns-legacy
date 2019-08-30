function TriangleC(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      out += '*'
    }
    out += '\n'
  }
  return out
}

TriangleC.title = 'Triangle C'

TriangleC.source = `
function TriangleC(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      out += '*'
    }
    out += '\\n'
  }
  return out
}
`

export default TriangleC
