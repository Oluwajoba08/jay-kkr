"use client"

import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Search = () => {
  const [inputValue, setinputValue] = useState("")
  const [, set] = useState(false)

  return (
    <main className="relative">
      <Navbar />
      <div className="mt-24 py-24 bg-[#eef3f9]">
        {/* <label htmlFor="search"> */}
        <form className="flex w-4/5 border border-black mx-auto">
          <input type="text" name="search" className="px-2 py-[10px] w-full" value={inputValue} onChange={(e) => setinputValue(e.target.value)} placeholder="Search" />
          <button className="p-3 bg-white">
            <svg width="17.5" height="18.9" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4824 13.9731L18.9289 19.6428" stroke="#49004B" stroke-width="1.8"></path>
              <path
                d="M16.1984 8.54918C16.1984 12.3792 13.0935 15.484 9.26353 15.484C5.43354 15.484 2.32871 12.3792 2.32871 8.54918C2.32871 4.71918 5.43354 1.61436 9.26353 1.61436C13.0935 1.61436 16.1984 4.71918 16.1984 8.54918Z"
                stroke="#49004B"
                stroke-width="1.8"
              ></path>
            </svg>
          </button>
        </form>
        {/* </label> */}
      </div>
      <div className="w-full h-16 bg-white"></div>
      <Footer />
    </main>
  )
}

export default Search
