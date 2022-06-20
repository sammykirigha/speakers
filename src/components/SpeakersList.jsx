import React from "react";
import { Speaker } from "./Speaker";
import ReactPlaceholder from 'react-placeholder';
import useRequestDelay, {REQUEST_STATUS} from '../hooks/useRequestDelay'
import { data } from "../speakersData";

const SpeakersList = () => {

    const {data: speakers, requestStatus, error, updateRecord } = useRequestDelay(2000, data)
    
    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
            <div>Error occured please check your code.......</div>
        )
    }

    // if (requestStatus === REQUEST_STATUS.lOADING) return <h2>Loading.....</h2>;
    return (
        <div className=" grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 py-5 gap-3 mt-5 mx-7 pb-10">
            <ReactPlaceholder type="media" rows={5} ready={requestStatus === REQUEST_STATUS.SUCCESS}>
            {speakers.map((speaker, index) => {
                return (
                    <Speaker
                        key={index}
                        speaker={speaker}
                        onFavoriteClick={() => updateRecord({
                            ...speaker,
                            favorite: !speaker.favorite
                        })}
                    />
                );
            })}
                </ReactPlaceholder>
        </div>
    );
};

export default SpeakersList;
