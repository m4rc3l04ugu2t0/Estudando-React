import React from 'react'
import ReactDOM from 'react-dom'
import { useState, lazy, Suspense } from 'react'

const loadComponent = () => import('/Studying-React/React.lazy-Suspense/lazy-component/index.jsx')

const Lazy = lazy(loadComponent)

const App = () => {
  const [show, setShow] = useState(false)
  
  return (
    <div> 
      <p>{ show ? 'LC on screen' : 'LC is off'}</p>
      <button onMouseOver={ loadComponent } onClick={ () => setShow(prevState => !prevState) }>Show</button>
      <Suspense fallback={<p>Loading...</p>}>
        { show && <Lazy /> }
      </Suspense>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-app')
)