function Cross(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const clause = i === j || j === n - i - 1
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

Cross.title = 'Cross'

Cross.source = `
function Cross(n) {
  let out = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const clause = i === j || j === n - i - 1
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}
`

export default Cross
