import React, {useState} from 'react'
import { AiFillStar } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';

const Favorite = ({ favorite, onFavoriteClick }) => {
   
	const [inTransition, setInTransition]= useState(false)
	function doneCallback(){
		setInTransition(false)
      console.log('am clicking and reacting');
	}
	
  return (
	  <div className='flex flex-row my-3 ml-3 drop-shadow-md cursor-pointer' onClick={function () {
		  setInTransition(true)
		  return onFavoriteClick(doneCallback)
	  }}>
		  <AiFillStar color="" className={`${favorite === true ? 'text-red-900' : 'text-gray-700'} text-md `}  />
		  <span className='text-sm text-slate-600 ml-4'>Favorite</span>
		  {inTransition ? (<FaSpinner />) : null}
	</div>
  )
}

export default Favorite