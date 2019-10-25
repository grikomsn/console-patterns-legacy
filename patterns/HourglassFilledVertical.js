function HourglassFilledVertical(n) {  
  let out = ''
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const diag1 = i === j
      const diag2 = j === n - i - 1
      const fillTopHalf = i < j && j < n - i - 1
      const fillBottomHalf = i > j && j > n - i - 1
      const top = i === 0
      const bottom = i === n-1
      const clause = diag1 || diag2 || bottom || top || fillTopHalf || fillBottomHalf
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

HourglassFilledVertical.title = 'Hourglass - Vertical - Filled'

HourglassFilledVertical.source = `
function HourglassFilledVertical(n) {  
  let out = ''
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const diag1 = i === j
      const diag2 = j === n - i - 1
      const fillTopHalf = i < j && j < n - i - 1
      const fillBottomHalf = i > j && j > n - i - 1
      const top = i === 0
      const bottom = i === n-1
      const clause = diag1 || diag2 || bottom || top || fillTopHalf || fillBottomHalf
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}`

export default HourglassFilledVertical
