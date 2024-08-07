// Event Handling

import React from 'react'

function Song() {

    const handleClick = () => alert('Downloading')        // Function can be assigned to a variable and then passed to the event
    let data = [
        {
            name : 'Soni Soni', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi?',
        },
        {
            name: 'Naina', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, fugiat!',
        },
        {
            name: 'Kinni Kinni', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quam recusandae!',
        }
    ]

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
        {data.map( (value, index) => (
            <div className="w-52 px-3 py-2 bg-zinc-100 rounded-md" key={index}>
                <h3 className="font-semibold text-xl">{value.name}</h3>
                <p className='text-xs mt-0.5'>{value.description}</p>
                <button onClick={handleClick} className="px-3 py-0.5 bg-blue-400 text-sm font-semibold rounded-md mt-4 text-zinc-100">Download</button>
            </div>
        )
        )}
    </div>
  )
}

export default Song