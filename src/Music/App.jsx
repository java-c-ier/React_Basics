import React, { useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'

function App2() {

  let raw = [
    { song : 'Amit', artist : 'Photographer', added:false},
    { song : 'Aman', artist : 'Singer', added:false},
    { song : 'Rahul', artist : 'Dancer', added:false},
    { song : 'Ankit', artist : 'Writer', added:false},
    { song : 'Ankit', artist : 'Writer', added:false},
    { song : 'Ankit', artist : 'Writer', added:false}
  ]

  const [data, setData] = useState(raw)

  const handleClick = (index) => {
    setData( (prev) => {
      return prev.map( (item, itemindex) => {
        if(index === itemindex) {
          return {...item, added:!item.added}
        }
        return item
      })
    })
  }
    
  return (
    <div className='w-full h-screen bg-zinc-200'>
        <Navbar data={data}></Navbar>
        <div className='flex flex-wrap px-20'>
          {data.map( (item, index) => (
            <Card key={index} index={index} values={item} handleClick={handleClick}></Card>
          ))}
        </div>
    </div>
  )
}

export default App2