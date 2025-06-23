import React from 'react'
import Child from './Child'

export default function Parent({user}) {
  return (
    <div>Parent
      <Child user={user}/> 
    </div>
  )
}
