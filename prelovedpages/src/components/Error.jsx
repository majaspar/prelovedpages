import React from 'react'

export default function Error({message="Error!"}) {
  return (
    <div className='margins mt2 mb2'>
      <h1>Error!</h1>
      {message}
      </div>
  )
}
