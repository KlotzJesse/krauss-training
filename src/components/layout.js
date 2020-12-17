import React from "react"
import tw from "twin.macro"

import Navigation from "./navigation"

const Body = tw.div`min-h-screen`

export default function Layout({ children }) {
  return (
    <Body>
      <Navigation/>
      {children}
    </Body>
  )
}