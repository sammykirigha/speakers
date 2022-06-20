import React from 'react'

const ImageComp = ({image}) => {
  return (
	  <div className='h-[200px] w-[200px] bg-blue-200 rounded-md border  my-3 ml-4'>
		   <img src={image} alt="doc" height='100%' width='100%' />
	</div>
  )
}

export default ImageComp