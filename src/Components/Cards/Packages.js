import React from 'react'
import { BsCheck } from 'react-icons/bs'


const Packages = ({ image, bgcolor, cost, title }) => {
    return (
        <div className='bg-[#FAF0C6] hover:bg-[#F3C317] transition-[.5s]' >
            <div className={`h-[120px] flex justify-center items-center text-center w-[350px]`}><img src={image} /></div>
            <div className='h-[330px] bg-[#fff] p-[23px]'>
                <div>
                    <span className='font-semibold text-[56px] leading-[69px] text-[#34593E]'>${cost}</span> <span className='text-[20px] leading-[24px]'>/ {title}</span>
                </div>
                <div className='mt-[23px]'>
                    <div className='flex mb-[8px]'>
                        <div className='flex justify-center items-center mr-[15px] h-[28px] w-[28px] rounded-[50%] bg-slate-200'><BsCheck /></div><p>Office access 10am - 6pm</p>
                    </div>
                    <div className='flex mb-[8px]'>
                        <div className='flex justify-center items-center mr-[15px] h-[28px] w-[28px] rounded-[50%] bg-slate-200'><BsCheck /></div><p>Office access 10am - 6pm</p>
                    </div>
                    <div className='flex mb-[8px]'>
                        <div className='flex justify-center items-center mr-[15px] h-[28px] w-[28px] rounded-[50%] bg-slate-200'><BsCheck /></div><p>Office access 10am - 6pm</p>
                    </div>
                    <div className='flex mb-[8px]'>
                        <div className='flex justify-center items-center mr-[15px] h-[28px] w-[28px] rounded-[50%] bg-slate-200'><BsCheck /></div><p>Office access 10am - 6pm</p>
                    </div>
                    <div className='flex mb-[8px]'>
                        <div className='flex justify-center items-center mr-[15px] h-[28px] w-[28px] rounded-[50%] bg-slate-200'><BsCheck /></div><p>Office access 10am - 6pm</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Packages