function TriangleHollowC(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      const clause = j === n - i - 1 || i === 0 || j === 0
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

TriangleHollowC.title = 'Triangle Hollow C'

TriangleHollowC.source = `
function TriangleHollowC(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      const clause = j === n - i - 1 || i === 0 || j === 0
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}
`

export default TriangleHollowC
