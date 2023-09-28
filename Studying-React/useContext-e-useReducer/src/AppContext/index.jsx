import React from 'react'

import { createContext, useReducer } from 'react'

import { globalState } from '/Studying-React/useContext-e-useReducer/globalState/index.jsx'

export const Context = createContext()

const reducer = (state, action) => {
  const { header, body, footer } = state
  
  switch(action.type) {
    case 'CHANGE_TITLE': {
      return { ...state, header: 'title changed'}
    }
    
    case 'CHANGE_VALUE_CONTENT': {
      return { ...state }
    }
  }
  
  return { ...state }
}

export const AppContext = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, globalState)
  
  return (
    <Context.Provider value={{ state, dispatch }}>
      { children }
    </Context.Provider>
  )
}