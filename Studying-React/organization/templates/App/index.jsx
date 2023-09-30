import React from 'react'
import { useContext } from 'react'

import { PostsContext } from '/Studying-React/organization/components/PostsProvider/PostsContext/index.jsx'
import { ContextCounter } from '/Studying-React/organization/components/CounterProvider/ContextCounter/index.jsx'
import { Posts } from '/Studying-React/organization/components/PostsProvider/Posts/index.jsx'

export const App = () => {
  
  return (
    <div>
      <ContextCounter>
        <PostsContext>
          <Posts />
        </PostsContext>
      </ContextCounter>
    </div>  
  )
}