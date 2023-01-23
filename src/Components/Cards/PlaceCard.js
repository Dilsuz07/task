import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'


const PlaceCard = ({ image, text }) => {
    return (
        <div className='transition-[.5s] hover:translate-y-[50px] place'>
            <div>
                <div className={`flex justify-center items-center text-[#fff] absolute top-[145px] left-[125px] w-[95px] h-[95px] bg-[#265C35] rounded-[50%] font-normal text-[1rem] transition-[.5s] cursor-pointer  opacity-0 circle`}>Learn <br /> more<br /> <GrFormNextLink /></div>
                <img src={image} />
            </div>
            <p className='font-semibold text-[20px] leading-[29px] float-left pt-[1rem] text-[#fff]'> {text}</p>
        </div>
    )
}

export default PlaceCard