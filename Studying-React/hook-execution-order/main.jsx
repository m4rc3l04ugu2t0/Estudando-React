import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'

const ReactHooks = () => {
  console.log(`%cCHILD RENDER STARTING...`, `color: green`)
  
  const [ state1, setSatet1 ] = useState(() => {
    const state = new Date().toLocaleDateString()
    console.log(`%cState lazy initializer - (useState + InitialValue) = ` + state, `color: green`)
    return state
  })
  const renders = useRef(0)
  
  useEffect(() => {
    const listener = () => console.log('listener...')
    console.log(`%cuseEffect -> Empty dependecies`, `color: #dbc70f`)
    
    return () => {
      console.log(`%cuseEffect (Cleanup) -> Empty dependecies`, `color: #dbc70f`)
    }
  }, [])
  
  useEffect(() => {
    console.log(`%cuseEffect -> No Dependencies`, `color: #dbc70f`)
    renders.current += 1
    
    return () => {
      console.log(`%cuseEffect (Cleanup) -> No Dependencies`, `color: #dbc70f`)
    }
  })
  
  useLayoutEffect(() => {
    console.log(`%cuseLayoutEffect`, `color: #c61a4d`)
    
    return () => {
      console.log(`%cuseLayoutEffect (Cleanup)`, `color: #c61a4d`)
    }
  })
  
  useEffect(() => {
    console.log(`%cuseEffect (UPDATE STATE` + state1, `color: #dbc70f`)
  }, [state1]) 
  
  console.log(`%cCHILD RENDER` + renders.current + ` ENDING...`, `color: green`)
  
  return (
    <div onClick={ () => setSatet1( new Date().toLocaleDateString('pt-br'))} style={{ fontSize: '50px'}}>
      state: { state1 }
    </div>
  )
}

const App = () => {
  const renders = useRef(0)
  
  useEffect(() => {
    renders.current += 1
  })
  
  console.log(`%cPARENT RENDER ${ renders.current } STARTING...`, `color: green`)
  const [ show, setShow ] = useState(false)
  console.log(`%cState Initializer - (State + InitialValue) = ` + show, `color: green`)
  console.log(`%cPARENT RENDER ${ renders.current } ENDING...`, `color: green`)
  
  return (
    <div>
      <p style={{ fontSize: '50px' }} onClick={ () => setShow(prevState => !prevState )}>
        Show Hooks
      </p>
      { show && <ReactHooks /> }
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-app')
)