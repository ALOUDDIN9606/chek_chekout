import React from 'react'
import Empty from '../../components/empty/Empty'
import { useState } from 'react'
import { useStateValue } from '../../context'
import "number-brm"
import { useNavigate } from 'react-router-dom'
import Promocode from '../../components/promocode/Promocode'
import { CgMathPlus, CgMathMinus  } from "react-icons/cg";


const Cart = () => {
  const [promoStatus, setPromoStatus] = useState({msg: "", error: false,success: false})
  const {cart, setCart} = useStateValue()
  const navigate = useNavigate()
  console.log(cart);

  const handleAmount = product => {
      setCart(prev => prev.map(item=> item.id === product.id ? {...item, amount: item.amount + 1} : item))
  }

  const handleSeparation= product => {
    setCart(prev => prev.map(item=> item.id === product.id ? {...item, amount: item.amount - 1} : item))
  }

  const handleDelete = product => {
    setCart(prev => prev.filter(({id}) => id !== product.id));
  }

  const total = cart.reduce((sum, item) => sum + item.amount * item.price, 0);

  
  return (
    <div className='min-h-[80vh] py-7'>
        {
          cart.length ?
          <div className='container flex gap-4'>
              <div className='flex-1 grid grid-cols-1 gap-6'>
                {
                  cart?.map((item) => (
                    <div key={item.id} className='flex flex-wrap gap-2 p-3 border-2 rounded-md shadow-md'>
                        <div className='border-2 w-[30%] rounded-md bg-violet-200'>
                          <img src={item.thumbnail} width={300} alt="" />
                        </div>
                        <div className='border-2 flex-1 rounded-md p-4 flex flex-wrap flex-col gap-4'>
                          <h3 className='text-[22px]'>{item.title}</h3>
                          <p className='text-[22px] text-violet-900'>{(item.amount * item.price)?.brm()}💲</p>
                          <div className='bg-violet-800 w-24 px-2 rounded-md flex items-center text-white'>
                            <button disabled={item.amount <= 1} onClick={()=> handleSeparation(item)} className='cursor-pointer flex-1 text-[22px]'>-</button>
                            <span className='px-4 text-[19px]'>{item.amount}</span>
                            <button onClick={() => handleAmount(item)} className='flex-1 text-[22px]'>+</button>
                          </div>
                          <button onClick={()=> handleDelete(item)} className='bg-red-600 text-white -tracking-tighter px-4 py-1 rounded-md w-40'>Delete</button>
                        </div>
                    </div>
                  ))
                }
              </div>
              <div className='w-[35%] h-60 border-2 p-3 sticky top-20 flex flex-wrap flex-col gap-4 rounded-md shadow-md'>
                  <p className='text-[27px]'>Product orders</p>
                  <p className='text-[22px]'>Total price:  <span className='font-bold text-violet-900'>{total.brm()}💲</span></p>
                   <Promocode setPromoStatus={setPromoStatus}/>
                   {promoStatus.error && <p className='text-red-500'>{promoStatus.msg}</p>}
                  <button className='bg-violet-600 tracking-widest text-white py-2 rounded-md' onClick={()=> navigate("/chekout")}>Chekout</button>
              </div>
          </div>
          :
          <Empty title="Savatingiz hozircha bo‘sh" url="https://uzum.uz/static/img/shopocat.490a4a1.png"/>
        }
    </div>
  )
}

export default Cart

