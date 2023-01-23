import React from 'react'
import whatDo from '../image/whatDo.png'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import Logo from './../image/logo.png'
import { motion } from 'framer-motion'

const WhatToDo = () => {
  let downIcon = false

  const navbarTitle = [
    {
      title: 'About',
      icon: true,
    },
    {
      title: 'What to do',
      icon: downIcon ? false : true,
    },
    {
      title: 'Day examples',
      icon: false,
    },
    {
      title: 'Events',
      icon: false,
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

  return (
    <motion.div
      key='content'
      initial='collapsed'
      animate='open'
      exit='collapsed'
      variants={{
        open: { opacity: 1, height: '80%' },
        collapsed: { opacity: 0, height: 0 }
      }}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      className={`absolute w-[100vw] h-[80vh] top-[0] left-[0] bg-[#fff] p-[1rem] what-do overflow-hidden`}>
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

      <div className='flex gap-[100px] ml-[300px]'>
        <img src={whatDo} />
        <ul className='mr-[250px] text-left what-do-ul font-normal text-[2rem] leading-[38px] text-[#9E9E9E]'>
          <li className='leading-[45px]'>Art and culture</li>
          <li className='leading-[45px]'>Coast and beaches</li>
          <li className='leading-[45px]'>City tourism</li>
          <li className='leading-[45px]'>Nature</li>
          <li className='leading-[45px]'>National food</li>
          <li className='leading-[45px]'>Sport and adventure</li>
          <li className='leading-[45px]'>Shopping</li>
          <li className='leading-[45px]'>Routes</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default WhatToDo