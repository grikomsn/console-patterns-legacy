function TriangleD(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      out += j >= n - i - 1 ? '*' : ' '
    }
    out += '\n'
  }
  return out
}

TriangleD.title = 'Triangle D'

TriangleD.source = `
function TriangleD(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      out += j >= n - i ? '*' : ' '
    }
    out += '\\n'
  }
  return out
}
`

export default TriangleD
