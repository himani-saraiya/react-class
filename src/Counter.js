import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10)
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={()=>setCount(count-1)}>Count</button>
    </div>
  )
}

export default Counter
