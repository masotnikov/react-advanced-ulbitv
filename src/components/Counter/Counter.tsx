import { useState } from "react";
import cl from './Counter.module.scss'

const Counter = () => {
  const [counter, setCounter] = useState<number>(0)
  const handleClick = () => {
    setCounter(counter => counter + 1)
  }


  return (
    <div className={cl.root}>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Нажми</button>
    </div>
  )
}

export default Counter;