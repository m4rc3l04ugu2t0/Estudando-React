import React from 'react'
import { createContext, useReducer } from 'react'

import { reducer } from '/Studying-React/organization/components/PostsProvider/reducer/index.jsx'
import { dataPosts } from '/Studying-React/organization/components/PostsProvider/dataPosts.jsx/index.jsx'

export const Context = createContext()

export const PostsContext = ({ children }) => {
  const [ postsState, postsDispatch ] = useReducer(reducer, dataPosts)
  
  return (
    <Context.Provider value={{ postsState, postsDispatch }}>
      { children }
    </Context.Provider>
  )
}