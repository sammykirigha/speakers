import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
const Favorite = ({favorite}) => {
  return (
	  <div className='flex flex-row '>
		  <AiOutlineStar />
		  <span className='text-sm text-slate-600 ml-4'>Favorite</span>
	</div>
  )
}

export default Favorite