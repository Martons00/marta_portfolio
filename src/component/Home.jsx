import React from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
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