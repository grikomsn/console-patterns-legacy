function Grid(n,hspacing,vspacing) {
  let out = ''
  
  if (hspacing === undefined) { hspacing = 2 }
  if (vspacing === undefined) { vspacing = 2 }
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const v = i < n && i % vspacing == 0
      const h = j < n && j % hspacing == 0
      const clause = v && h
      out += clause ? '* ' : '  '
    }
    out += '\n'
  }
  return out
}

Grid.title = 'Grid - Customizable'

Grid.source = `
function Grid(n,hspacing,vspacing) {
  let out = ''
  
  if (hspacing === undefined) { hspacing = 2 }
  if (vspacing === undefined) { vspacing = 2 }
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const v = i < n && i % vspacing == 0
      const h = j < n && j % hspacing == 0
      const clause = v && h
      out += clause ? '* ' : '  '
    }
    out += '\\n'
  }
  return out
}`

export default Grid
