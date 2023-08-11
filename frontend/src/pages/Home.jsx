import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import{FaAngleDoubleRight} from 'react-icons/fa'
import {BsQuestionLg} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-full '>
          <div className='text-white py-14 px-5'>
          <h1 className=' font-bold text-2xl'>Want Free Stuff ?</h1>
           <p className='font-bold'>Got stuff to give away?</p>
           <p className=' text-sm text-gray-400 pt-4'>This is  site you  can  giving   and  getting  free stuff in their local communities</p>
          </div>
          <div className='w-full text-white flex flex-col items-center gap-3'>
             <Link to="newpost"> <button className='bg-gradient-to-r from-[#117EE2] to-[#4E54E5] px-6 py-1 flex items-center
              gap-2 rounded-sm shadow-lg shadow-cyan-500/40' >Give <AiOutlinePlus/> </button></Link>
              <span className='font-bold'>OR</span>
             <Link to="browse">
             <button className='bg-gradient-to-r from-[#117EE2] to-[#4E54E5] px-6 py-1 flex items-center
              gap-2 rounded-sm shadow-lg shadow-cyan-500/40'>Pick <FaAngleDoubleRight/> </button>
             </Link>
              <span className=' font-bold'>Item</span>
          
          </div>

           <div className='w-full flex justify-center px-2 py-7'>
            <Link to="workflow">
            <button className='text-white bg-gradient-to-r from-[#117EE2] to-[#4E54E5] px-6 py-1 flex items-center
              gap-2 rounded-sm shadow-lg shadow-blue-600/70'>How It's Work <BsQuestionLg/> </button>
            </Link>
           </div>
    </div>
  )
}

export default Home