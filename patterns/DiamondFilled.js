function DiamondFilled(n) {
  let out = ''
  for (let i = 0; i < 2 * n - 1; i++) {
    let k = i
    if ( i >= n ) { k = 2 * n - i - 2 }

    for (let j = 0; j < 2 * n - 1; j++) {
      const clause = ( j >= n - k - 1  && j <= n + k - 1 )
      out += clause ? '* ' : '  '      
    }
    out += '\n'
  }
  return out
}


DiamondFilled.title = 'Diamond Filled'


DiamondFilled.source = `
function DiamondFilled(n) {
  let out = ''
  for (let i = 0; i < 2 * n - 1; i++) {
    
    if ( i < n ) { k = i }
    else { k = 2 * n - i - 2 }

    for (let j = 0; j < 2 * n - 1; j++) {
      const clause = ( j >= n - k - 1  && j <= n + k - 1 )
      out += clause ? '* ' : '  '      
    }
    out += '\\n'
  }
  return out
}
`
export default DiamondFilled
