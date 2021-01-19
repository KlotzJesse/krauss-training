import React from "react"
import tw from "twin.macro"

import Navigation from "./navigation"
import Hero from "./hero"

const Body = tw.div`min-h-screen`
const Header = tw.header`min-h-screen bg-gray-100 2xl:px-60 md:px-20 flex flex-col`

export default function Layout({ children }) {
  return (
    <Body>
      <Header>
        <Navigation/>
        <Hero/>
      </Header>
      {children}
    </Body>
  )
}