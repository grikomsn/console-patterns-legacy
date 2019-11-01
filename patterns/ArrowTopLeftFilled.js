function ArrowTopLeftFilled(n) {
  let out = ''
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const diagonal = i === j
      const arrowhead = i < n - j
      const clause = diagonal || arrowhead
      out += clause ? '* ' : '  '      
    }
    out += '\n'
  }
  return out
}

ArrowTopLeftFilled.title = 'Top Left Arrow - Filled'

ArrowTopLeftFilled.source = `
function ArrowTopLeftFilled(n) {
  let out = ''
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const diagonal = i === j
      const arrowhead = i < n - j
      const clause = diagonal || arrowhead
      out += clause ? '* ' : '  '      
    }
    out += '\\n'
  }
  return out
}
`

export default ArrowTopLeftFilled
