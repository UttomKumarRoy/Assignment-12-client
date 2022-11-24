import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  
  return (
    <>
            <div className='flex justify-center items-center min-h-screen'>
                 <img src='https://www.freeiconspng.com/thumbs/error-icon/error-icon-32.png' alt="error" />
            </div>
    </>
  )
}

export default Error