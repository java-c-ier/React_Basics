import React from 'react'

function Card({user, handleRemove, index}) {
  return (
    <div className='card w-44 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
      <div className="image h-12 rounded-full bg-zinc-300 overflow-hidden">
        <img className='w-full h-full object-cover' src={user.image} alt="" />
      </div>
      <h1 className='text-xl mt-2 font-semibold text-center leading-none'>{user.name}</h1>
      <h4 className='opacity-70 text-xs font-semibold'>{user.email}</h4>
      <p className='text-center text-xs mt-2 font-semibold tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam earum fugiat dicta?</p>
      <button onClick={()=>handleRemove(index)} className="px-3 py-1 bg-blue-500 text-xs font-semibold rounded-full mt-3 text-zinc-100">Remove</button>
    </div>
  )
}

export default Card