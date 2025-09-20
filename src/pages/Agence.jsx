import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { use, useRef } from 'react'
import { Link } from 'react-router-dom';

const Agence = () => {
  const imageDivReference = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
    "/images/image11.jpg",
    "/images/image12.jpg",
    "/images/image13.jpg",
    "/images/image14.jpg",
  ]



  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imageDivReference.current, {
      scrollTrigger: {
        trigger: imageDivReference.current,
        // markers: true,
        start: 'top 25.1%',
        end: 'top -150%',
        pin: true,
        pinSpacing: true,
        pinType: 'transform',
        scrub: 1,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex];
          }
        }
      }
    })
  }, [])
  return (
    <div>
      <div className='p-3'>
        <div className='w-30'>  
          <svg className='w-full fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
            <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
          </svg>
        </div>
      </div>
      <div className='section1 relative py-1'>
        <div ref={imageDivReference} className='relative mx-auto mt-16 w-[40vw] h-[50vw] rounded-3xl overflow-hidden md:absolute md:w-[12vw] md:h-[20vw] md:top-44 md:left-[30vw]'>
          <img ref={imageRef} alt="" className='h-full object-cover' />
        </div>
        <div className='relative font-[font2]'>
          <div className=' mt-[56vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>Soixan7e<br />
              Douze</h1>
          </div>
          <div className='pl-[39%] mt-5'>
            <p className='text-6xl'>&emsp;&emsp;&emsp;&emsp;&emsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agence