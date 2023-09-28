import React from 'react'
import { useContext } from 'react'

import { actions } from '/Studying-React/useContext-e-useReducer/actions/index.jsx'
import { Context } from '/Studying-React/useContext-e-useReducer/src/AppContext/index.jsx'

export const InputAddValue = () => {
  const theContext = useContext(Context)

  const handleValueInput = (e) => {
    theContext.state.body = e.target.value
  }
  
  return (
    <div>
      <input 
        type="text"
        placeholder="click on the 'content' after typing"
        onChange={ handleValueInput }
      />
    </div>
  )
}