import Footer from '@/components/navigation/Footer'
import Navbar from '@/components/navigation/Navbar'
import React from 'react'

function Layout({children}) {
  return (
    <main>
        <Navbar/>
        {children}
        <Footer/>
    </main>
  )
}

export default Layout