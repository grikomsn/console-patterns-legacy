import React from 'react'

import * as patterns from '../../patterns'
import Snippet from './Snippet'

const Patterns = () => (
  <div className="flex justify-start flex-wrap">
    {Object.values(patterns).map((p, idx) => (
      <Snippet key={idx} pattern={p} />
    ))}
  </div>
)

export default Patterns
