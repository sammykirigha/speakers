import React from 'react'

const SpeakerBio = ({bio, first, last}) => {
  return (
	  <div className='mx-4 my-3'>
		  <h5 className='text-md text-slate-900 tracking-wider font-bold'>{ `${first} ${last}`}</h5>
		  <p className='text-md text-slate-700'>{ bio}</p>
	</div>
  )
}

export default SpeakerBio