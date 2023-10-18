import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import Carousal from '../component/Carousal'

export default function Home() {
  const foodItem = [
    {
      name: 'Chicken Curry',
      imageSrc: './images/chickencurry.jpg'
    }
  ];
  return (
    <div>
        <div> <Navbar/> </div>
        <div> <Carousal/></div>
        <div className='m-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {foodItem.map((item,index) => (
            <Card key={index} item={item.name} imageSrc={item.imageSrc} />
          ))}
        </div>
        <div> <Footer/> </div>
    </div>
  )
}