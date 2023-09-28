import React from 'react'
import { useContext, useEffect } from 'react'

import { Context } from '/Studying-React/organization/components/PostsProvider/PostsContext/index.jsx'
import { loadPosts } from '/Studying-React/organization/components/PostsProvider/LoadPosts/index.jsx'

export const Posts = () => {
  const theContext = useContext(Context)
  const { postsState, postsDispatch } = theContext
  
  useEffect(() => {
    loadPosts(postsDispatch)
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