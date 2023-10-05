import React from 'react'
import { useState, useEffect, useRef } from 'react'

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB)
}

const useFetch = (url, options) => {
  let changed = false
  
  const [ result, setResult ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ shouldLoad, setShoudLoad ] = useState(false)
  
  const urlRef = useRef(url)
  const optionsRef = useRef(options)
  
  useEffect(() => {
    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url
      changed = true
    }
    
    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = options
      changed = true
    }
    
    if (changed) {
      setShoudLoad (prevState => !prevState)
    }
  }, [url, options])
  
  useEffect(() => {
    let wait = false
    const controller = new AbortController()
    const signal = controller.signal
    
    console.log(urlRef.current, 'Ref') 
    console.log('EFFECT', new Date().toLocaleString())
    
    setLoading(true)
    
    const fetchData = async () => {
      
      try {
        const response = await fetch(urlRef.current, {
          signal, ...optionsRef.current
        })
        const jsonResult = await response.json()
        
        if (!wait) {
          setResult(jsonResult)
          setLoading(false)
        }
      } catch(err) {
        if (!wait) {
          setLoading(false)
        }
        console.warn(err)
      }
    }
    
    fetchData()
    
    return () => {
      wait = true
      controller.abort()
    }
  }, [shouldLoad])
  
  return [result, loading]
}

export const App = () => {
  const [ postId, setPostId ] = useState('')
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      method: 'GET',
        headers: {
          ABC: '1'
        }
    }
  )
  
  const handleClickP = (id) => {
    setPostId(id)
  }
  console.log(result)
  
  if (!loading && result) {
    
    return (
      <div>
        {result.length > 0 ? (
          result.map((p) => (
            <div key={`post-${p.id}`} onClick={() => handleClickP(p.id)}>
              <p>{p.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClickP('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  
  return (
    <div>
       Olá 👋
    </div>  
  )
}