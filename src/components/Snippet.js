import { toClipboard } from 'copee'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import * as React from 'react'
import styled from 'styled-components'

import { AppContext } from '../store/PageProvider'

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

const Btn = styled.button.attrs({
  className: 'bn br2 dim f7 pa2 pointer',
  type: 'button',
})``

const Snippet = ({ pattern }) => {
  const { modifier, changeModifier, MODIFIER_LIMIT } = React.useContext(
    AppContext,
  )

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

  const [copiedState, setCopiedState] = React.useState(false)
  const copy = () => {
    setCopiedState(toClipboard(code))
    setTimeout(() => setCopiedState(false), 1000)
  }

  const decrease = () => {
    if (modifier > MODIFIER_LIMIT) {
      changeModifier(modifier - 1)
    }
  }
  const increase = () => changeModifier(modifier + 1)
  const disabled = !(modifier > MODIFIER_LIMIT)

  const computedPattern = React.useMemo(() => pattern(modifier), [modifier])

  return (
    <div className="pa2 w-50-l w-100">
      <Wrapper className="br2 pa4 silver">
        <div className="flex items-center">
          <span className="flex-grow-1">{pattern.title}</span>
          <span className="near-white">n = {modifier}</span>

          <Btn className="b ml2 w2" onClick={decrease} disabled={disabled}>
            -
          </Btn>
          <Btn className="b ml2 w2" onClick={increase}>
            +
          </Btn>
        </div>

        <h5 className="mb0">Result</h5>
        <pre className="mb4 near-white overflow-scroll">{computedPattern}</pre>

        <h5 className="mb0">Snippet</h5>
        <div className="overflow-scroll">
          <Highlight {...props} language="javascript" />
        </div>

        <Btn className="w-100" onClick={copy}>
          {copiedState ? 'Copied to clipboard!' : 'Copy snippet'}
        </Btn>
      </Wrapper>
    </div>
  )
}

export default Snippet
