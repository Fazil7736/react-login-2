import React from 'react'
import { Alert } from 'react-bootstrap'

const SignoutSuccess = () => {
  return (
    <div>
        {['success'].map((variant) => (
        <Alert key={variant} variant={variant}>
          Sign Out {variant}fully!
        </Alert>
      ))}
    </div>
  )
}

export default SignoutSuccess