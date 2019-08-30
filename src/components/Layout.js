import '../stylesheets/style.css'
import 'tachyons/css/tachyons.min.css'

import React from 'react'
import styled from 'styled-components'

import { Footer } from '.'
import Head from './Head'

const Gradient = styled.div`
  /* fallback for old browsers */
  background: #c9d6ff;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff);

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
`

const Main = styled.main`
  ${props => props.grow && 'flex-grow: 1;'}
`

const Layout = ({ ...props }) => (
  <Gradient>
    <Head />
    <div className="center dark-gray flex flex-column justify-between min-vh-100 mw8 pa4 sans-serif">
      <Main {...props} />
      <Footer />
    </div>
  </Gradient>
)

export default Layout
