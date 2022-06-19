import React from 'react'
import Favorite from './Favorite'
import ImageComp from './ImageComp'
import Sessions from './Sessions'
import SpeakerBio from './SpeakerBio'

export const Speaker = ({ speaker }) => {
	const {image, favorite, bio, sessions} = speaker
  return (
	  <div className='bg-white border rounded-md flex flex-col'>
		  <ImageComp image={image} />
		  <Favorite favorite={favorite} />
		  <SpeakerBio bio={bio} />
		  <Sessions sessions={sessions} />
	</div>
  )
}
