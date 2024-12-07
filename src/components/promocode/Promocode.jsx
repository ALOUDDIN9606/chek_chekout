import React, { useRef, useState } from 'react'
import { PROMOCODE } from '../../static'

const Promocode = () => {
    const code = useRef(null)
    const handleSubmit = event => {
        event.preventDefault()
        if(PROMOCODE.includes(code.current.value.toUpperCase())){
            console.log("Malades");
        }else{
            console.log("Sur bottan");  
        }
    }

    return (
          <form onSubmit={handleSubmit} className='w-full'>
              <input ref={code} className='border pl-2 py-2 w-[70%]' type="text" placeholder='enter promocode'/>
              <button className='w-[30%] font-bold px-4 bg-violet-600 text-white py-2 font-sans'>Sent</button>
          </form>
    )
}

export default Promocode

y
