import { graphql } from 'gatsby'
import * as React from 'react'

import { ExtLink as A, Layout, Patterns } from '../components'

const Index = ({ data }) => {
  const { siteTitle, siteDescription } = data.site.siteMetadata

  return (
    <Layout className="tc">
      <h1 className="b f1-l f2 mv0 tracked-tight">{siteTitle}</h1>
      <p className="f3-l f4 i tracked-tight">{siteDescription}</p>

      <p className="mv4">
        You are viewing the legacy version. Visit the latest version on{' '}
        <A href="https://console-patterns.now.sh">console-patterns.now.sh</A>.
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
