import React from 'react'
import { clsx } from 'clsx';
import '../styles/AlertCard.scss'

export default function AlertCard({info, success, warning, error}) {
  return (
    <div className={clsx('card', {
      'card-info' : info,
      'card-success' : success,
      'card-warning' : warning,
      'card-error' : error,
    })}>AlertCard</div>
  )
}
