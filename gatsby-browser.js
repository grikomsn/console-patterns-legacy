import React from 'react'

import PageProvider from './src/store/PageProvider'

// https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <PageProvider>{element}</PageProvider>
}
