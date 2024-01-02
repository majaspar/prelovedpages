import React from 'react'

export default function Success({message = 'Success!'}) {
  return (
    <div className='margins mt2'>{message}</div>
  )
}
