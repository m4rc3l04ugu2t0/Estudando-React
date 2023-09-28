import React from 'react'
import { useContext } from 'react'

import { PostsContext } from '/Studying-React/organization/components/PostsProvider/PostsContext/index.jsx'
import { Posts } from '/Studying-React/organization/components/PostsProvider/Posts/index.jsx'

export const App = () => {
  
  return (
    <div>
      <PostsContext>
        <Posts />
      </PostsContext>
    </div>  
  )
}