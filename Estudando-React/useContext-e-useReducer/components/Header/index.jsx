import React from 'react'

import { useContext } from 'react'

import { Context } from '/Estudando-React/useContext-e-useReducer/src/AppContext/index.jsx'
import { actions } from '/Estudando-React/useContext-e-useReducer/actions/index.jsx'

export const Header = () => {
  const theContext = useContext(Context)
  const { state: { header } } = theContext
  
  return (
    <header>
      <h1
        onClick={() => theContext.dispatch(
        { type: actions.CHANGE_TITLE}
        )} >
        { header }
      </h1>
    </header>
  )
}