function Asterisk(n) {
  let out = ''

  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      const horizontalCenter = i === n - 1
      const verticalCenter = j === n - 1
      const diagonal1 = j === i
      const diagonal2 = j === 2 * n - i - 2
      const clause =
        verticalCenter || diagonal1 || diagonal2 || horizontalCenter
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

Asterisk.title = 'Asterisk'

Asterisk.source = `
function Asterisk(n) {
  let out = ''

  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      const horizontalCenter = i === n - 1
      const verticalCenter = j === n - 1
      const diagonal1 = j === i
      const diagonal2 = j === 2 * n - i - 2
      const clause =
        verticalCenter || diagonal1 || diagonal2 || horizontalCenter
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}
`

export default Asterisk
