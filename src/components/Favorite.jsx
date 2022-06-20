import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';

const Favorite = ({ favorite, onFavoriteClick }) => {

	
  return (
	  <div className='flex flex-row my-3 ml-3 drop-shadow-md cursor-pointer' onClick={onFavoriteClick}>
		  <AiOutlineStar color="" className={`${favorite === true ? 'text-red-900' : 'text-gray-700'} text-md `}  />
		  <span className='text-sm text-slate-600 ml-4'>Favorite</span>
	</div>
  )
}

export default Favorite