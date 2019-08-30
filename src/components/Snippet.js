import { toClipboard } from 'copee'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import { context } from '../store/PageProvider'

const Wrapper = styled.div`
  background-color: rgb(1, 22, 39);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: initial;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
    transform: translate(0, -2px);
  }
`

const Snippet = ({ pattern }) => {
  const { modifier } = useContext(context)

  const children = ({
    className,
    style,
    tokens,
    getLineProps,
    getTokenProps,
  }) => (
    <pre className={className} style={style}>
      {tokens.map((line, i) => (
        <div {...getLineProps({ line, key: i })}>
          {line.map((token, key) => (
            <span {...getTokenProps({ token, key })} />
          ))}
        </div>
      ))}
    </pre>
  )

  const code = pattern.source.trim()
  const props = { ...defaultProps, code, theme, children }

  const [copiedState, setCopiedState] = useState(false)
  const copy = () => {
    setCopiedState(toClipboard(code))
    setTimeout(() => setCopiedState(false), 1000)
  }

  return (
    <div className="fl pa2 w-50-l w-100">
      <Wrapper className="br2 hide-child pa4 silver">
        <h5 className="mv0">Snippet</h5>
        <Highlight {...props} language="javascript" />
        <h5 className="mb0">Result</h5>
        <pre className="near-white">{pattern(modifier)}</pre>
        <button
          type="button"
          className="bn br2 child dim f7 pa2 pointer w-100"
          onClick={copy}
          children={copiedState ? 'Copied to clipboard!' : 'Copy snippet'}
        />
      </Wrapper>
    </div>
  )
}

export default Snippet
