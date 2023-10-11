import React from 'react'
import ReactDOM from 'react-dom'
import { Children, cloneElement, useState, useContext,  createContext } from 'react'

const stylesheet = {
  style: {
    fontSize: '50px'
  }
}

const TurnOnOffContext = createContext()

const TurnOnOff = ({ children }) => {
  const [ isOn, setIsOn ] = useState(false)
  const onTurn = () => setIsOn(prevState => !prevState)
  
  return <TurnOnOffContext.Provider value={{ isOn, onTurn }}>{ children }</TurnOnOffContext.Provider>
}

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext)
  return isOn ? children : null
}

const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext)
  return isOn ? null : children
}

const TurnButton = ({ ...props }) => {
   const { isOn, onTurn } = useContext(TurnOnOffContext)
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