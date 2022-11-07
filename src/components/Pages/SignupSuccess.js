import React from 'react'
import { Alert } from 'react-bootstrap'

const SignupSuccess = () => {
  return (
    <div>{['success'].map((variant) => (
        <Alert key={variant} variant={variant}>
          Sign Up {variant}fully!
        </Alert>
      ))}</div>
  )
}

export default SignupSuccess