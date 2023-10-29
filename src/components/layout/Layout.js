import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


export default function Layout({ children }) {
  return (
    <div className='main_body'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
