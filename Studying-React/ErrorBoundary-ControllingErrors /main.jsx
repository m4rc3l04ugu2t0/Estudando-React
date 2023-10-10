import React from 'react'
import ReactDOM from 'react-dom'
import { useState,useEffect } from 'react'

const stylesheet = {
  style: {
    fontSize: '50px'
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    if (counter > 3) throw new Error('Que chato :(')
  }, [counter])
  
  return (
    <button { ...stylesheet } onClick={ () => setCounter(prevState => prevState + 1) }>
      Click to increase {counter}
    </button> 
  )
  
}

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
    </div>  
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
)