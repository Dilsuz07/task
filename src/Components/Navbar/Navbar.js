import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import Logo from '../../image/logo.png'

const Navbar = ({ downIcon, logged }) => {

    const navbarTitle = [
        {
            title: 'About',
            icon: true,
            logged: true
        },
        {
            title: 'What to do',
            icon: downIcon ? false : true,
            logged: false
        },
        {
            title: 'Day examples',
            logged: true
        },
        {
            title: 'Events',
            logged: true
        },
        {
            title: 'Packages',
            logged: true
        },
        {
            title: 'Blog',
            logged: true
        },
        {
            title: 'Feedback',
            logged: true
        }
    ]


    return (
        <div className={`flex justify-around items-center`}>
            <div>
                <img src={Logo} />
            </div>
            <div>
                <ul className='flex items-center gap-[24px]'>
                    {navbarTitle.map((item, index) => {
                        return <li key={index}>{item.title} {item.icon ? <BsChevronDown className='inline' /> : downIcon ? <BsChevronUp className='inline' /> : ''}</li>
                    })}
                </ul>
            </div>
            <div className='flex items-center gap-[24px]'>
                <select className='border-none outline-[0] bg-transparent'>
                    <option value='eng' className='text-[#000]'>Eng</option>
                    <option value='ru' className='text-[#000]'>Ru</option>
                    <option value='uzb' className='text-[#000]'>Uzb</option>
                </select>
                <button className='flex bg-[#265C35] text-[#fff] justify-center gap-[10px] p-[12px_16px] rounded-[20px] items-center'>Book trip</button>
            </div>
        </div>
    )
}

export default Navbar