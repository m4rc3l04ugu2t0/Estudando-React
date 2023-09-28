import React from 'react'
import { useContext } from 'react'

import { actions } from '/Studying-React/useContext-e-useReducer/actions/index.jsx'
import { Context } from '/Studying-React/useContext-e-useReducer/src/AppContext/index.jsx'
import { InputAddValue } from '/Studying-React/useContext-e-useReducer/components/InputAddValue/index.jsx'

export const Content = () => {
  const theContext = useContext(Context)
  const { state: { body } } = theContext
  
  const handleClickP = (e) => {
    theContext.dispatch({ type: actions.CHANGE_VALUE_CONTENT })
  }
  
  return (
    <main>
      <InputAddValue />
      <p onClick={ handleClickP } >
        { body }
      </p>
    </main>
  )
}