import * as React from 'react'

import A from './ExtLink'

const Footer = () => (
  <footer className="f7 dark-gray lh-copy mt4 tc">
    <p>
      Made with <A href="https://tachyons.io" children="Tachyons" />
      {' and '}
      <A href="https://gatsbyjs.org" children="Gatsby.js" />. Hosted on{' '}
      <A href="https://zeit.co/now" children="ZEIT Now" />.
      <br />
      Source code licensed under the{' '}
      <A
        href="https://github.com/grikomsn/console-patterns"
        children="MIT License"
      />
      .
    </p>
  </footer>
)

export default Footer
