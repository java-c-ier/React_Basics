// Using React Hook Form

import React from 'react'
import { useForm } from 'react-hook-form'

function Form3() {

    const {register, handleSubmit} = useForm();
  return (
    <form action='' onSubmit={handleSubmit(data => console.log(data))} className=' w-max m-10 flex flex-col items-center gap-5'>
        <input {...register('Name')} type="text" placeholder='Name' className='border-2 border-black rounded-md placeholder:text-center'/>
        <input {...register('Email')} type="email" placeholder='Email' className='border-2 border-black rounded-md placeholder:text-center'/>
        <input type="submit" className='w-fit px-2.5 py-1 text-sm font-semibold bg-teal-500 rounded-full'/>
    </form>
  )
}

export default Form3