import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5'>
        <Link to="/projects" className='text-[6vw] border-2 border-white rounded-full px-8 pt-2 uppercase leading-[5.5vw] mb-2 hover:border-[#D3FD50] hover:text-[#D3FD50]'>Projects</Link>
        <Link to="/agence" className='text-[6vw] border-2 border-white rounded-full px-8 pt-2 uppercase leading-[5.5vw] mb-2 hover:border-[#D3FD50] hover:text-[#D3FD50]'>Agence</Link>
    </div>
  )
}

export default HomeBottomText