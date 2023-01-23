import React from 'react'
import { GrLinkNext } from 'react-icons/gr'

const NavoiMap = () => {
    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh] navoi-map text-center'>
            <div>
                <p className='m-4 navoi-map-text font-normal text-[50px] leading-[59px] text-[#FCCF06]'>Explore interectavi map of Navoi</p>
                <p className='m-4 font-light text-[20px] leading-[130%]'>Organize your trip and find best places <br /> to visit near you</p>
                <button className='border-[1px] p-[8px_20px] rounded-[10px] hover:opacity-[.5]'>Explore map <GrLinkNext className='inline ml-[5px]' /></button>
            </div>
        </div>
    )
}

export default NavoiMap