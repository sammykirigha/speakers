import React, {  useEffect, useState } from "react";
import SessionProvider from "../contexts/showSessions";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = () => {
    
	
    return (
        <div className=''>
			<SessionProvider>
                <SpeakersToolbar />
                <SpeakersList  />
            </SessionProvider>
        </div>
    );
};

export default Speakers;
