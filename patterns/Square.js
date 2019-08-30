function Square(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const topAndBottom = i === 0 || i === n - 1
      const leftAndRight = j === 0 || j === n - 1

      const clause = topAndBottom || leftAndRight
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

Square.title = 'Square'

Square.source = `
function Square(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const topAndBottom = i === 0 || i === n - 1
      const leftAndRight = j === 0 || j === n - 1

      const clause = topAndBottom || leftAndRight
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}
`

export default Square
