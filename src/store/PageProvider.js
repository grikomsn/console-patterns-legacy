import React, { createContext, useState } from 'react'

export const context = createContext({
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
      value={{ modifier, changeModifier }}
      children={children}
    />
  )
}

export default PageProvider
