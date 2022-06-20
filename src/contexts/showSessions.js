import React, { createContext, useState } from 'react';
import useSessions from '../hooks/useSessions';

export const SessionContext = createContext()

const SessionProvider = ({ children }) => {
	const [showSessions, setshowSession] = useSessions()


  return (
	  <SessionContext.Provider value={{showSessions, setshowSession}}>
		  {children}
	</SessionContext.Provider>
  )
}

export default SessionProvider