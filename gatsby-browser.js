import React from 'react'

import PageProvider from './src/store/PageProvider'

/** @param {import('gatsby').WrapPageElementBrowserArgs} args */
export function wrapRootElement({ element }) {
  return <PageProvider>{element}</PageProvider>
}
