import React, { useState } from 'react'
import Props2 from './Components/9_Props'

function App1() {

  let raw = [
    { name : 'Amit', profession : 'Photographer', image : 'https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg', friend : false },
    { name : 'Aman', profession : 'Singer', image : 'https://images.pexels.com/photos/905375/pexels-photo-905375.jpeg?auto=compress&cs=tinysrgb&w=600', friend : false },
    { name : 'Rahul', profession : 'Dancer', image : 'https://images.pexels.com/photos/1450116/pexels-photo-1450116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', friend : false },
    { name : 'Ankit', profession : 'Writer', image : 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600', friend : false }
  ]

  const [data, setData] = useState(raw)
  const handleClick = (cardIndex) => {
    setData( (prev) => prev.map( (item, index) => {
      if (index === cardIndex) {
        return {...item, friend : !item.friend}
      }
      return item
    } ) )
  }

  return (
    <div className='w-full h-screen bg-zinc-300 flex gap-5 justify-center items-center'>
        {data.map( (item, index) => (
          <Props2 key={index} values ={item} index={index} handleClick={handleClick}></Props2>
        ) )}
    </div>
  )
}

export default App1