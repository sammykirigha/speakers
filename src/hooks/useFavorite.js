import React from 'react'

const useFavorite = (speakers, setSpeakers) => {
	
	const onFavoriteClick = (id) => {
        const speakersRecPrevious = speakers.find((rec, i) => { return rec.id === id })
        
        const speakerRecUpdated = {
            ...speakersRecPrevious,
            favorite: !speakersRecPrevious.favorite
        }

        const speakerNewData = speakers.map((rec, i) => {
            return rec.id === id ? speakerRecUpdated : rec
        })

        setSpeakers(speakerNewData)
	}
  return [onFavoriteClick]
}

export default useFavorite