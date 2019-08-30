import { graphql } from 'gatsby'
import React from 'react'

import * as patterns from '../../patterns'
import { ExtLink as A, Layout, Snippet } from '../components'

const Patterns = () => (
  <div>
    {Object.values(patterns).map((p, idx) => (
      <Snippet key={idx} pattern={p} />
    ))}
  </div>
)

const Index = ({ data }) => {
  const { siteTitle, siteDescription } = data.site.siteMetadata

  return (
    <Layout className="tc">
      <h1 className="b f1-l f2 mv0 tracked-tight">{siteTitle}</h1>
      <p className="f3-l f4 i tracked-tight">{siteDescription}</p>

      <p className="mv4">
        Request new patterns or find some bugs?{' '}
        <A href="https://github.com/grikomsn/console-patterns/issues">
          Submit an issue on GitHub
        </A>
        .
      </p>

      <Patterns />
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
