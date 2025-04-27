import React, {useContext} from 'react'
import Components from './Components'
import { counterContext } from '../context/context'


const Button = () => {
  const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><component1/></span>I am a button</button>
    </div>
  )
}

export default Button