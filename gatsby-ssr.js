import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import PageProvider from './src/store/PageProvider'

/** @param {import('gatsby').ReplaceRendererArgs} args */
export function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) {
  const ConnectedBody = () => <PageProvider>{bodyComponent}</PageProvider>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))

  const sheet = new ServerStyleSheet()
  const styleElement = sheet.getStyleElement()
  setHeadComponents(styleElement)
}
