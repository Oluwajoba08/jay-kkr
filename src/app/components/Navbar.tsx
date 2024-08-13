"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [navPage, setNavPage] = useState<"about" | "approach" | "invest" | "insights" | undefined>(undefined)

  const handleScroll = () => {
    if (window.innerWidth < 768) return

    if (window.scrollY > prevScrollY) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
    setPrevScrollY(window.scrollY)
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollY])

  return (
    <nav className={`flex flex-col fixed top-0 w-full items-center z-10 ${navOpen && "ampersand-bg"}`}>
      <AnimatePresence>
        {showNav && (
          <div className="flex flex-col w-full">
            <motion.div
              initial={{ y: -96 }}
              animate={{ y: 0 }}
              exit={{ y: -96 }}
              transition={{ type: "spring" }}
              className={`absolute left-0 top-0 z-[1] flex p-[1.25rem] md:px-[1.5rem] md:py-[1.875rem] w-full justify-between items-center ${showNav && !navOpen && global.window?.scrollY !== 0 ? "bg-white" : ""} ${navOpen ? "" : ""}`}
            >
              <a href="/" className={`internal logo--text text-3xl ${navOpen ? "text-white" : ""}`} title="KKR">
                JAY
              </a>
              <div className="flex items-center gap-[2rem]">
                <a href="/search" className="cursor-internal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22.7" viewBox="0 0 22 25" fill="none">
                    <path d="M14.5029 16.7676L21.0386 23.5711" stroke={navOpen ? "#ffffff" : "#49004B"} strokeWidth="1.8"></path>
                    <path
                      d="M17.9426 10.2587C17.9426 14.9541 14.1363 18.7605 9.44085 18.7605C4.74544 18.7605 0.939062 14.9541 0.939062 10.2587C0.939062 5.56331 4.74544 1.75693 9.44085 1.75693C14.1363 1.75693 17.9426 5.56331 17.9426 10.2587Z"
                      stroke={navOpen ? "#ffffff" : "#49004B"}
                      strokeWidth="1.8"
                    ></path>
                  </svg>
                </a>
                <a href="/portal" className="external">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Login">
                      <g id="Vector">
                        <path
                          d="M21.9105 22.0838H2.74046C2.46193 22.0838 2.23599 21.8515 2.23599 21.565C2.23599 15.8449 6.76201 11.1914 12.325 11.1914C17.8771 11.1914 22.3965 15.8263 22.414 21.5314C22.4148 21.5427 22.4151 21.554 22.4151 21.5653C22.4151 21.8518 22.189 22.0838 21.9105 22.0838ZM3.25856 21.0464H21.3911C21.1285 16.1386 17.1624 12.2286 12.3251 12.2286C7.48742 12.2288 3.52099 16.1388 3.25856 21.0464Z"
                          fill={navOpen ? "#ffffff" : "#49004B"}
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.9105 22.0838C22.189 22.0838 22.4151 21.8518 22.4151 21.5653C22.4151 21.554 22.4148 21.5427 22.414 21.5314C22.3965 15.8263 17.8771 11.1914 12.325 11.1914C6.76201 11.1914 2.23599 15.8449 2.23599 21.565C2.23599 21.8515 2.46193 22.0838 2.74046 22.0838H21.9105ZM21.8178 22.2854H2.74046C2.35361 22.2854 2.03984 21.9628 2.03984 21.565C2.03984 15.7335 6.65368 10.9897 12.325 10.9897C17.9833 10.9897 22.5893 15.7114 22.6102 21.5249C22.6109 21.5384 22.6113 21.5518 22.6113 21.5653C22.6113 21.9633 22.2975 22.2857 21.9106 22.2857L21.8178 22.2854ZM21.3911 21.0464C21.3875 20.979 21.3832 20.9117 21.3782 20.8447C21.0193 16.0319 17.0959 12.2286 12.3251 12.2286C7.55388 12.2288 3.63058 16.0321 3.27193 20.8447C3.26693 20.9117 3.26217 20.979 3.25856 21.0464H21.3911ZM3.46866 20.8447H21.1815C20.8231 16.1434 16.9875 12.4303 12.3251 12.4303C7.66231 12.4305 3.8268 16.1436 3.46866 20.8447Z"
                          fill={navOpen ? "#ffffff" : "#49004B"}
                        ></path>
                        <path
                          d="M12.3251 12.2286C9.55997 12.2286 7.31038 9.91529 7.31038 7.07217C7.31038 4.22904 9.56003 1.91591 12.3251 1.91591C15.0903 1.91591 17.3399 4.22904 17.3399 7.07217C17.3401 9.91529 15.0904 12.2286 12.3251 12.2286ZM12.3251 2.95305C10.1162 2.95305 8.31928 4.80087 8.31928 7.07193C8.31928 9.34324 10.1163 11.1914 12.325 11.1914C14.534 11.1914 16.331 9.343 16.331 7.07193C16.3312 4.80063 14.5341 2.95305 12.3251 2.95305Z"
                          fill={navOpen ? "#ffffff" : "#49004B"}
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.1349 7.07192C16.135 4.91203 14.4258 3.15473 12.3251 3.15473C10.2245 3.15473 8.51543 4.91224 8.51543 7.07193C8.51543 9.23184 10.2246 10.9897 12.325 10.9897C14.4257 10.9897 16.1349 9.2316 16.1349 7.07192ZM12.3251 12.4303C9.45164 12.4303 7.11423 10.0267 7.11423 7.07217C7.11423 4.11766 9.4517 1.71423 12.3251 1.71423C15.1986 1.71423 17.5361 4.11766 17.5361 7.07217C17.5362 10.0267 15.1987 12.4303 12.3251 12.4303ZM16.331 7.07193C16.3312 4.80063 14.5341 2.95305 12.3251 2.95305C10.1162 2.95305 8.31928 4.80087 8.31928 7.07193C8.31928 9.34324 10.1163 11.1914 12.325 11.1914C14.534 11.1914 16.331 9.343 16.331 7.07193ZM7.31038 7.07217C7.31038 9.91529 9.55997 12.2286 12.3251 12.2286C15.0904 12.2286 17.3401 9.91529 17.3399 7.07217C17.3399 4.22904 15.0903 1.91591 12.3251 1.91591C9.56003 1.91591 7.31038 4.22904 7.31038 7.07217Z"
                          fill={navOpen ? "#ffffff" : "#49004B"}
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <button
                  className="flex items-center justify-center"
                  onClick={() => {
                    setNavOpen((navOpen) => !navOpen)
                    setNavPage(undefined)
                  }}
                >
                  {navOpen ? (
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Hamburger">
                        <g id="Group 3215">
                          <g id="Vector">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.89697 20.9345L20.3464 2.57147L21.7541 3.92273L4.30466 22.2858L2.89697 20.9345Z" fill="white"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.73483 3.28729L21.7408 20.4949L20.3597 21.8736L3.35378 4.66604L4.73483 3.28729Z" fill="white"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
                      <g id="Hamburger">
                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M22.6113 3.38217H2.03985V1L22.6113 1V3.38217ZM22.6113 13.1911H2.03985V10.8089H22.6113V13.1911ZM14.6113 23H2.03985V20.6178H14.6113V23Z" fill="#49004B"></path>
                      </g>
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>
            {navOpen && (
              <div className="mt-24 relative overflow-x-hidden overflow-y-scroll h-[calc(100vh-76px)] pt-8 w-full bg-[--color-primary-turquoise] text-white font-light ampersand-bg">
                <div className="absolute top-0 left-0 z-[1]">
                  <div className="flex">
                    {(window.innerWidth >= 768 || navPage === undefined) && (
                      <ul className="flex flex-col gap-2 px-5 md:px-10 ">
                        <li>
                          <span className="hover:text-[--color-primary-yellow] hover:underline text-[2.5rem]" onClick={() => setNavPage("about")}>
                            About
                          </span>
                        </li>
                        <li>
                          <span className="hover:text-[--color-primary-yellow] hover:underline text-[2.5rem]" onClick={() => setNavPage("approach")}>
                            Approach
                          </span>
                        </li>
                        <li>
                          <span className="hover:text-[--color-primary-yellow] hover:underline text-[2.5rem]" onClick={() => setNavPage("invest")}>
                            Invest
                          </span>
                        </li>
                        <li>
                          <span className="hover:text-[--color-primary-yellow] hover:underline text-[2.5rem]" onClick={() => setNavPage("insights")}>
                            Insights
                          </span>
                        </li>
                      </ul>
                    )}
                    {navPage === "about" && (
                      <div className="font-normal px-5 md:px-0 md:max-w-[35%]">
                        <div className="flex flex-col items-start">
                          <svg onClick={() => setNavPage(undefined)} className={`mb-6 ${window.innerWidth > 768 && "hidden"}`} width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Arrow">
                              <path id="Vector 169" d="M8.87879 1L0.999999 9L8.87879 17" stroke="#FFD828"></path>
                              <path id="Vector 173" d="M1 9L27 9" stroke="#FFD828"></path>
                            </g>
                          </svg>

                          <p className="text-sm">A leading global investment firm founded in 1976</p>
                          <a href="/about" className="text-xs font-bold mt-3 border-b border-white hover:border-[--color-primary-yellow] hover:text-[--color-primary-yellow] py-2">
                            LEARN MORE
                          </a>
                        </div>
                        <ul className="flex flex-col gap-3 text-[1.5rem] pt-6 pb-5 font-light">
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              History
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Institutional Investors
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Global Wealth
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Family Capital
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Sustainability
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                    {navPage === "approach" && (
                      <div className="font-normal px-5 md:px-0 md:max-w-[35%]">
                        <div className="flex flex-col items-start">
                          <svg onClick={() => setNavPage(undefined)} className={`mb-6 ${window.innerWidth > 768 && "hidden"}`} width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Arrow">
                              <path id="Vector 169" d="M8.87879 1L0.999999 9L8.87879 17" stroke="#FFD828"></path>
                              <path id="Vector 173" d="M1 9L27 9" stroke="#FFD828"></path>
                            </g>
                          </svg>

                          <p className="text-sm">A network of expert resources supporting our investments</p>
                          <a href="/about" className="text-xs font-bold mt-3 border-b border-white hover:border-[--color-primary-yellow] hover:text-[--color-primary-yellow] py-2">
                            LEARN MORE
                          </a>
                        </div>
                        <ul className="flex flex-col text-[1.5rem] pt-6 pb-5 gap-3 font-light">
                          <li>
                            <a href="/about/" className="hover:text-[--color-primary-yellow]">
                              Capstone
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                    {navPage === "invest" && (
                      <div className="font-normal px-5 md:px-0 md:max-w-[35%]">
                        <div className="flex flex-col items-start">
                          <svg onClick={() => setNavPage(undefined)} className={`mb-6 ${window.innerWidth > 768 && "hidden"}`} width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Arrow">
                              <path id="Vector 169" d="M8.87879 1L0.999999 9L8.87879 17" stroke="#FFD828"></path>
                              <path id="Vector 173" d="M1 9L27 9" stroke="#FFD828"></path>
                            </g>
                          </svg>

                          <p className="text-sm">Delivering asset management, capital markets and insurance solutions to our clients and partners around the world</p>
                          <a href="/about" className="text-xs font-bold mt-3 border-b border-white hover:border-[--color-primary-yellow] hover:text-[--color-primary-yellow] py-2">
                            LEARN MORE
                          </a>
                        </div>
                        <ul className="flex flex-col gap-3 text-[1.5rem] pt-6 pb-5 font-light">
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Private Equity
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Infrastructure
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Real Estate
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Credit
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Capital Markets
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Insurance
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Strategic Patnerships
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                    {navPage === "insights" && (
                      <div className="font-normal px-5 md:px-0 md:max-w-[35%]">
                        <div className="flex flex-col items-start">
                          <svg onClick={() => setNavPage(undefined)} className={`mb-6 ${window.innerWidth > 768 && "hidden"}`} width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Arrow">
                              <path id="Vector 169" d="M8.87879 1L0.999999 9L8.87879 17" stroke="#FFD828"></path>
                              <path id="Vector 173" d="M1 9L27 9" stroke="#FFD828"></path>
                            </g>
                          </svg>

                          <p className="text-sm">Our perspectives on today's markets, investment opportunities, and challenges</p>
                          <a href="/insights" className="text-xs font-bold mt-3 border-b border-white hover:border-[--color-primary-yellow] hover:text-[--color-primary-yellow] py-2">
                            LEARN MORE
                          </a>
                        </div>
                        <ul className="flex flex-col gap-3 text-[1.5rem] pt-6 pb-5 font-light">
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Macro Insights
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Investment Insights
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Wealth Insights
                            </a>
                          </li>
                          <li>
                            <a href="/about/history" className="hover:text-[--color-primary-yellow]">
                              Education
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="">
                    <nav className="">
                      <ul className="flex flex-col md:gap-6 md:flex-row px-5 my-6 font-medium">
                        <li>
                          <a href="/ir" className="external pb-5 md:pb-0 hover:text-[--color-primary-yellow]">
                            Investor Relations
                          </a>
                        </li>
                        <li>
                          <a href="/media" className="external pb-5 md:pb-0 hover:text-[--color-primary-yellow]">
                            Media center
                          </a>
                        </li>
                        <li>
                          <a href="/career" className="external pb-5 md:pb-0 hover:text-[--color-primary-yellow]">
                            Career
                          </a>
                        </li>
                        <li>
                          <a href="/locations" className="internal pb-5 md:pb-0 hover:text-[--color-primary-yellow]">
                            Locations
                          </a>
                        </li>
                        <li>
                          <a href="/contact" className="internal pb-5 md:pb-0 hover:text-[--color-primary-yellow]">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
