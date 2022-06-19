import React from 'react'

const ImageComp = ({image}) => {
  return (
	  <div className='h-[150px] w-[150px]'>
		   <img src={image} alt="doc" height='100%' width='100%' />
	</div>
  )
}

export default ImageComp