import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [clicked, setClicked] = useState(false)

    useEffect(()=>{
        if (clicked){
            alert('button clicked')
        }
    },[clicked])
  return (
    <div>
        <button onClick={()=> setClicked(true)}>click me</button>
    </div>
  )
}

export default Effect
