import React from 'react'

const Session = ({title, room}) => {
  return (
	  <div className='flex flex-col items-start justify-between py-2 px-3 rounded-md drop-shadow-md cursor-pointer border mx-2 mb-3'>
		  <div flex flex-row>
			  <span>Title: </span>
			   <span className=' text-md text-slate-700'>{title}</span>
		  </div>
		  <div flex flex-row>
			  <span>Room: </span>
			    <span className='text-md text-slate-700'>{ room.name}</span>
		  </div>
		 
		 
	</div>
  )
}

export default Session