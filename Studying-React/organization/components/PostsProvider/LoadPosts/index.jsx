import React from 'react'

import { typeActions } from '/Studying-React/organization/components/PostsProvider/typeActions/index.jsx'

export const loadPosts = async (dispatch) => {
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await postsRaw.json()
  dispatch({ type: typeActions.POSTS_LOADED, payload: posts })
}