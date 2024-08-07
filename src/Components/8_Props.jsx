import React from 'react'

function Props1({text, color}) {
  return (
    <button className={`px-3 py-1 ${color} text-zinc-100 text-sm rounded-lg m-3`}>{text}</button>
  )
}

export default Props1