function TriangleHollowA(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      const clause = i === j || i === n - 1 || j === 0
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

TriangleHollowA.title = 'Triangle Hollow A'

TriangleHollowA.source = `
function TriangleHollowA(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      const clause = i === j || i === n - 1 || j === 0
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}
`

export default TriangleHollowA
