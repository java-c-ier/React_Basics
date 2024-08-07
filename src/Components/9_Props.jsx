import React from 'react'

function Props2({values, index, handleClick}) {

  const {name, image, profession, friend} = values
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='w-full h-[200px] bg-sky-200'>
            <img className='w-full h-full object-cover object-top' src={image} />
        </div>
        <div className='w-full p-3 flex flex-col items-center'>
            <h3 className='text-lg font-semibold w-max'>{name}</h3>
            <h5 className='text-sm w-max'>{profession}</h5>
            <button onClick={() => handleClick(index) } className={`px-2 py-1 text-xs ${friend ? 'bg-green-600' : 'bg-blue-500'} rounded-full text-zinc-200 mt-2 w-max transition-transform duration-300 hover:scale-110`}>{friend ? 'Friends' : 'Add Friend'}</button>
        </div>
    </div>
  )
}

export default Props2