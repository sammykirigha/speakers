import React, { useContext } from 'react'
import { SessionContext } from '../contexts/showSessions'
import useFavorite from '../hooks/useFavorite'
import Favorite from './Favorite'
import ImageComp from './ImageComp'
import Sessions from './Sessions'
import SpeakerBio from './SpeakerBio'

export const Speaker = ({ speaker, onFavoriteClick }) => {
	
  const { showSessions } = useContext(SessionContext)

  return (
	  <div className='bg-white border rounded-md flex flex-col'>
		  <ImageComp {...speaker} />
		  <SpeakerBio {...speaker} />
		  <Favorite {...speaker} onFavoriteClick={onFavoriteClick}  />
		  {showSessions ? <Sessions {...speaker} /> : null}
		  
	</div>
  )
}
