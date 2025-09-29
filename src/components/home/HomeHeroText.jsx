import React from 'react'
import Video from './video'


const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center max-[700px]:pt-[5vh]'>
        <div className='text-[9.6vw] max-[700px]:text-[12vw] uppercase leading-[8vw] max-[700px]:leading-[10vw] flex items-center justify-center max-[700px]:px-10'>L'étincelle</div>
        <div className='text-[9.6vw] max-[700px]:text-[12vw] uppercase leading-[8vw] max-[700px]:leading-[12vw] flex items-start justify-center max-[700px]:px-5'>qui
            <div className='h-[7vw] max-[700px]:h-[9vw] w-[16vw] max-[700px]:w-[20vw] rounded-full -mb-3 overflow-hidden' style={{borderRadius: '20% / 50%'}}>
                <Video/>
            </div>
            génère</div>
        <div className='text-[9.6vw] max-[700px]:text-[12vw] uppercase leading-[8vw] flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText