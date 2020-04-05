import * as React from 'react'

const MODIFIER_LIMIT = 3

export const AppContext = React.createContext({
  MODIFIER_LIMIT,
  modifier: 5,
  changeModifier: () => {},
})

const PageProvider = ({ children }) => {
  const [modifier, setModifier] = React.useState(5)

  function changeModifier(m) {
    setModifier(m)
  }

  return (
    <AppContext.Provider
      value={{ MODIFIER_LIMIT, modifier, changeModifier }}
      children={children}
    />
  )
}

export default PageProvider
