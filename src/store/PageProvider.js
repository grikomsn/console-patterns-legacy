import React, { createContext, useState } from 'react'

const MODIFIER_LIMIT = 3

export const context = createContext({
  MODIFIER_LIMIT,
  modifier: 5,
  changeModifier: () => {},
})

const PageProvider = ({ children }) => {
  const [modifier, setModifier] = useState(5)

  function changeModifier(m) {
    setModifier(m)
  }

  return (
    <context.Provider
      value={{ MODIFIER_LIMIT, modifier, changeModifier }}
      children={children}
    />
  )
}

export default PageProvider
