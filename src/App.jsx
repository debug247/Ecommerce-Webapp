import React from 'react'
import Hero from './sections/Hero'
import Collections from './sections/Collections'
import BestSellers from './sections/BestSellers'
import Banner from './sections/Banner'
import NewArrivals from './sections/NewArrivales'
import Clients from './sections/Clients'
import Blogs from './sections/Blogs'
import Footer from './sections/Footer'
import Header from './sections/Header'
import { DarkModeProvider } from './components/DarkModeContext'

const App = () => {
  return (
    <>
    <DarkModeProvider>
    <Header />
    <Hero />
    <Collections />
    <BestSellers />
    <Banner />
    <NewArrivals />
    <Clients />
    <Blogs />
    <Footer />
    </DarkModeProvider>
    </>
  )
}

export default App