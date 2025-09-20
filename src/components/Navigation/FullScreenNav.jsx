import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useEffect, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext';
import { Link } from 'react-router-dom';

const FullScreenNav = () => {

    const fullNavLinksRef = useRef(null);
    const fullscreenRef = useRef(null);
    const [NavOpen, setNavOpen] = useContext(NavbarContext);

    function gsapAnimation() {

        const tl = gsap.timeline()

        tl.to('#fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            height: '100%',
            duration: 0.3,
            ease: "power1.out",
            stagger: {
                amount: -0.1
            }
        })
        tl.to('.navlink', {
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
        })
        tl.fromTo(
            ".can-button",
            { x: 1500 },
            {
                x: 0, duration: 0.3,
                ease: "power1.out",
            }
        );
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            duration: 0.3,
            ease: "power1.out",
            stagger: {
                amount: 0.3
            }
        })

    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to(".can-button", {
            x: 1500,
            duration: 0.5,
            ease: "power1.out",
        })
        tl.to('.link', {
            rotateX: 90,
            duration: 0.3,
            ease: "power1.out",
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            duration: 0.3,
            ease: "power1.out",
            stagger: {
                amount: -0.2
            }
        })
        tl.to('.navlink', {
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
        })
        tl.to('#fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (NavOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [NavOpen])
    return (
        <div ref={fullscreenRef} id='fullscreennav' className=' text-white h-screen w-full overflow-hidden z-50 absolute '>
            <div className='h-screen w-full fixed'>
                <div className='h-screen w-full flex'>
                    <div className=' stairing h-full w-1/5 bg-black'></div>
                    <div className=' stairing h-full w-1/5 bg-black'></div>
                    <div className=' stairing h-full w-1/5 bg-black'></div>
                    <div className=' stairing h-full w-1/5 bg-black'></div>
                    <div className=' stairing h-full w-1/5 bg-black'></div>
                    <div className=' stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className='flex w-full justify-between items-start'>
                    <div className='p-3'>
                        <Link to="/" onClick={() => {
                            setNavOpen(false);
                        }}>
                            <div className='w-30'>
                                <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                    <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className='navlink'>
                        <div onClick={() => setNavOpen(false)} className=' can-button relative mt-3   h-32 w-32 cursor-pointer group'>
                            <div className='h-44 w-1 -rotate-45 origin-top absolute bg-[#f8f8f8] group-hover:bg-[#D3FD50]'></div>
                            <div className='h-44 w-1 rotate-45 right-0 origin-top absolute bg-[#f6f6f6] group-hover:bg-[#D3FD50]'></div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <Link to="/projects" onClick={() => {
                        setNavOpen(false);
                    }} >
                        <div className="link origin-top relative border-y-1">
                            <h1 className='font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>Projects</h1>
                            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                                <div className='moveX flex items-center'>
                                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR TOUT VOIR</h2>
                                    <img className='h-20 shrink-0 rounded-full w-55 object-cover' src="/images/projects-2.jpg" alt="" />
                                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR TOUT VOIR</h2>
                                    <img className='h-20 shrink-0 rounded-full w-55 object-cover' src="/images/projects-3.jpg" alt="" />
                                </div>
                                <div className='moveX flex  items-center'>
                                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR TOUT VOIR</h2>
                                    <img className='h-20 shrink-0 rounded-full w-55 object-cover' src="public/images/projects-2.jpg" alt="" />
                                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR TOUT VOIR</h2>
                                    <img className='h-20 shrink-0 rounded-full w-55 object-cover' src="public/images/projects-3.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link to="/agence" onClick={() => {
                        setNavOpen(false);
                    }}>
                        <div className="link origin-top relative border-y-1">
                            <h1 className='font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>Agence</h1>
                            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                                <div className='moveX flex items-center'>
                                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR TOUT SAVOIR</h2>
                                    <img className='h-20 shrink-0 rounded-full w-55 object-cover' src="/images/blank.jpg" alt="" />
                                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR TOUT SAVOIR</h2>
                                    <img className='h-20 shrink-0 rounded-full w-55 object-cover' src="public/images/blank1-2.jpg" alt="" />
                                </div>
                                <div className='moveX flex  items-center'>
                                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR TOUT SAVOIR</h2>
                                    <img className='h-20 shrink-0 rounded-full w-55 object-cover' src="/images/blank.jpg" alt="" />
                                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR TOUT SAVOIR</h2>
                                    <img className='h-20 shrink-0 rounded-full w-55 object-cover' src="/images/blank1-2.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                    </Link>
                    <div className="link origin-top relative border-y-1">
                        <h1 className='font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>Contact</h1>
                        <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR ENVOYER UN FAX</h2>
                                <img className='h-20 shrink-0 rounded-full w-55 mx-5 object-cover' src="public/images/projects-2.jpg" alt="" />
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR ENVOYER UN FAX</h2>
                                <img className='h-20 shrink-0 rounded-full w-55 mx-5 object-cover' src="public/images/projects-3.jpg" alt="" />
                            </div>
                            <div className='moveX flex  items-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR ENVOYER UN FAX</h2>
                                <img className='h-20 shrink-0 rounded-full w-55 mx-5 object-cover' src="public/images/projects-2.jpg" alt="" />
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>POUR ENVOYER UN FAX</h2>
                                <img className='h-20 shrink-0 rounded-full w-55 mx-5 object-cover' src="public/images/projects-3.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="link origin-top relative border-y-1">
                        <h1 className='font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>Blogue</h1>
                        <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>LIRE LES ARTICLES</h2>
                                <img className='h-20 shrink-0 rounded-full w-55 mx-5 object-cover' src="public/images/last.png" alt="" />
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>LIRE LES ARTICLES</h2>
                                <img className='h-20 shrink-0 rounded-full w-55 mx-5 object-cover' src="public/images/last1.gif" alt="" />
                            </div>
                            <div className='moveX flex  items-center'>
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>LIRE LES ARTICLES</h2>
                                <img className='h-20 shrink-0 rounded-full w-55 mx-5 object-cover' src="public/images/last.png" alt="" />
                                <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase text-center border-white leading-[0.8] pt-3'>LIRE LES ARTICLES</h2>
                                <img className='h-20 shrink-0 rounded-full w-55 mx-5 object-cover' src="public/images/last1.gif" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav