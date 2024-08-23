import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Card from '../components/card'
import Carousal from '../components/carousal'
export default function Home() {
  return (
    <div>
     <div><Navbar/></div>
     <div><Carousal/></div>
     <div><Card/></div>
      <div><Footer/></div>
    </div>
  )
}
