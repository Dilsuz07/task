import React from 'react'
import '../../src/index.css'
import Travel from '../image/Travel.png'
import WhatToDo from '../Components/WhatToDo';
import { BsChevronDown } from 'react-icons/bs'
import Logo from './../image/logo.png'
import { useState } from 'react';

const MainPage = () => {

  const [state, setState] = useState(true)

  const navbarTitle = [
    {
      title: 'About',
      icon: true,

    },
    {
      title: 'What to do',
      icon: true,
      logged: state

    },
    {
      title: 'Day examples',

    },
    {
      title: 'Events',

    },
    {
      title: 'Packages',

    },
    {
      title: 'Blog',

    },
    {
      title: 'Feedback',

    }
  ]

  function toDo() {
    return setState(<WhatToDo />)
  }

  return (
    <div className='mainStyle w-[100vw] h-[100vh] p-[1rem] text-center text-[#fff]'>
      <div className={`flex justify-around items-center`}>
        <div>
          <img src={Logo} />
        </div>
        <div>
          <ul className='flex items-center gap-[24px]'>
            {navbarTitle.map((item, index) => {
              return <li onClick={item.logged ? () => toDo() : () => console.log('')} key={index} >{item.title} {item.icon ? <BsChevronDown className='inline' /> : ''}</li>
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
      {state}
      <p className='font-normal text-[3.93rem] leading-[5rem] text-[#fff] fontFamily mt-[4rem] mb-[1.5rem]'>Unforgettable travel experience <br /> in Navoi city</p>
      <div className='w-full flex justify-center'>
        <img src={Travel} className='text-center' />
      </div>
    </div>
  )
}

export default MainPage