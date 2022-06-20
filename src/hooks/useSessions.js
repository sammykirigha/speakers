import React, { useState } from 'react'

const useSessions = () => {
	const [showSessions, setshowSession] = useState(false)

	
  return [showSessions, setshowSession]
}

export default useSessions