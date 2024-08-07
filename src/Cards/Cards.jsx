import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  return (
    <div className='cards w-full h-[266px] p-5 flex justify-center gap-5 flex-wrap'>
        {users.map( (item, index) => {
          return <Card key={index} index={index} user={item} handleRemove={handleRemove}></Card>
        })}
    </div>
  )
}

export default Cards