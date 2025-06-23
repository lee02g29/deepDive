import React, { useContext } from 'react'
import UserContext from './UserContext';
export default function GrandChild() {

  const user = useContext(UserContext);

  return (
    <div>GrandChild
      <h4>여기까지 전달받은 user값 : {user}</h4>
    </div>
  )
}
