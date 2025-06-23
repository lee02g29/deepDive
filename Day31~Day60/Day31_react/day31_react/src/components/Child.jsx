import React from 'react'
import GrandChild from './GrandChild'

export default function Child({user}) {
  return (
    <div>Child
      <GrandChild user={user}/>
    </div>
  )
}
