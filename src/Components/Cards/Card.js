import React from 'react'
import { GrFormNext } from 'react-icons/gr'

const Card = ({ image1, logged }) => {

    return (
        <div className={`w-[320px] transition-[.5s] ${logged ? 'hover:translate-y-[80px]' : ''}`}>
            <img src={image1} />
            <p className={`font-normal text-[16px] leding-[24px]`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            <div className='flex items-center'>
                <div className='w-[55%] h-0 border-[1px] border-[solid] border-[#4F795B] mr-[10px]'></div>
                <div className='flex justify-center items-center font-light text-[1rem] text-[#8DB198] leading-[19px] color-[#8DB198]'>
                    Learn more <GrFormNext className='text-[22px]' />
                </div>
            </div>
        </div>
    )
}

export default Card