import React from 'react'

const Session = ({title, room}) => {
  return (
	  <div className='flex flex-row '>
		  <span className=' text-md text-slate-700'>{title}</span>
		  <span className='ml-5 text-md text-slate-700'>{ room.name}</span>
	</div>
  )
}

export default Session