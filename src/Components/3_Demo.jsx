// useState()

import React, { useState } from 'react'

function Demo1() {

  // const ans = useState(true)  // useState returns an array with 2 indexes 0 and 1 with 0th index being the value passed in the paranthesis and 1th index is a function that updates the 0th index value.
  // console.log(ans[0]); 

  // Another and more popular way of using useState

  const [score, setScore] = useState(20) // score gets the 0th index value i.e 0 while setScore gets the function that updates the score.
  // console.log(score);        

  return (
    <div className='px-20 py-10'>
      <h2 className='text-2xl px-5'>{score}</h2>
      <button onClick={ () => setScore(score+10) }  className='px-2 py-1 text-sm rounded-full bg-cyan-400 mt-2 text-white'>Update</button>
    </div>
  )
}

export default Demo1