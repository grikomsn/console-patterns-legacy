function ArrowBottomRightFilled(n) {
  let out = ''
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const diagonal = i===j
      const arrowhead = i>n-j-2
      const clause = diagonal || arrowhead
      out += clause ? '* ' : '  '      
    }
    out += '\n'
  }
  return out
}

ArrowBottomRightFilled.title = 'Arrow - Bottom Right - Filled'

ArrowBottomRightFilled.source = `
function ArrowBottomRightFilled(n) {
  let out = ''
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const diagonal = i===j
      const arrowhead = i>n-j-2
      const clause = diagonal || arrowhead
      out += clause ? '* ' : '  '      
    }
    out += '\\n'
  }
  return out
}`

export default ArrowBottomRightFilled
