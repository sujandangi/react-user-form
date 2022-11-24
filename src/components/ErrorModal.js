import React from 'react'
import Button from './Button'
import "./ErrorModal.css"

function ErrorModal({ errorTitle, errorMessage, onConfirm }) {
  return (
    <div className='errorBackground' onClick={onConfirm}>
        <div className='errorBody'>
            <h3>{errorTitle}</h3>
            <p>Description: {errorMessage}</p>
            <button onClick={onConfirm}>Ok</button>
        </div>
    </div>
  )
}

export default ErrorModal