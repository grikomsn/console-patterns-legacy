function TriangleHollowD(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const clause = j === n - i - 1 || i === n - 1 || j === n - 1
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

TriangleHollowD.title = 'Triangle D'

TriangleHollowD.source = `
function TriangleHollowD(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const clause = j === n - i - 1 || i === n - 1 || j === n - 1
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}
`

export default TriangleHollowD
