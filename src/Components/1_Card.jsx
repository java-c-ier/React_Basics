// Components, Reusable Components, Conditional Rendering

import React from 'react'

function Card() {

    let data = [
        {
            image : 'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name : 'Amazon Basics', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi?',
            instock : true
        },
        {
            image: 'https://images.unsplash.com/photo-1690467428088-cc1646156f20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Daily Objects', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, fugiat!',
            instock : false
        },
        {
            image: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Apple Products', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quam recusandae!',
            instock : false
        }
    ]

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>

        {data.map( (value, index) => (
            <div className='w-52 bg-zinc-100 rounded-md overflow-hidden' key={index}>
                <div className='w-full h-32 bg-zinc-300'>
                    <img className='w-full h-full object-cover' src={value.image}/>
                </div>
                <div className='w-full px-3 py-4'>
                    <h2 className='font-semibold'>{value.name}</h2>
                    <p className='text-xs mt-3'>{value.description}</p>
                    <button className= {`px-4 py-1 ${value.instock ? 'bg-cyan-600' : 'bg-rose-500'} text-xs rounded-md text-zinc-100 mt-4`}>
                        {value.instock ? 'In Stock' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        ))
        }

    </div>
  )
}

export default Card