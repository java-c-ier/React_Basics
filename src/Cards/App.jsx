import React, { useState } from 'react'
import Cards from './Cards'
import Form from './Form'

function App4() {

  const [users, setUsers] = useState([])

  const handleFormSubmitData = (data) => {
    setUsers([...users, data])
  }

  const handleRemove = (id) => {
    setUsers( () => users.filter( (item, index) => index != id ))
  }

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className='container'>
        <Cards users={users} handleRemove={handleRemove}></Cards>
        <Form handleFormSubmitData={handleFormSubmitData}></Form>
      </div>
    </div>
  )
}

export default App4