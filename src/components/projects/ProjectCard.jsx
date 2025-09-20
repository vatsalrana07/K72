import React from 'react'

const ProjectCard = ({ img1, img2 }) => {
    return (
        <>
            <div className='w-1/2 group hover:rounded-[70px] overflow-hidden h-full transition-all relative'>
                <img className=' h-full w-full object-cover' src={img1} alt="" />
                <div className='opacity-0 group-hover:opacity-100 group-hover:transition-opacity duration-200 absolute top-0 flex items-center justify-center left-0 w-full h-full bg-black/10'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 rounded-full text-white border-white '>Voir le Projets</h2>
                </div>
            </div>
            <div className='w-1/2 group hover:rounded-[70px] overflow-hidden h-full transition-all relative'>
                <img className=' h-full w-full object-cover' src={img2} alt="" />
                <div className='opacity-0 group-hover:opacity-100 group-hover:transition-opacity duration-200 absolute top-0 flex items-center justify-center left-0 w-full h-full bg-black/10'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 rounded-full text-white border-white '>Voir le Projets</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard