function TriangleHollowB(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const clause = i === j || i === 0 || j === n - 1
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

TriangleHollowB.title = 'Triangle Hollow B'

TriangleHollowB.source = `
function TriangleHollowB(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const clause = i === j || i === 0 || j === n - 1
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}
`

export default TriangleHollowB
