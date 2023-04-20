import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import RoomStays from '@/components/RoomStays'
import Footer1 from '@/components/footer/Footer1'
import Cards from '@/components/cards/Ucard'
export default function index() {
  return (
    <div className="grid grid-cols-1 mx-auto">
      <Navbar/>
      <RoomStays/>
      <Cards/>
      <Footer1/>
    </div>
  )
}
