import React, { useState } from 'react'

export default function UseToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = () => setValue(v => !v);

  return [value, toggle]
}
