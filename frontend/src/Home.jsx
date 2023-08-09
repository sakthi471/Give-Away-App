import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import{FaAngleDoubleRight} from 'react-icons/fa'

const Home = () => {
  return (
    <div className='w-full '>
          <div className='text-white py-14 px-5'>
          <h1 className=' font-bold text-2xl'>Want Free Stuff ?</h1>
           <p className='font-bold'>Got stuff to give away?</p>
           <p className=' text-sm text-gray-400 pt-4'>This is  site you  can  giving   and  getting  free stuff in their local communities</p>
          </div>
          <div className='w-full text-white flex flex-col items-center gap-3'>
              <button className='bg-gradient-to-r from-[#117EE2] to-[#4E54E5] px-6 py-1 flex items-center
              gap-2 rounded-sm' >Give <AiOutlinePlus/> </button>
              <span className='font-bold'>OR</span>
              <button className='bg-gradient-to-r from-[#117EE2] to-[#4E54E5] px-6 py-1 flex items-center
              gap-2 rounded-sm'>Pick <FaAngleDoubleRight/> </button>
              <span className=' font-bold'>Item</span>
          </div>
    </div>
  )
}

export default Home