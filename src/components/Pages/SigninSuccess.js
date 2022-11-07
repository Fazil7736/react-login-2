import React from 'react'
import { Alert } from 'react-bootstrap'

const SigninSuccess = () => {
  return (
    <div>{['success'].map((variant) => (
        <Alert key={variant} variant={variant}>
          Sign In {variant}fully!
        </Alert>
      ))}</div>
  )
}

export default SigninSuccess