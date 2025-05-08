import React from 'react';
import { useState } from 'react'
import GridLayout from './GridLayout';

function Homepage(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <GridLayout/>
      </div>
    </>
  )
}

export default Homepage;