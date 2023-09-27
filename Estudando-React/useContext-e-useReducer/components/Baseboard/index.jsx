import React from 'react'
import { useContext } from 'react'

import { actions } from '/Estudando-React/useContext-e-useReducer/actions/index.jsx'
import { Context } from '/Estudando-React/useContext-e-useReducer/src/AppContext/index.jsx'

export const Baseboard = () => {
  const theContext = useContext(Context)
  const { state: { footer } } = theContext
  
  return (
    <footer>
      <p>&copy; { footer }</p>
    </footer>
  )
}