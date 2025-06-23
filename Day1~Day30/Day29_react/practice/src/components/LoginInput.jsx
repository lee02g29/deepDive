import React from 'react'

export default function LoginInput({inputText}) {



  return (
    <div className='w-full m-2'>
      <h1 className='m-1'>{inputText.text}</h1>
      <input 
      className='w-full pt-2 pb-2 pl-1 pr-1 m-1 rounded-md border-2 border-solid border-gray-200'
      name={inputText.name}
      type={inputText.type}
      placeholder={inputText.placeholder}></input>
    </div>
  )
}
