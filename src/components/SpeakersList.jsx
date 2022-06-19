import React, { useEffect, useState } from "react";
import {data} from "../speakersData";
import { Speaker } from "./Speaker";
const SpeakersList = () => {
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        setSpeakers(data);
    }, []);
    return (
        <div className="bg-gray-50 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 mt-5 ">
            {speakers.map((speaker, index) => {
                return <Speaker key={index} speaker={speaker} />;
            })}
        </div>
    );
};

export default SpeakersList;
