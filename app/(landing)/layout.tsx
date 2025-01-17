import React from 'react'
import LandingPageNavBar from './components/LandingPageNavBar'

function LandingLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
  return (
    <section className='flex min-h-screen flex-col overflow-x-clip'>
      <LandingPageNavBar />
 
      <div className="flex-grow">{children}</div>
    </section>
  )
}

export default LandingLayout