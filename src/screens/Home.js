import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Card from '../components/card'
import Carausel from '../components/carausel'
export default function Home() {
  return (
    <div>
        <Navbar/>
       <div>
        <div >
            <Carausel/>
        </div>
        <div className='m-3'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
       </div>
        <Footer/>
         
    </div>
  )
}
