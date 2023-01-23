import React from 'react'
import Card from '../Components/Cards/Card'
import UpComingImage1 from '../image/uncomingImg.png'
import UpComingImage2 from '../image/upcomingImg2.png'

const UpComingPage = () => {
    return (
        <div>
            <div className='w-full h-[50vh] bg-[#F6F6F6]'>
                <p className='pt-[1rem] up-class font-normal text-[50px] leading-[59px] text-[#1A4D65] text-center'>Upcoming Events</p>
            </div>
            <div className='w-full h-[50vh] bg-[#34593E]'>
                <div className='absolute flex gap-[3.5rem] mt-[-15rem] ml-[20rem] text-[#fff]'>
                    <Card image1={UpComingImage1} />
                    <Card image1={UpComingImage2} />
                </div>
            </div>
        </div>
    )
}

export default UpComingPage