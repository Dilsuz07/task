import React from 'react'
import nature3 from '../image/nature3.png'
import natureWord from '../image/natureWord.png'

const Nature3 = () => {
    return (
        <div className='w-[100vw] h-[100vh] bg-[#F2A761] p-[4rem_7rem] flex items-center'>
            <div className='float-left justify-center'>
                <img src={natureWord} />
                <p className='w-[28rem] mt-[12px] font-normal text-normal leading-[2rem] text-[#fff] text-[26px]'>Swim  in crystal-clear lakes, climb tall <br /> mountains and wander through <br /> dreamlike gorges.</p>
            </div>
            <div className='ml-[10rem]'>
                <img src={nature3} className='w-[500px] h-[550px]' />
            </div>
        </div>
    )
}

export default Nature3