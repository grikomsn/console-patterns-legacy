function HourglassEmptyVertical(n) {  
  let out = ''
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      diag1 = i === j
      diag2 = j === n - i - 1
      bottom = i === n - 1
      const clause = diag1 || diag2 || bottom || i === 0
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
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      diag1 = i === j
      diag2 = j === n - i - 1
      bottom = i === n - 1
      const clause = diag1 || diag2 || bottom || i === 0
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}`

export default HourglassEmptyVertical
