import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";

const Features = () => {
    const videoRef = useRef([]);


  useGSAP(() => {
    gsap.to('#exploreVideo', {
        scrollTrigger: {
          trigger: '#exploreVideo',
          toggleActions: 'play pause reverse restart',
          start: '-10% bottom',
        },
        onComplete: () => {
          videoRef.current.play();
        }
      })
      
    animateWithGsap("#feature_title", { y: 0, opacity: 1 });
    animateWithGsap(
        '.g_grow',
        { scale: 1, opacity: 1, ease: 'power1' },
        { scrub: 5.5 }
      );
        animateWithGsap(
            '.g_text',
            { y: 0, opacity: 1, ease: 'power2.inOut', duration:1.5 },
        );
    
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full ">
          <h1 id="feature_title" className="section-heading">
            Explore The iPhone 🥵
          </h1>
        </div>
        <div className="flex flex-col justify-center intems-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semi-bold">iPhone</h2>
            <h2 className="text-5xl lg:text-7xl font-semi-bold">
              Forged in the 🔥 of innovation.
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full  flex items-center">
            <video className="w-full h-full object-cover object-center"
            preload="none"
            autoPlay ref={videoRef}
            muted
            playsInline
            id="exploreVideo"
            >
                <source
                    src={exploreVideo} type="video/mp4"
                />
            </video>
            </div>
    <div className="flex flex-col w-full relative">
        <div className="feature-video-container">
    <div className="overflow-hidden flex-1 h-[50vh]">
        <img
        src={explore1Img} alt="iPhone"
        className="feature-video g_grow"
        />
    </div>
    <div className="overflow-hidden flex-1 h-[50vh]">
        <img
        src={explore2Img} alt="iPhone2"
        className="feature-video g_grow"
        />
    </div>
        </div>
<div className="feature-text-container">
<div className="flex-1 flex-center ">
<p className="feature-text g_text">
iPhone 15 Pro Max is {''}
<span className="text-white">
The iPhone 15 Pro Max is the latest addition to Apple's flagship lineup, featuring a durable titanium frame, a 6.7-inch Super Retina XDR display with ProMotion technology, the powerful A17 Bionic chip, a triple-camera system with a 48MP main sensor, advanced computational photography capabilities, improved low-light performance, 5G connectivity, enhanced MagSafe support, up to 2TB of storage, an impressive battery life of up to 28 hours, an under-display Touch ID sensor, Face ID, enhanced privacy features, iOS 17, spatial audio, Wi-Fi 6E, fast charging capabilities, reverse wireless charging, 
improved water and dust resistance, and a range of new color options.
</span>
</p>
</div>
<div className="flex-1 flex-center ">
<p className="feature-text g_text">
The iPhone 15 Pro Max also {''}
<span className="text-white">
introduces significant software enhancements, including new AI-driven features for photography and video editing, more intuitive multitasking capabilities, and enhanced integration with other Apple devices. With its cutting-edge hardware, innovative software, and a commitment to sustainability through the use of recycled materials, the iPhone 15 Pro Max sets a new standard for smartphones, delivering an unparalleled user experience.</span>
</p>
</div>
</div>

    </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
