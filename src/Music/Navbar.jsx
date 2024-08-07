import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-20 py-5 flex justify-between items-center'>
        <h3>Orange</h3>
        <div className="flex gap-2 p-2 px-3 rounded-lg bg-orange-500 text-white text-sm">
            <h3>Favourites</h3>
            <h4>{data.filter(item => item.added).length}</h4>
        </div>
    </div>
  )
}

export default Navbar