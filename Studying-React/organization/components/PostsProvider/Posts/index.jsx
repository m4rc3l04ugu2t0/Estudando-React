import React from 'react'
import { useContext, useEffect, useRef } from 'react'

import { Context } from '/Studying-React/organization/components/PostsProvider/PostsContext/index.jsx'
import { TheContextCounter } from '/Studying-React/organization/components/CounterProvider/ContextCounter/index.jsx'

import { loadPosts } from '/Studying-React/organization/components/PostsProvider/LoadPosts/index.jsx'

import { incrementCounter,  decrementCounter } from '/Studying-React/organization/components/CounterProvider/actions/index.jsx'

export const Posts = () => {
  const theContext = useContext(Context)
  const isMounted = useRef(true)
  const { postsState, postsDispatch } = theContext
  
  const contextCounter = useContext(TheContextCounter)
  const { stateCounter,  setStateCounter } = contextCounter
  
  useEffect(() => {
    loadPosts(postsDispatch).then(dispatch => {
      if (isMounted.current) {
        dispatch()
      }
    })
    
    return () => {
      isMounted.current = false
    }
  }, [postsDispatch])
  
  return (
    <div>
      <h1>Posts</h1>
      
      <button onClick={ () => incrementCounter(setStateCounter) }>
      +{ stateCounter.counter }</button>
      
      <button onClick={ () => decrementCounter(setStateCounter) }>
      -{ stateCounter.counter }</button>
      
      { postsState.loading &&
      <p><strong>Carregando posts...</strong></p> }
      
      { postsState.posts.map(post => {
        return (
          <div key={ post.id }>
            <h2>{ post.title }</h2>
            <p>{ post.body }</p>
          </div>
        )
      })}
    </div>  
  )
}