import React from 'react'

const ListRendering = () => {
  const data=[
    {id:1, name:"shurbhi", age:24},
    {id:2, name:"ankita", age:24},
    {id:3, name:"neha", age:26},
  ]
  return (
    <div>
      <ul>
        {data.map((el)=>{
          return <li key={el.id}>
            {el.name} , {el.age}
          </li>
        })}
      </ul>
      
    </div>
  )
}

export default ListRendering
