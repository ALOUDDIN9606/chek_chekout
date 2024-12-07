import React, {useContext} from 'react'
import { Context } from './About'
import { VscGoToSearch } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

const GrandChild = ({url}) => {
    const data = useContext(Context)
    const navigate = useNavigate()
    console.log(data);
    
  return (
    <div className='min-h-[80vh] flex flex-wrap flex-col items-center gap-6'>
        <div className=''>
            <VscGoToSearch className='text-[80px]'/>
        </div>
        <button className='bg-violet-900 text-white text-[18px] px-6 py-2 rounded-md' onClick={()=>navigate("/")}>Go home</button>
    </div>
  )
}

export default GrandChild