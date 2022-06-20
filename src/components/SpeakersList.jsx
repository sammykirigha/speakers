import React, { useEffect, useState } from "react";
import { Speaker } from "./Speaker";

const SpeakersList = ({ speakers, setSpeakers }) => {

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
   
    return (
        <div className=" grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 py-5 gap-3 mt-5 mx-7 pb-10">
            {speakers.map((speaker, index) => {
                return <Speaker key={index} speaker={speaker} onFavoriteClick={() => onFavoriteClick(speaker.id)} />;
            })}
        </div>
    );
};

export default SpeakersList;
