function HourglassEmptyVertical(n) {  
  let out = ''
  
  for (let i = 0; i < 2 * n - 1; i++) {
    let k = i
    if (i>=n) {k = 2 * n - i - 2 }
    
    for (let j = 0; j < 2 * n - 1; j++) {
      const edge = k===0
      const diagonal1 = j === k
      const diagonal2 = j === 2 * n - k - 2
      
      const clause = edge || diagonal1 || diagonal2
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

HourglassEmptyVertical.title = 'Hourglass - Vertical - Empty'

HourglassEmptyVertical.source = `
function HourglassEmptyVertical(n) {  
  let out = ''
  
  for (let i = 0; i < 2*n-1; i++) {
    let k = i
    if (i>=n){ {k = 2*n-i-2}
    
    for (let j = 0; j < 2*n-1; j++) {
      const edge = k===0
      const diagonal1 = j === k
      const diagonal2 = j === 2*n-k-2
      
      const clause = edge || diagonal1 || diagonal2
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}`

export default HourglassEmptyVertical
