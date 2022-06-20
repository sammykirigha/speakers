import React, { useState, useContext } from 'react';
import { SessionContext } from '../contexts/showSessions';
import { ThemeContext } from '../contexts/ThemeContext';

const options = [
	{ value: "dark", label: "dark" },
	{ value: "light", label: "light" },
]

const SpeakersToolbar = () => {
	const { showSessions, setshowSession } = useContext(SessionContext)
	const { theme, themeToggle, setTheme } = useContext(ThemeContext)

  return (
	  <div className={`${theme === 'light' ? 'bg-white': ''} flex flex-row mt-8 mx-10 border py-4 px-3`}>
		  <div className='mr-5 flex flex-row items-center border px-3 rounded-md py-3'>
			  <input className='mr-8' type="checkbox" checked={showSessions}  onChange={(event) => setshowSession(event.target.checked)} />
			  <span className=' text-md text-slate-900'>Show Sessions</span>
		  </div>
		  <div className='mr-5 flex flex-row items-center border rounded-md px-3 py-3'>
			  <span className='mr-6'>Theme</span>
			  <select className='w-[80px]' value={theme} onChange={(event) => setTheme(event.target.value)}>
				  {options.map((option, i) => {
					  return (<option value={option.value} >{ option.value}</option>)
				  })}
			  </select>
		  </div>
	</div>
  )
}

export default SpeakersToolbar