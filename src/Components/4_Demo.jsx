// useState() in object

import React, { useState } from 'react'

function Demo2() {

    const [value, setValue] = useState({name:'Jimut Kumar Sahoo', isBanned: true})
    
  return (
    <div className='mx-12 text-lg'>
      <h1>Name - {value.name}</h1>
      <h2>Banned Status - {   value.isBanned.toString()}</h2>
      <button onClick={() => setValue({...value, isBanned : !value.isBanned})} className={`px-3 py-1 mx-8 my-2 text-sm ${value.isBanned ? 'bg-blue-500' : 'bg-red-600'} rounded-full text-zinc-200`}>Change</button>
    </div>
  )
}

export default Demo2