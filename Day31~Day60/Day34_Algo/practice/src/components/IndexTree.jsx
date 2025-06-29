import React, { useState } from 'react'

export default function IndexTree({tree, level = 0}) {

  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div style={{
      marginLeft : level * 15,
      borderLeft : '1px solid #ccc',
      paddingLeft: 15,
    }}>
      <p onClick={handleToggle}>{tree.class}</p>

      {
        isOpen && tree.subClass.map((sub) => 
        (
          <IndexTree key={sub.code} tree={sub} level={level + 1}/>
        ))
      }
    </div>
  )
}
