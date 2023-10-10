import React from 'react'
import ReactDOM from 'react-dom'
import { Children, cloneElement, useState } from 'react'

const stylesheet = {
  style: {
    fontSize: '50px'
  }
}

const TurnOnOff = ({ children }) => {
  const [ isOn, setIsOn ] = useState(false)
  const onTurn = () => setIsOn(prevState => !prevState)
  
  return Children.map(children, child => {
    const newChild = cloneElement(child, {
      isOn, onTurn
    })
    return newChild
  })
}

const TurnedOn = ({ isOn, children }) => {
  return isOn ? children : null
}

const TurnedOff = ({ isOn, children }) => {
  return isOn ? null : children
}

const TurnButton = ({ isOn, onTurn, ...props }) => {
  console.log(props)
  return <button onClick={ onTurn } { ...props }>Turn { isOn ? 'OFF' : 'ON' }</button>
}

const P = ({ children }) => <p { ...stylesheet }>{ children }</p>

const App = () => {
  return (
    <TurnOnOff>
      <TurnedOn>
        <P>Component in operation</P>
      </TurnedOn>
      <TurnedOff>
        <P>Component not working</P>
      </TurnedOff>
      <TurnButton { ...stylesheet }/>
    </TurnOnOff>  
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-app')
)