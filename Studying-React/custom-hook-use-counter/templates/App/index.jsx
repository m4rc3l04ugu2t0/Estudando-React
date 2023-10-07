import React from 'react'
import { useEffect, useState, useRef } from 'react'

const useMyHook = (funcCallBlack, delay = 1000) => {
  const savedFuncCallBack = useRef()
  
  useEffect(() => {
    savedFuncCallBack.current = funcCallBlack
  }, [funcCallBlack])
  
  useEffect(() => {
    const interval = setInterval(() => {
      savedFuncCallBack.current()
    }, delay)
    
    return () => {
      clearInterval(interval)
    }
  }, [delay])
}

export const App = () => {
  const [ counter, setCounter ] = useState(0)
  const [ delay, setDelay ] = useState(1000)
  const [ incrementor, setIncrementor ] = useState(100)
  
  useMyHook(() => setCounter(prevState => prevState + 1), delay)
  
  return (
    <div>
      <p>counter: { counter }</p>
      <p>delay: { delay }</p>
      
      <button onClick={ () => {
        setDelay(prevState => prevState + incrementor)
      }}>+{ incrementor }</button>
      
      <button onClick={ () => {
        setDelay(prevState => prevState - incrementor)
      }}>-{ incrementor}</button>
      
      <input 
        type="number" 
        value={ incrementor } 
        onChange={ (e) => setIncrementor(+e.target.value)}
      />
    </div>
  )
}