import React from 'react'
import ReactDOM from 'react-dom'
import P from 'prop-type'

import { AppContext } from '/Estudando-React/useContext-e-useReducer/src/AppContext/index.jsx'
import { Header } from '/Estudando-React/useContext-e-useReducer/components/Header/index.jsx'
import { Baseboard } from '/Estudando-React/useContext-e-useReducer/components/Baseboard/index.jsx'
import { Content } from '/Estudando-React/useContext-e-useReducer/components/Content/index.jsx'

AppContext.proType = {
  children: P.node
}

export const App = () => {
  return (
    <div>
      <AppContext>
        <Header />
        <Content />
        <Baseboard />
      </AppContext>
    </div>
  )
}

ReactDOM.render (
  <App />,
  document.getElementById('react-app')
)