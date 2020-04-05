function CheckeredFlag(n, hspacing, vspacing) {
  let out = ''

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const even = i % 2 === 0 && j % 2 === 0
      const odd = i % 2 !== 0 && j % 2 !== 0
      const clause = even || odd
      out += clause ? '█ ' : '  '
    }
    out += '\n'
  }
  return out
}

CheckeredFlag.title = 'Checkered Flag'

CheckeredFlag.source = `
function CheckeredFlag(n, hspacing, vspacing) {
  let out = ''

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const even = i % 2 === 0 && j % 2 === 0
      const odd = i % 2 !== 0 && j % 2 !== 0
      const clause = even || odd
      out += clause ? '█ ' : '  '
    }
    out += '\\n'
  }
  return out
}
`

export default CheckeredFlag
