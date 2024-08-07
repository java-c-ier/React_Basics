import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmitData}) {

  const {register, handleSubmit, reset} = useForm()
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  }

  return (
    <div className='form mt-10 flex justify-center'>
      <form className='flex gap-5' onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register('name')} className='rounded-full px-2 py-1  text-base outline-none text-center' placeholder='Name' type="text" />
        <input {...register('email')} className='rounded-full px-2 py-1 text-base outline-none text-center' placeholder='Email' type="text" />
        <input {...register('image')} className='rounded-full px-2 py-1 text-base outline-none text-center' placeholder='Image Link' type="text" />
        <input className='rounded-full px-5 bg-blue-500 font-semibold text-sm text-white' type="submit" />
      </form>
    </div>
  )
}

export default Form