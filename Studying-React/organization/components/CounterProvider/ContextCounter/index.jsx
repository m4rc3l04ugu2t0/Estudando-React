import React from 'react'
import { createContext, useReducer } from 'react'

import { reducer } from '/Studying-React/organization/components/CounterProvider/reducer/index.jsx'
import { counterData } from '/Studying-React/organization/components/CounterProvider/counterData/index.jsx'

export const TheContextCounter = createContext()

export const ContextCounter = ({ children }) => {
  const [ stateCounter , setStateCounter ] = useReducer(reducer, counterData )
  
  return (
    <TheContextCounter.Provider value={{ stateCounter, setStateCounter }} >
      { children }
    </TheContextCounter.Provider>
  )
}