import React from 'react'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import DayExamples from '../Components/DayExamples/DayExamples';
import DayEmaplesImage from './../image/dayExamples.png'

const DayExamplesPage = () => {
    return (
        <div className='w-[100vw] h-[100vh] p-[4rem] bg-[#F7F7F7]'>
            <div className='flex bg-[#F7F7F7]'>
                <p className='day-para font-normal text-[50px] leading-[60px] text-[#1A4D65]'>Day examples</p>
                <div className='flex ml-[15rem]'>
                    <div className='next-icon w-[48px] h-[48px] border-[1px] text-[20px] flex items-center justify-center mr-[1rem] transition-[.5s] hover:text-[#fff] hover:bg-[#3E7C50] cursor-pointer'><GrLinkPrevious /></div>
                    <div className='next-icon w-[48px] h-[48px] border-[1px] text-[20px] flex items-center justify-center transition-[.5s] hover:text-[#fff] hover:bg-[#3E7C50] cursor-pointer'><GrLinkNext /></div>
                </div>
            </div>
            <div className='float-left mt-[2rem] mr-[5rem]'>
                <DayExamples />
            </div>
            <img src={DayEmaplesImage} />
        </div>
    )
}

export default DayExamplesPage