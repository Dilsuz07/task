import React from 'react'
import Nature from './Nature';
import Nature2 from './Nature2';
import Nature3 from './Nature3';

const NaturePage = () => {
    return (
        <div className='flex flex-row w-[100vw] overflow-x-scroll nature-page'>
            <Nature />
            <Nature2 />
            <Nature3 />
        </div>
    )
}

export default NaturePage