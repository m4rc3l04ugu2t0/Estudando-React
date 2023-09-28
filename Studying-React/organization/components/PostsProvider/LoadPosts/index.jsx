import React from 'react'

import { typeActions } from '/Studying-React/organization/components/PostsProvider/typeActions/index.jsx'

export const loadPosts = async (dispatch) => {
  dispatch({ type: typeActions.LOADING_POSTS })
  
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await postsRaw.json()
  
  return () => dispatch({ type: typeActions.POSTS_LOADED, payload: posts })
}