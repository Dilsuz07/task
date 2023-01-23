import React from 'react'
import Packages from './../Components/Cards/Packages';
import title1 from '../image/title1.png'
import title2 from '../image/title2.png'
import title3 from '../image/title3.png'

const PackagesPage = () => {
    return (
        <div className='bg-[#34593E] w-full h-[100vh]'>
            <p className='up-class font-normal text-[50px] leding-[59px] text-center color-[#1A4D65] p-[2.5rem] text-[#fff]'>Packages</p>
            <div className='flex justify-center gap-[20px] items-center '>
                <Packages image={title1} bgcolor='#FAF0C6' cost={50} title={'Basic plan'} />
                <Packages image={title2} bgcolor='#F3C317' cost={70} title={'The most popular'} />
                <Packages image={title3} bgcolor='#FAF0C6' cost={100} title={'Customie trip'} />
            </div>
        </div>
    )
}

export default PackagesPage