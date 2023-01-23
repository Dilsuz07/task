import React from 'react'
import oclock from '../image/oclock.png'
import oclock2 from '../image/oclock2.png'
import oclock3 from '../image/oclock3.png'
import oclock4 from '../image/oclock4.png'
import { AiOutlineCopyrightCircle, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'

const FooterPages = () => {
    return (
        <div className=''>
            <div className='flex justify-between items-center p-[45px_120px] bg-[#0D0D0D] text-[#fff]'>
                <div className='up-class font-normal text-[36px] leading-[120%]'>Contact a travel <br /> researcher</div>
                <div className='flex justify-between '>
                    <div>
                        <p className='font-light text-[18px] leading-[130%] text-[#2BAA4D]'>Call us</p>
                        <p className='font-normal text-[22px] leading-[130%] text-[#fff]'>+998 (71) 123-45-67</p>
                    </div>
                    <div className='ml-[6rem]'>
                        <p className='font-light text-[18px] leading-[130%] text-[#2BAA4D]'>E-mail us</p>
                        <p className='font-normal text-[22px] leading-[130%] text-[#fff]'>navoitravel@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between bg-[#000] text-[#fff] p-[45px_120px]'>
                <div>
                    <img src={oclock} className='mb-[1rem] cursor-pointer' />
                    <p className='font-normal text-[1rem] leading-[19px]'>SAN FRANCISKO</p>
                    <p className='font-normal text-[12px] leading-[140%] mt-[.5rem] text-[#858585]'>Suite 100 , 1160 Battery Street East <br />San Francisko 94111, CA</p>
                </div>
                <div>
                    <img src={oclock2} className='mb-[1rem] cursor-pointer' />
                    <p className='font-normal text-[1rem] leading-[19px]'>VANCOUVER</p>
                    <p className='font-normal text-[12px] leading-[140%] mt-[.5rem] text-[#858585]'>Suite 100 , 1160 Battery Street East <br />San Francisko 94111, CA</p>
                </div>
                <div>
                    <img src={oclock3} className='mb-[1rem cursor-pointer]' />
                    <p className='font-normal text-[1rem] leading-[19px]'>LONDON</p>
                    <p className='font-normal text-[12px] leading-[140%] mt-[.5rem] text-[#858585]'>Suite 100 , 1160 Battery Street East <br />San Francisko 94111, CA</p>
                </div>
                <div>
                    <img src={oclock4} className='mb-[1rem] cursor-pointer' />
                    <p className='font-normal text-[1rem] leading-[19px]'>DUBAI</p>
                    <p className='font-normal text-[12px] leading-[140%] mt-[.5rem] text-[#858585]'>Suite 100 , 1160 Battery Street East <br />San Francisko 94111, CA</p>
                </div>
            </div>
            <div className='p-[0_120px] bg-[#000]'>
                <hr />
                <div className='flex justify-between p-[29px_0px] bg-[#000] text-[#fff]'>
                    <div className='flex items-center font-normal text-[12px] leading-[15px] cursor-pointer' ><AiOutlineCopyrightCircle /><span className='mr-[10px]'>2023 Navoi Travel.All rights Reserved</span></div>
                    <div className='flex justify-between items-center gap-[20px] cursor-pointer'>
                        <AiOutlineInstagram />
                        <ImFacebook />
                        <AiFillYoutube />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterPages