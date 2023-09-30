import React from 'react'

import { actionsTypes } from '/Studying-React/organization/components/CounterProvider/actionTypes/index.jsx'

export const incrementCounter = (dispatch) => {
  dispatch({ type: actionsTypes.INCREMENT_COUNTER })
}

export const decrementCounter = (dispatch) => {
  dispatch({ type: actionsTypes.DECREMENT_COUNTER })
}