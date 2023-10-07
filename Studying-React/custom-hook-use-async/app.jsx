import React from 'react'
import { useState, useEffect, useCallback } from 'react'

const useAsync = (asyncFunction, shoudRun) => {
  const [ state, setState ] = useState({
    result: null,
    error: null,
    status: 'idle'
  })
  const { result, error,  status } = state
  
  const run = useCallback(() => {
    setState({
      ...state,
      status: 'pending'
    })
    
    return asyncFunction()
      .then(response => {
        setState({
          result: response,
          error: null,
          status: 'settled'
        })
      })
      .catch(err => {
        setState({
          result: null,
          error: err,
          status: 'err'
        })
      })
  }, [asyncFunction])
  
  useEffect(() => {
    if (shoudRun) run()
  }, [run, shoudRun]) 
  
  return [ run, result, error, status ]
  
}

const fetchData = async () => {
  //throw new Error('Nenhum post encontrado!')
  const data = await fetch('http://jsonplaceholder.typicode.com/posts/')
  const postsJson = await data.json()
  return postsJson
  
}

export const App = () => {
  const [ refetchData, result, error, status ] = useAsync(fetchData, true)
  
  const handleClickPosts = () => refetchData()
  
  const statusMsg = {
    idle: `Nada executando!`,
    panding: `esperando...`,
    err: 'Nenhum posts encontrado!'
  }

  return <pre onClick={ handleClickPosts }> { statusMsg[status] ||  JSON.stringify(result, null, 2) }</pre>
  
  return (
    <div>Olá 👋</div>
  )
}