import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <MainContent />
    <Footer />
  </React.StrictMode>
)
