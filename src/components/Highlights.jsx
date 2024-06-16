import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VidoeCarousel from './VidoeCarousel'

const Highlights = () => {
 
    useGSAP(()=> {
     gsap.to('#title', { delay:2, opacity: 1, y: 0})
     gsap.to('.link', { delay: 2, opacity: 1, duration: 1, stagger: 0.5, y: 0})
      }, [])

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex  items-end justify-between'>
    <h1 id='title' className='section-heading'>
        Get the Apotheosis.
    </h1>
    <div className='flex flex-wrap items-end gap-5'>
        <p className='link'>
            The film
            <img src={watchImg} alt="Watch icon" className='ml-2' />
        </p>
        <p className='link'>
           The event
            <img src={rightImg} alt="Watch icon" className='ml-2' />
        </p>

    </div>
            </div>
        <div>

            <VidoeCarousel />
        </div>




        </div>

    </section>
  )
}

export default Highlights



