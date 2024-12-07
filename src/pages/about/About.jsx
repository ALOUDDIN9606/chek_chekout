import React, { createContext } from 'react'
import Child from './Child'

export const Context = createContext()

const About = () => {
  const number = 255
  return (
    <div id='about' className='py-8 min-h-[70vh]'>
      <Context.Provider value={{number, str: "salom"}}>
        <Child />
      </Context.Provider>
    </div>
  )
}

export default About