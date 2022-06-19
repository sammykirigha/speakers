import React from 'react'
import Session from './Session'

const Sessions = ({sessions}) => {
  return (
	  <div>
		  {sessions.map((session, i) => {
			  return (<Session key={i} {...session} />)
		  })}
	</div>
  )
}

export default Sessions