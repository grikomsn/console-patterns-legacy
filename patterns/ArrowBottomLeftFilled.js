function ArrowBottomLeftFilled(n) {
  let out = ''
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const diagonal = i===n-j-1
      const arrowhead = j<i+1
      const clause = diagonal || arrowhead
      out += clause ? '* ' : '  '      
    }
    out += '\n'
  }
  return out
}

ArrowBottomLeftFilled.title = 'Arrow - Bottom Left - Filled'

ArrowBottomLeftFilled.source = `
function ArrowBottomLeftFilled(n) {
  let out = ''
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const diagonal = i===n-j-1
      const arrowhead = j<i+1
      const clause = diagonal || arrowhead
      out += clause ? '* ' : '  '      
    }
    out += '\\n'
  }
  return out
}`

export default ArrowBottomLeftFilled
