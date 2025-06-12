import React from 'react'
import "../css/Header.css"

export default function Header({title}) {
  return (
    <> 
      <p className='header'>{title}</p>
    </>
  )
}
