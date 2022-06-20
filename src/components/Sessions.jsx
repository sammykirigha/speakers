import React from 'react'
import Session from './Session'

const Sessions = ({sessions}) => {
  return (
	  <div className=''>
		  <h3 className='text-md text-slate-800 ml-2 font-bold mb-5'>Sessions</h3>
		  <div className='mx-2 slim-scrollbar overflow-auto h-72 mb-6'>
			  {sessions.map((session, i) => {
			  return (<Session key={i} {...session} />)
		  })}
		  </div>
		  
	</div>
  )
}

export default Sessions