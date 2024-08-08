import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
    const user = useParams()
    
    const navigate = useNavigate()
    const GoBackHandler = () => navigate("/user")
    // const GoBackHandler = () => navigate(-1)  Another way to go back
    
  return (
    <div className="w-1/2 m-auto mt-10 p-5">
        <h1 className="text-3xl font-semibold text-red-400 mb-2">About</h1>
        <p className="mt-2 mb-2 text-xl text-zinc-800">Hii {user.name}</p>
        <button onClick={GoBackHandler} className="px-4 py-1 mt-1 text-white bg-red-400 transition duration-400 hover:bg-red-600 rounded-full">Back</button>
      </div>
  )
}

export default UserDetail