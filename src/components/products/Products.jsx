import React from 'react'
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import { useStateValue } from '../../context';
import { FaCartArrowDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Products = ({data, title}) => {
  const { setWishlist, wishlist, setCart, cart } = useStateValue()

  const handleLike = (product)=>{
    const index = wishlist.findIndex(item => item.id === product.id)
    if(index < 0){
      setWishlist(prev => [...prev, product])
    }else{
      setWishlist(prev => prev.filter(item=> item.id !== product.id))
    }
  }

  const handleAddToCart = product => {
    const index = cart.findIndex(item => item.id === product.id)
    if(index < 0){
        setCart(prev=> [...prev, {...product, amount: 1}])
    }else{
        setCart(prev => prev.filter(item=> item.id !== product.id))
    }
  }

  const productItems = data?.map(product=> (
    <div key={product.id} className='shadow-xl relative'>
      <div className='w-full h-64 relative bg-violet-200'>
        <img className='w-full h-full object-contain' src={product.thumbnail} alt="" />
        <button onClick={()=>handleLike(product)} className='absolute top-2.5 right-12 text-[22px]'>
          {
            wishlist?.some(item => item.id === product.id) ?
            <FaHeart className='text-red-600'/>
            :
            <FaRegHeart className='text-violet-900'/>
          }
        </button>
        <button onClick={()=> handleAddToCart(product)} className='absolute top-2.5 right-3 text-[23px] '>
            {
              cart?.some(item => item.id === product.id) ?
              <FaCartArrowDown className='text-red-600'/>
              :
              <FaCartArrowDown className='text-violet-900'/>
            }
        </button>
      </div>
      <div className='flex-1 border-t-2 px-3'>
       <h3 className='font-sans text-violet-900 text-[17px] py-3'>{product.title}</h3>
       <p className='absolute bottom-64 left-1 text-[15px] flex justify-end items-end gap-1 px-4 rounded-xl bg-amber-400'>{product.price} <span className='text-violet-900 font-bold'>$</span></p>
      </div>
    </div>
  ))

  return (
    <div className='min-h-[90vh]'>
      <div className="container">
        <form class="max-w-md mx-auto py-2">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-[16px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-violet-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        <h2 className='text-[45px] text-center py-4 text-violet-900 tracking-wider'>{title}</h2>
      </div>
      <div className='grid container gap-6 grid-cols-4'>
        {productItems}
      </div>
    </div>
  )
}

export default Products