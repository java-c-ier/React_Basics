import React from 'react'

function Card({values, handleClick, index}) {

  const{song, artist, added} = values
  return (
      <div className='w-60 flex justify-evenly flex-wrap gap-3 bg-zinc-100 p-3 rounded-md m-6'>
        <div className="w-16 h-16 bg-orange-500 rounded-lg overflow-hidden ">
          <img className='w-full h-full object-cover  ' src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div className=''>
          <h2 className='text-lg font-semibold'>{song}</h2>
          <h4 className='text-sm'>{artist}</h4>
        </div>
        <div className='w-full flex justify-center'>
          <button onClick={ () => handleClick(index) } className={`px-2 py-1.5 w-max ${added ? 'bg-teal-500' : 'bg-orange-500'} rounded-full font-semibold text-white text-[11px]`}>{added ? 'Added' : 'Add to Favourites'}</button>
        </div>
      </div>
  )
}

export default Card