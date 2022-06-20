import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
	const {theme, setTheme} = useContext(ThemeContext)
  return (
	  <div className={`${theme === 'light' ? 'text-white' : 'text-slate-900'} flex flex-row items-center justify-between mx-10 border drop-shadow-lg px-3 py-4`} >
		  <span className={`${theme === 'light' ? 'text-white' : 'text-slate-900'} text-sm  font-extrabold`}>My Logo</span>
		  <p className={`${theme === 'light' ? 'text-white' : 'text-slate-900'} text-sm  font-bold`}>Best React Practises</p>
		  <span>Mr. Samuel Kirigha: <span className='text-sm text-blue-500'>Sign Out</span></span>
	</div>
  )
}

export default Header