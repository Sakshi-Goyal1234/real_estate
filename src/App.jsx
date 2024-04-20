import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';
import Companies from './components/Companies/Companies.jsx';
import Residencies from './components/Residencies/Residencies.jsx';
import Value from './components/value/Value.jsx';
import Contact from './components/contact/Contact.jsx';
import Started from './components/started/Started.jsx';
function App()
{
  return (
    <>
 <Header/>
  <Hero/>     
  <Companies/>
  <Residencies/>
  <Value/>
  <Contact/>
  <Started/>
    </>
  )}


export default App
