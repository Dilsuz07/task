import React from 'react'
import Card from '../Components/Cards/Card'
import UseImg1 from '../image/UseImg1.png'
import UseImg2 from '../image/UseImg2.png'
import UseImg3 from '../image/UseImg3.png'

const UsefulPage = () => {
  return (
    <div className='w-full p-[2.5rem_6rem]'>
      <p className='up-class font-normal text-[50px] leding-[59px] text-center color-[#1A4D65]'>Useful blog about <br /> Navoi Region</p>
      <div className='flex justify-evenly items-center'>
        <Card image1={UseImg3} logged={true} />
        <Card image1={UseImg2} logged={true} />
        <Card image1={UseImg1} logged={true} />
      </div>
    </div>
  )
}

export default UsefulPage