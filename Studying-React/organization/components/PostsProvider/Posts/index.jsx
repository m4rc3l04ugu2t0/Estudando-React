import React from 'react'
import { useContext, useEffect, useRef } from 'react'

import { Context } from '/Studying-React/organization/components/PostsProvider/PostsContext/index.jsx'
import { loadPosts } from '/Studying-React/organization/components/PostsProvider/LoadPosts/index.jsx'

export const Posts = () => {
  const theContext = useContext(Context)
  const isMounted = useRef(true)
  const { postsState, postsDispatch } = theContext
  
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