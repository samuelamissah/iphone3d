import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
const [videoSrc, setVideoSrc] = useState(window.innerWidth <  760 ? smallHeroVideo : heroVideo)


const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo)
    } else {
        setVideoSrc(heroVideo)
    }
}


    useEffect (() => {
        window.addEventListener('resize', handleVideoSrcSet)

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])


    useGSAP(()=> {
    
    gsap.to('#hero', { delay:2, opacity: 1})
    gsap.to('#cta', { delay: 2, opacity: 1, y: -50})
    
     }, [])

  return (
    <section className='w-full  nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>
            iPhone 15 Pro Max
        </p>

        <div className='md:w-10/12 w-9/12'>

        <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
        <source src={videoSrc} type='video/mp4' />

        </video>

        </div>

        </div>

        <div id='cta' className='flex flex-col items-center opcaity-0 translate-y-20  cta-title'>
    <a href='#' className='bg-white text-black px-10 py-3 rounded-full text-md font-semibold hover:bg-black hover:text-white transition-all'> Rich Things</a>
    <p className='font-normal text-xl mt-2 '> From GH₵ 999.99/mo. per month or GH₵ 12000.00
    </p>
        </div>




    </section>
  )
}

export default Hero
