"use client"

import React, { useState, createContext } from "react"

type mouseProps = {
  mouseType: "default" | "external" | "internal" | "internal-blue" | "play"
  setMouseType: React.Dispatch<React.SetStateAction<"default" | "external" | "internal" | "internal-blue" | "play">>
}

export const MouseContext = createContext<mouseProps | null>(null)

const MouseProvider = ({ children }: { children: React.ReactNode }) => {
  const [mouseType, setMouseType] = useState<"default" | "external" | "internal" | "internal-blue" | "play">("default")

  return <MouseContext.Provider value={{ mouseType, setMouseType }}>{children}</MouseContext.Provider>
}

export default MouseProvider
