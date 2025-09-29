import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5 max-[700px]:pt-[3vh] max-[700px]:px-[10vw] '>
        <Link to="/projects" className='text-[6vw] max-[700px]:text-[6vw] border-2 max-[700px]:border-3 border-white rounded-full px-8 max-[700px]:px-3 pt-2 max-[700px]:pt-1 uppercase leading-[5.5vw] mb-2 hover:border-[#D3FD50] hover:text-[#D3FD50] max-[700px]:font-bold'>Projects</Link>
        <Link to="/agence" className='text-[6vw] max-[700px]:text-[6vw] border-2 max-[700px]:border-3 border-white rounded-full px-8 max-[700px]:px-4 pt-2 max-[700px]:pt-1 uppercase leading-[5.5vw] mb-2 hover:border-[#D3FD50] hover:text-[#D3FD50] max-[700px]:font-bold'>Agence</Link>
    </div>
  )
}

export default HomeBottomText