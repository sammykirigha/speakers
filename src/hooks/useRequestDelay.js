import React, { useEffect, useState } from 'react'


export const REQUEST_STATUS = {
	LOADING: "loading",
	SUCCESS: "success",
	FAILURE: "failure"
}

const useRequestDelay = (delayTime = 1000, initialData = []) => {
	const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayfunc() {
            try {
                // await delay(delayTime);
                // throw new Error("Had Error...");
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                // setData(data);
            } catch (error) {
                 setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(error);
            }
        }

        delayfunc();
    }, []);

    
    const updateRecord = (recordUpdated) => {
		const newRecords = data.map((rec) => {
			return rec.id === recordUpdated.id ? recordUpdated : rec
		})

		async function delayFunction() {
			try {
				await delay(delayTime)
				setData(newRecords)
			} catch (error) {
				console.log(error);
			}
		}
		delayFunction()
    };

	return { data, requestStatus, error, updateRecord }
}

export default useRequestDelay