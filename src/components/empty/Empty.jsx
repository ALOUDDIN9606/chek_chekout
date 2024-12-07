import React from 'react'
import { useNavigate } from 'react-router-dom'

const Empty = ({title, url}) => {
  const navigate =  useNavigate()
  return (
    <div className='text-center'>
        <img className='w-40 mx-auto' src={url} alt="" />
        <p className='py-2'>{title}</p>
        <button className='bg-violet-900 px-8 py-2 text-white rounded-md' onClick={()=>navigate("/")}>Go home</button>
    </div>
  )
}

export default Empty