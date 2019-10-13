function ArrowUpFilled(n) {
  let out = ''

  for (let i = 0; i < 2*n-1; i++) {
    let k = i
    if (i>=n) {k = n-i}
    
    for (let j = 0; j < 2*n-1; j++) {
      const verticalCenter = j===n-1
      const clause = (j>=n-k-1  && j<=n+k-1) || verticalCenter
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

ArrowUpFilled.title = 'Up Arrow - Filled'

ArrowUpFilled.source = `
function ArrowUpFilled(n) {
  let out = ''

  for (let i = 0; i < 2*n-1; i++) {
    let k = i
    if i>=n {k = n-i}

    
    for (let j = 0; j < 2*n-1; j++) {
      const verticalCenter = j===n-1
      const clause = (j>=n-k-1  && j<=n+k-1) || verticalCenter
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}`


export default ArrowUpFilled
