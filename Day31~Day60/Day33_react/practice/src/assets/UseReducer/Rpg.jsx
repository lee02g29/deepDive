import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'

export default function Rpg() {

  const levelInital = {
    level : 1,
    exp: 0
  }

  const handleLevel = (state, action) => {
    switch(action.type) {
      case 'EARN' : 
        const nextExp = state.exp + 10;
        let nextLevel = state.level;
        let resetExp = nextExp; 

        if (nextExp >= 50) {
          nextLevel += 1; 
          resetExp = 0; 
        }
        return {
          ...state,
          level: nextLevel,
          exp: resetExp,
        }
    }
  }

  const [level, dispatch] = useReducer(handleLevel, levelInital);


  return (
    <div>
      <h2>레벨 : {level.level}, EXP: {level.exp}</h2>
      <button onClick={() => dispatch({
        type:'EARN'
      })}>경험치 획득</button>
    </div>
  )
}
