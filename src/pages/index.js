import { graphql } from 'gatsby'
import React, { useContext } from 'react'

import * as patterns from '../../patterns'
import { Layout, Snippet } from '../components'
import { context } from '../store/PageProvider'

const Index = ({ data }) => {
  const { modifier, changeModifier } = useContext(context)
  const { siteTitle, siteDescription } = data.site.siteMetadata

  return (
    <Layout className="tc">
      <h1 className="b f1-l f2 mv0 tracked-tight">{siteTitle}</h1>
      <p className="f3-l f4 i">{siteDescription}</p>

      <div className="mb4">
        <span>Set modifer (1-30): </span>
        <input
          className="bn br2 pa2 w-10"
          type="number"
          name="modifier"
          value={modifier}
          min={1}
          max={30}
          onChange={e => {
            changeModifier(e.target.value)
          }}
        />
      </div>

      <div>
        {Object.values(patterns).map((p, idx) => (
          <Snippet key={idx} pattern={p} />
        ))}
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle
        siteDescription
      }
    }
  }
`
