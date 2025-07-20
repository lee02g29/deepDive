import React from 'react'
import { useFormContext } from 'react-hook-form'

const getderOption = [
  { value : 'male ', label:' 남성' },
  { value : 'female ', label:' 여성' }
]

export default function StepGender() {

  const {
    control,
    formState : {
      errors
    }
  } = useFormContext();

  return (
    <div>StepGender</div>
  )
}
