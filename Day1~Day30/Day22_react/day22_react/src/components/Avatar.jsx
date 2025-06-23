import React from 'react'

export default function Avatar({img, isNew}) {
  return (
    <div className='avatar'>
      <img className='photo'
            src = {img} 
            alt='avatar'></img>
            {isNew && <span className='new'>New</span>}
    </div>
  )
}
