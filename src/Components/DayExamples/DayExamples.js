import React from 'react'

const DayExamples = () => {

    const days = [
        {
            oclock: '08:30 - 10:00',
            title: 'Having breakfast'
        },
        {
            oclock: '10:10 - 11:00',
            title: 'Creative sessions'
        },
        {
            oclock: '11:10 - 12:00',
            title: 'Going to Qizilkum'
        },
        {
            oclock: '12:10 - 13:00',
            title: 'Lunch it Sarmishsay'
        },
        {
            oclock: '13:10 - 18:00',
            title: 'Visiting Sardoba Malik'
        },
        {
            oclock: '18:10 - 21:00',
            title: 'Having Sightseeing'
        }
    ]

    return (
        <div>
            <ul>
                {days.map((item, key) => {
                    return <li key={key} className=' flex justify-start items-center w-[650px] h-[60px] border-[1px] m-3 pl-[20px] bg-[#fff] transition-[0.5] hover:text-[#fff] hover:bg-[#3E7C50] cursor-pointer'><span className='font-semibold mr-5' >{item.oclock}</span> {item.title}</li>
                })}
            </ul>
        </div>
    )
}

export default DayExamples