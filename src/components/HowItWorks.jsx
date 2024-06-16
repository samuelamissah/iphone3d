import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef([]);

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        toggleActions: "play pause reverse restart",
        start: "20% bottom  ",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", { y: 0, opacity: 1,
 duration: 1.5, ease: "power2.inOut"


     });
  }, []);

  return (
    <section className="common-padding ">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="Chip" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro Chip
            <br /> A New Era of Performance for The Gaming Community
          </h2>
          <p className="hiw-subtitle">
            It's Here.....The iOS A17 Bionic: Unleashing Unmatched Power and
            Intelligence for a Seamlessly Smooth and Effortlessly Efficient
            Experience."
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="Frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                autoPlay
                muted
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray font-semibold mt-3 text-2xl text-center mb-5">
            DragonBall Z
          </p>
          <div className="hiw-text-container">
            <div className="flex-1 flex justify-center flex-col ">
              <p className="hiw-text g_fadeIn">
                A17 Pro is {""}
                <span className="text-white">
                  the pinnacle of mobile computing technology, combining
                  cutting-edge performance with unparalleled efficiency. With
                  its advanced 6-core CPU, 5-core GPU, and 16-core Neural
                  Engine, the A17 Bionic delivers lightning-fast processing
                  power and seamless multitasking capabilities. Whether you're
                  gaming, editing videos, or using augmented reality apps, the
                  A17 Bionic ensures smooth performance and extraordinary
                  battery life, making it the heart of an unmatched user
                  experience on iOS devices.
                </span>
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center flex-col g_fadeIn mt-10">
            <p className="hiw-text"> New</p>
            <p className="hiw-bigtext">Pro-class GPU </p>
            <p className="hiw-text">With 6 Cores </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
