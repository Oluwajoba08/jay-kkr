"use client"

import Image from "next/image"
import React, { useState, useEffect, useContext, useRef } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { motion } from "framer-motion"
// import { MouseContext } from "./context/MouseProvider"

export default function Home() {
  const [playVideo, setPlayVideo] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayToggle = () => {
    const supportsVideo = !!document.createElement("video").canPlayType
    if (supportsVideo) {
      if (videoRef?.current?.paused || videoRef?.current?.ended) {
        setPlayVideo(true)
        videoRef?.current?.play()
      } else {
        setPlayVideo(false)
        videoRef?.current?.pause()
      }
    }
  }
  // const handleAnimation = () =>{
  //   const ma = document.querySelector(".ashd")
  //   setTimeout(() => {
  //     ma?.classList.add("active")
  //   }, 1000)
  // }

  useEffect(() => {
    const playBtn = document.getElementById("video-play-button")
    playBtn?.addEventListener("click", handlePlayToggle)

    return () => {
      playBtn?.removeEventListener("click", handlePlayToggle)
    }
  }, [])
  // variants = {open:{x: 0, opacity:1, {transition:{y: {stiffness: 100, velocity: -100}}}}, closed:{}}
  // <motion.li variants={variants}>
  // animate={isOpen ? "open": "closed"}

  // initial={{opacity:0}}
  // whileInView={{opacity:1}}
  // viewport={{once: true}}

  return (
    <main className="flex min-h-screen">
      <div className="flex flex-col w-full relative">
        <Navbar />
        <div className="video-container absolute top-0 left-0 z-[-1] hidden md:block">
          <div id="video-play-button" className="absolute bottom-4 right-4 z-[1]">
            {playVideo ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                <rect width="4.2" height="18" fill="#411358"></rect>
                <rect x="9.7998" width="4.2" height="18" fill="#411358"></rect>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="#411358">
                <path d="M0.999998 20L16 10.5L1 1L0.999998 15.3605" stroke="#411358" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            )}
          </div>
          <video ref={videoRef} autoPlay loop muted width={1000} height={900} className="mx-auto w-screen h-screen">
            <source src="/hero-animation.mp4" type="video/mp4" />
          </video>
        </div>
        <section className="flex flex-col min-h-screen px-[1.25rem] md:px-[2.5rem] py-10 relative">
          <div className="mobile-image-container absolute top-0 z-[-1]">
            <Image alt="hero" src={`/hero-mobile-390x700.svg`} width={400} height={1200} className="w-screen md:hidden" />
          </div>
          <div
            className="play enlarge-hover__play absolute top-0 right-0 mt-20 bg-no-repeat bg-cover flex items-center justify-center rounded-full aspect-square w-28 md:w-48"
            style={{ backgroundImage: "linear-gradient(to top, #0229b1b3, #0229b1b3), url('/circle-video-still-v2.jpeg')" }}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                  <path d="M0.999998 20L16 10.5L1 1L0.999998 15.3605" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <p className="text-white text-center text-sm px-1">VIEW OUR STORY</p>
            </div>
          </div>
          <div className="absolute top-24 hero-text-wrapper text-5xl md:w-[700px] md:text-[110px] px-[1.875rem] flex flex-col text-[--color-primary-purple] font-light">
            <motion.h1 initial={{ opacity: 1, height: 200 }} animate={{ opacity: 0, height: 0 }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 2 }} className="hero-text-first">
              Unlocking
              <br /> potential
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 200 }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 2, delay: 3 }} className="hero-text-second">
              Securing
              <br /> futures
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 200 }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 2, delay: 6 }} className="hero-text-third">
              Delivering
              <br /> outcomes
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 200 }} transition={{ duration: 2, delay: 9 }} className="hero-text-last">
              What will we accomplish,
              <br /> together?
            </motion.h1>
          </div>
        </section>
        <section className={`flex bg-[--color-primary-purple] h-screen px-[1.25rem] md:px-[2.5rem] overflow-x-hidden`}>
          <div className="max-w-[1145px] mx-auto flex items-center relative ">
            <div className="absolute md:relative -right-[100px] md:right-[unset] w-[20rem] md:w-[21.875rem]">
              <Image src={`/grey-ampersand.svg`} width={200} height={800} className="w-full opacity-10 md:opacity-100" alt={`Ampersand image`} />
            </div>
            <div className="flex flex-col gap-12 items-start md:pl-[7.5rem] md:w-2/3">
              <p className="text-3xl text-white">JAY is a leading global investment firm. We aim to deliver strong returns and shared success to those we serve and the world at large.</p>
              <a href="/about" className="relative slide-border px-5 py-4 text-xs hover:bg-[--color-primary-yellow] text-white hover:text-[--color-primary-turquoise]">
                LEARN ABOUT JAY
              </a>
            </div>
          </div>
        </section>
        <section className={`bg-white w-full min-h-screen overflow-x-hidden`}>
          <div className="pt-[2.5rem] px-5 lg:px-10 min-[1185px]:px-0">
            <div className="mx-auto max-w-[1145px]">
              <div className="flex flex-col pt-10 pb-20">
                <h1 className="font-light my-8 text-[--color-primary-purple] text-[3rem] [line-height:3.5rem]">
                  Investing in People, <br />
                  Companies, & Communities
                </h1>
                <br />
                <ul className="flex flex-col md:flex-row gap-4 text-[--color-primary-purple]">
                  <li className="md:w-1/4 w-full">
                    <a href="#" className="w-full">
                      <div className="flex w-full py-8 pl-1 border-x border-[--color-primary-purple] custom-border-lb-x before:bg-[--color-primary-purple] after:bg-[--color-primary-purple] relative">
                        <p className="font-light text-3xl">$</p>
                        <div className="flex flex-col gap-2">
                          <p className="font-bold text-4xl">173B</p>
                          <p className="text-sm">PRIVATE EQUITY</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="md:w-1/4 w-full">
                    <a href="#" className="w-full">
                      <div className="flex w-full py-8 pl-1 border-x border-[--color-primary-purple] custom-border-lb-x before:bg-[--color-primary-purple] after:bg-[--color-primary-purple] relative">
                        <p className="font-light text-3xl">$</p>
                        <div className="flex flex-col gap-2">
                          <p className="font-bold text-4xl">285B</p>
                          <p className="text-sm">CREDIT</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="md:w-1/4 w-full">
                    <a href="#" className="w-full">
                      <div className="flex w-full py-8 pl-1 border-x border-[--color-primary-purple] custom-border-lb-x before:bg-[--color-primary-purple] after:bg-[--color-primary-purple] relative">
                        <p className="font-light text-3xl">$</p>
                        <div className="flex flex-col gap-2">
                          <p className="font-bold text-4xl">73B</p>
                          <p className="text-sm">INFRASTRUCTURE</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="md:w-1/4 w-full">
                    <a href="#" className="w-full">
                      <div className="flex w-full py-8 pl-1 border-x border-[--color-primary-purple] custom-border-lb-x before:bg-[--color-primary-purple] after:bg-[--color-primary-purple] relative">
                        <p className="font-light text-3xl">$</p>
                        <div className="flex flex-col gap-2">
                          <p className="font-bold text-4xl">75B</p>
                          <p className="text-sm">REAL ESTATE</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <p className="mt-10 text-sm">As of June 30, 2024. Credit AUM includes liquid strategies.</p>
              </div>
            </div>
            <div className="bg-[#eef3f9] min-[1185px]:w-full px-[1.25rem] md:px-[2.5rem]">
              <div className="w-full py-16 max-w-[1145px] mx-auto">
                <h2 className="my-4 text-5xl text-[--color-primary-purple]">Who We Serve</h2>
                <div className="flex pt-10">
                  <ul className="flex flex-wrap gap-y-5">
                    <li className="md:w-1/2">
                      <div className="px-6 flex border-l border-[--color-primary-purple] flex-col items-start">
                        <p className="text-3xl text-[--color-primary-purple]">Institutional Investors</p>
                        <p className="pt-3 text-[--color-primary-turquoise]">
                          Our differentiated investment insights, time-tested approach, and wide array of solutions help pensions, sovereign wealth funds, endowments and foundations, consultants, and insurance companies fulfill their missions.
                        </p>
                        <a href="/" className="font-bold text-xs py-2.5 border-b border-[--color-primary-purple] mt-[10px] text-[--color-primary-purple]">
                          EXPLORE OUR INSTITUTIONAL CAPABILITIES
                        </a>
                      </div>
                    </li>
                    <li className="md:w-1/2">
                      <div className="px-6 flex border-l border-[--color-primary-purple] flex-col items-start">
                        <p className="text-3xl text-[--color-primary-purple]">Global Wealth</p>
                        <p className="pt-3 text-[--color-primary-turquoise]">
                          Our Global Wealth Solutions for eligible individual investors across private equity, private credit, infrastructure, and real estate draw on an investment process honed over nearly five decades and many market cycles.
                        </p>
                        <a href="/" className="font-bold text-xs py-2.5 border-b border-[--color-primary-purple] mt-[10px] text-[--color-primary-purple]">
                          EXPLORE OUR GLOBAL WEALTH SOLUTIONS
                        </a>
                      </div>
                    </li>
                    <li className="md:w-1/2">
                      <div className="px-6 flex border-l border-[--color-primary-purple] flex-col items-start">
                        <p className="text-3xl text-[--color-primary-purple]">Family Capital</p>
                        <p className="pt-3 text-[--color-primary-turquoise]">Our global Family Capital team is dedicated to helping families and entrepreneurs find solutions for their unique investment needs.</p>
                        <a href="/" className="font-bold text-xs py-2.5 border-b border-[--color-primary-purple] mt-[10px] text-[--color-primary-purple]">
                          PARTNER WITH OUR FAMILY CAPITAL TEAM
                        </a>
                      </div>
                    </li>
                    <li className="md:w-1/2">
                      <div className="px-6 flex border-l border-[--color-primary-purple] flex-col items-start">
                        <p className="text-3xl text-[--color-primary-purple]">Companies</p>
                        <p className="pt-3 text-[--color-primary-turquoise]">
                          The companies we invest in benefit from more than just our capital. As trusted partners, we aim to help them achieve operational excellence and provide expertise across a variety of industries and markets.
                        </p>
                        <a href="/" className="font-bold text-xs py-2.5 border-b border-[--color-primary-purple] mt-[10px] text-[--color-primary-purple]">
                          VIEW OUR PORTFOLIO
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[--color-primary-turquoise] text-white min-h-screen px-[1.25rem] md:px-[2.5rem] overflow-x-hidden">
          <div className="max-w-[1145px] mx-auto">
            <div className="w-full">
              <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center items-start ">
                <p className="text-[2.5rem] text-white pt-10">Latest News & Insights</p>
                <a href="/insights" className="text-white py-2 mt-5 border-b border-white hover:border-[--color-primary-yellow] hover:text-[--color-primary-yellow]">
                  VIEW ALL INSIGHTS
                </a>
              </div>
              <div className="flex flex-wrap md:flex-nowrap mt-8 gap-8">
                <div className="w-full md:w-1/3 relative custom-border-lb-x before:bg-[--color-primary-yellow] after:bg-[--color-primary-yellow] p-5 border-x border-[--color-primary-yellow]">
                  <a href="/insights">
                    <Image className="object-cover mx-auto w-[312px] h-[175px]" src={"/flash-macro-volatitlity-1320x470.jpeg"} alt="macro-insights" width={312} height={175} />
                    <div className="flex flex-col items-start mt-4">
                      <p className="font-bold text-lg ">MICRO INSIGHTS</p>
                      <p className="font-light text-[22px] mt-4">Flash Macro: Market Update</p>
                      <span className="text-sm my-3 font-normal">AUGUST 2024</span>
                    </div>
                    <svg className="mt-3" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 11L16.5 6L11.5 1" stroke="#FFD828"></path>
                      <path d="M16.5 6L0 6" stroke="#FFD828"></path>
                    </svg>
                  </a>
                </div>
                <div className="w-full md:w-1/3 relative custom-border-lb-x before:bg-[--color-primary-yellow] after:bg-[--color-primary-yellow] p-5 border-x border-[--color-primary-yellow]">
                  <a href="/insights">
                    <Image className="object-cover mx-auto w-[312px] h-[175px]" src={"/flash-macro-image-1320x470.jpeg"} alt="macro-insights" width={312} height={175} />
                    <div className="flex flex-col items-start mt-4">
                      <p className="font-bold text-lg ">MICRO INSIGHTS</p>
                      <p className="font-light text-[22px] mt-4">Flash Macro: U.S. Jobs</p>
                      <span className="text-sm my-3 font-normal">AUGUST 2024</span>
                    </div>
                    <svg className="mt-3" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 11L16.5 6L11.5 1" stroke="#FFD828"></path>
                      <path d="M16.5 6L0 6" stroke="#FFD828"></path>
                    </svg>
                  </a>
                </div>
                <div className="w-full md:w-1/3 relative custom-border-lb-x before:bg-[--color-primary-yellow] after:bg-[--color-primary-yellow] p-5 border-x border-[--color-primary-yellow]">
                  <a href="/insights">
                    <Image className="object-cover mx-auto w-[312px] h-[175px]" src={"/why-real-estate-diversification-1320x470.jpeg"} alt="macro-insights" width={312} height={175} />
                    <div className="flex flex-col items-start mt-4">
                      <p className="font-bold text-lg ">INVESTMENT INSIGHTS</p>
                      <p className="font-light text-[22px] mt-4">Diversification: A Key to Playing the Global Real Estate Recovery</p>
                      <span className="text-sm my-3 font-normal">JULY 2024</span>
                    </div>
                    <svg className="mt-3" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 11L16.5 6L11.5 1" stroke="#FFD828"></path>
                      <path d="M16.5 6L0 6" stroke="#FFD828"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  )
}

{
  /* unlocking potential, securing futures, delivering outcomes, what will we accomplish, together?
   
  <video class="vjs-tech" id="videoHeroBannerMain_html5_api" data-video-id="6337154082112" data-account="6415685851001" data-player="default" data-embed="default" data-application-id="" muted="muted" loop="" playsinline="playsinline" tabindex="-1" role="application" preload="none" poster="https://house-fastly-signed-us-east-1-prod.brightcovecdn.com/image/v1/jit/6415685851001/b3690a8b-e161-42e3-8ba6-11698f4bae5b/main/1280x720/7s50ms/match/image.jpg?fastly_token=NjZiYmQ2MDNfZDNjMmZmYWMyMjgwNTY1MjIzOWM0YmNhY2QzNmEzOTQ5ZTk5NjMxNTZiMzk1NGRkMWE4NjlmYjM0OTM4NzU2Zl9odHRwczovL2hvdXNlLWZhc3RseS1zaWduZWQtdXMtZWFzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vaW1hZ2UvdjEvaml0LzY0MTU2ODU4NTEwMDEvYjM2OTBhOGItZTE2MS00MmUzLThiYTYtMTE2OThmNGJhZTViL21haW4vMTI4MHg3MjAvN3M1MG1zL21hdGNoL2ltYWdlLmpwZw%3D%3D" src="blob:https://www.kkr.com/bbbb227f-e94c-423b-9bd5-b321d6ffa264">
        </video>
  
  
  */
}
