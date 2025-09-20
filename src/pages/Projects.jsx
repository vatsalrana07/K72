import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    { image1: '/images/projects-2.jpg', image2: '/images/WS---K72.ca---Thumbnail-1280x960.jpg' },
    { image1: '/images/OKA_thumbnail-1280x960.jpg', image2: '/images/opto_thumbnail2-1280x960.jpg' },
    { image1: '/images/CF_thumbnail-1280x960.jpg', image2: '/images/thumbnailimage_shelton-1280x960.jpg' },
    { image1: '/images/BEST_site_menu_Thumbnail-1280x960.jpg', image2: '/images/thumbnailimage_atable2-1280x960.jpg' },
    { image1: '/images/thumbnailimage_SollioAg-1280x960.jpg', image2: '/images/chalaxeur-thumbnail_img-1280x960.jpg' },
    { image1: '/images/thumbnail_OSM_1280-1280x960.jpg', image2: '/images/100temps_Thumbnail-1280x960.jpg' },
    { image1: '/images/crisis24_behance_1920X1200_cartes-1280x960.jpg', image2: '/images/thumbnailimage_opto-1280x960.jpg' },
    { image1: '/images/PME-MTL_Thumbnail-1280x960.jpg', image2: '/images/Fruite_thumbnail_bbq-1280x960.jpg' }
  ];

  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.hero', {
      height: '20px',
      stagger: {
        amount: 0.9
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: 1.5,
        markers: false,
      }
    });
  });
   
  return (
    <>
      <div ref={container} className='lg:p-4 p-2 mb-[100vh]'>
        <div className=' pt-[45vh]'>
          <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
        </div>
        <div className='-lg:mt-20 lol'>
          {projects.map((img1, index) => {
            return (
              <div key={index} className='hero w-full h-[400px] flex gap-4 mb-4 '>
                <ProjectCard img1={img1.image1} img2={img1.image2} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;