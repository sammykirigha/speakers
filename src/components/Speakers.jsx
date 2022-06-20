import React, {  useEffect, useState } from "react";
import SessionProvider from "../contexts/showSessions";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import {data} from "../speakersData";

const Speakers = () => {
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        setSpeakers(data);
	}, []);
	
    return (
        <div className=''>
			<SessionProvider>
                <SpeakersToolbar />
                <SpeakersList speakers={speakers} setSpeakers={setSpeakers} />
            </SessionProvider>
        </div>
    );
};

export default Speakers;
