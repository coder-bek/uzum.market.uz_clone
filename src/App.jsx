import React from 'react'
import Footer from './components/Footer'
import { Toaster } from 'sonner'
import Navbar from './components/headers/Navbar'
import Main from './components/main/Main'

const App = () => {
  return <>
    <Toaster richColors />
    <Navbar />
    <Main />
    <Footer />
  </>

}

export default App