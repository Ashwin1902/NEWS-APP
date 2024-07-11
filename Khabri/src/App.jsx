import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Panel from './components/Panel'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <div className='bg-slate-400'>
    <Header></Header>
    <Panel></Panel>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
