import { actionsTypes } from '/Studying-React/organization/components/CounterProvider/actionTypes/index.jsx'

export const reducer = (state, action) => {
  
  switch (action.type) {
    case actionsTypes.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 }
      
    case actionsTypes.DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 }
  }
  
  return { ...state }
}