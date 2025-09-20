import React from 'react'
import Video from './video'


const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
        <div className='text-[9.6vw] uppercase leading-[8vw] flex items-center justify-center'>L'étincelle</div>
        <div className='text-[9.6vw] uppercase leading-[8vw] flex items-start justify-center'>qui
            <div className='h-[7vw] w-[16vw] rounded-full -mb-3 overflow-hidden' style={{borderRadius: '20% / 50%'}}>
                <Video/>
            </div>
            génère</div>
        <div className='text-[9.6vw] uppercase leading-[8vw] flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText